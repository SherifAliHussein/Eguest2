﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using E_Guest.BLL.DataServices.Interfaces;
using E_Guest.BLL.DTOs;
using E_Guest.BLL.Services.Interfaces;
using E_Guest.Common;
using E_Guest.Common.CustomException;
using E_Guest.DAL.Entities.Model;
using Newtonsoft.Json;
using Repository.Pattern.UnitOfWork;

namespace E_Guest.BLL.Services
{
    public class RoomFacade:BaseFacade,IRoomFacade
    {
        private IRoomService _roomService;
        private IUserService _userService;
        private IAdminService _adminService;
        private IPackageService _packageService;
        private ISupervisorService _supervisorService;
        private IReceptionistService _receptionistService;
        public RoomFacade(IUnitOfWorkAsync unitOFWork, IRoomService roomService, IUserService userService, IAdminService adminService, IPackageService packageService, ISupervisorService supervisorService, IReceptionistService receptionistService) : base(unitOFWork)
        {
            _roomService = roomService;
            _userService = userService;
            _adminService = adminService;
            _packageService = packageService;
            _supervisorService = supervisorService;
            _receptionistService = receptionistService;
        }

        public PagedResultsDto GetAllRoom(long adminId, int page, int pageSize)
        {
            var roomCount = _roomService.Query(x => !x.IsDeleted && x.AdminId == adminId).Select().Count();
            var rooms = Mapper.Map<List<RoomDto>>(_roomService.GetAllRooms(adminId, page, pageSize));
            PagedResultsDto results = new PagedResultsDto
            {
                TotalCount = roomCount,
                Data = rooms
            };
            return results;
        }

        public RoomDto GetRoom(long roomId)
        {
            var room = _roomService.Find(roomId);
            if (room == null) throw new NotFoundException(ErrorCodes.UserNotFound);
            if (room.IsDeleted) throw new NotFoundException(ErrorCodes.UserNotFound);
            return Mapper.Map<RoomDto>(room);

        }
        public void AddRoom (RoomDto roomDto, long adminId)
        {
            ValidateRoom(roomDto, adminId);
            var user = _userService.Find(adminId);
            if (user == null) throw new NotFoundException(ErrorCodes.UserNotFound);

            Room room = Mapper.Map<Room>(roomDto);
            room.AdminId = adminId;
            room.Password = PasswordHelper.Encrypt(roomDto.Password);
            room.Role = Enums.RoleType.Room;
            room.IsActive = true;

            Package package;

            var packages = _packageService.Query(x => x.AdminId== room.AdminId).Include(x => x.Rooms).Select().ToList();
            package = packages.OrderBy(x => x.Start).FirstOrDefault();
            int count = 1;
            while (true)
            {
                if (package.MaxNumberOfRooms > package.Rooms.Count(x => !x.IsDeleted))
                {
                    break;
                }
                //else
                //{
                //    consumedWaiters = consumedWaiters - package.MaxNumberOfWaiters;
                //}

                package = packages.OrderBy(x => x.Start).Skip(count).FirstOrDefault();
                count++;
            }
            room.PackageId = package.PackageId;

            _roomService.Insert(room);
            SaveChanges();
            UpdateSubscription(adminId, package.PackageGuid, package.Rooms.Count(x => !x.IsDeleted));

        }
        public void UpdateRoom(RoomDto roomDto, long adminId)
        {
            var room = _roomService.Find(roomDto.RoomId);
            if (room == null) throw new NotFoundException(ErrorCodes.UserNotFound);

            ValidateRoom(roomDto, adminId);
            room.UserName = roomDto.RoomName;
            room.Password = PasswordHelper.Encrypt(roomDto.Password);
            _roomService.Update(room);
            SaveChanges();
        }
        public void ActivateRoom(long roomId, long adminId)
        {
            var room = _roomService.Find(roomId);
            if (room == null) throw new NotFoundException(ErrorCodes.UserNotFound);
            room.IsActive = true;
            _roomService.Update(room);
            SaveChanges();
        }

        public void DeActivateRoom(long roomId, long adminId)
        {
            var room = _roomService.Find(roomId);
            if (room == null) throw new NotFoundException(ErrorCodes.UserNotFound);
            room.IsActive = false;
            _roomService.Update(room);
            SaveChanges();
        }
        public void DeleteRoom(long roomId, long adminId)
        {
            var room = _roomService.Find(roomId);
            if (room == null) throw new NotFoundException(ErrorCodes.UserNotFound);
            room.IsDeleted = true;
            room.IsActive = false;
            _roomService.Update(room);
            SaveChanges();
            var package = _packageService.Query(x => x.PackageId == room.PackageId).Include(x => x.Rooms)
                .Select().FirstOrDefault();
            UpdateSubscription(package.AdminId, package.PackageGuid, package.Rooms.Count(x => !x.IsDeleted));

        }


        private void ValidateRoom(RoomDto roomDto, long adminId)
        {
            if (string.IsNullOrEmpty(roomDto.RoomName)) throw new ValidationException(ErrorCodes.EmptyUserName);
            if (roomDto.RoomName.Length > 100) throw new ValidationException(ErrorCodes.NameExceedLength);
            if (string.IsNullOrEmpty(roomDto.Password)) throw new ValidationException(ErrorCodes.EmptyPassword);
            if (roomDto.Password.Length < 8 || roomDto.Password.Length > 25) throw new ValidationException(ErrorCodes.PasswordLengthNotMatched);

            if (_supervisorService.CheckUserNameDuplicated(roomDto.RoomName, roomDto.RoomId, adminId)) throw new ValidationException(ErrorCodes.UserNameAlreadyExist);
            if (_receptionistService.CheckUserNameDuplicated(roomDto.RoomName, roomDto.RoomId, adminId)) throw new ValidationException(ErrorCodes.UserNameAlreadyExist);
            if (_roomService.CheckUserNameDuplicated(roomDto.RoomName, roomDto.RoomId, adminId)) throw new ValidationException(ErrorCodes.UserNameAlreadyExist);
        }

        private void UpdateSubscription(long adminId, Guid packageGuid, int consumed)
        {
            var admin = _adminService.Find(adminId);
            string url = ConfigurationManager.AppSettings["subscriptionURL"];
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url + "/Users/EditUserConsumer");
            //request.Headers.Add("X-Auth-Token:" + token);
            request.ContentType = "application/json";
            request.Method = "POST";
            var serializer = JsonConvert.SerializeObject(new
            {
                userConsumer = consumed,
                userAccountId = admin.UserAccountId,
                backageGuid = packageGuid,
                productId = admin.ProductId
            });
            //request.ContentLength = serializer.Length;
            using (var streamWriter = new StreamWriter(request.GetRequestStream()))
            {
                string json = serializer;

                streamWriter.Write(json);
            }
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            {

                Stream receiveStream = response.GetResponseStream();
                StreamReader readStream = new StreamReader(receiveStream, Encoding.UTF8);
                var infoResponse = readStream.ReadToEnd();

                response.Close();
                receiveStream.Close();
                readStream.Close();
            }
        }
    }
}
