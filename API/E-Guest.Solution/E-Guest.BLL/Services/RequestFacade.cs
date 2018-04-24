﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using E_Guest.BLL.DataServices.Interfaces;
using E_Guest.BLL.DTOs;
using E_Guest.BLL.Services.Interfaces;
using E_Guest.Common;
using E_Guest.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;
using E_Guest.Common.CustomException;

namespace E_Guest.BLL.Services
{
    public class RequestFacade : BaseFacade, IRequestFacade
    {
        private IRequestService _requestService;
        private ISupervisorService _supervisorService;
        private IReceptionistService _receptionistService;
        private IRequestDetailService _requestDetailService;
        private IUserService _userService;
        private IFeatureDetailService _featureDetailService;
        private IRestaurantWaiterService _restaurantWaiterService;
        public RequestFacade(IUnitOfWorkAsync unitOfWork, IRequestService requestService, IReceptionistService receptionistService, ISupervisorService supervisorService, IRequestDetailService requestDetailService, IUserService userService, IFeatureDetailService featureDetailService, IRestaurantWaiterService restaurantWaiterService) : base(unitOfWork)
        {
            _requestService = requestService;
            _receptionistService = receptionistService;
            _supervisorService = supervisorService;
            _requestDetailService = requestDetailService;
            _userService = userService;
            _featureDetailService = featureDetailService;
            _restaurantWaiterService = restaurantWaiterService;
        }

        public void CreateRequest(RequestDto requestDto)
        {
            Request request = Mapper.Map<Request>(requestDto);

            var user = _userService.Find(requestDto.RoomId);
            if (user == null)
                throw new ValidationException(ErrorCodes.UserNotFound);
            if (user.IsDeleted)
                throw new ValidationException(ErrorCodes.UserDeleted);
            if (!user.IsActive)
                throw new ValidationException(ErrorCodes.UserDeactivated);
            request.CreateTime = DateTime.UtcNow;
            request.Status = Enums.RequestStatus.Pending;

            //if (requestDto.Type == Enums.FeatureType.Restaurant)
            //{
            //    foreach (var item in requestDto.RequestDetails)
            //    {
            //        request.RequestDetails.Add(new RequestDetail
            //        {
            //            ItemSizeId = item.ItemSizeId,
            //            Number = item.Number,
            //            //RequestId = requestId,
            //            Price = item.Price
            //        });
            //    }
            //}
            _requestDetailService.InsertRange(request.RequestDetails);
            _requestService.Insert(request);
            SaveChanges();
        }

        public PagedResultsDto GetAllRequests(long userId, int page, int pageSize, string role, long roomId, long featureId, string from , string to)
        {
            var user = _userService.Find(userId);
            if (user == null)
                throw new ValidationException(ErrorCodes.UserNotFound);
            if (user.IsDeleted)
                throw new ValidationException(ErrorCodes.UserDeleted);
            if (!user.IsActive)
                throw new ValidationException(ErrorCodes.UserDeactivated);
            int requestsCount = 0;
            List<RequestDto> requests = null;
            if (role == Enums.RoleType.Admin.ToString())
            {
                DateTime fromDateTime = !String.IsNullOrEmpty(from) ? DateTime.Parse(from) : DateTime.MinValue;
                DateTime toDateTime = !String.IsNullOrEmpty(to) ? DateTime.Parse(to) : DateTime.MaxValue;
                requestsCount = _requestService.Query(x => x.Creater.AdminId == userId &&
                                                           (roomId <= 0 || x.CreationBy == roomId)
                                                           && (featureId <= 0 || x.FeatureId == featureId)
                                                           && x.CreateTime >= fromDateTime && x.CreateTime <= toDateTime).Select().Count();
                requests = Mapper.Map<List<RequestDto>>(_requestService.GetAllRequestsByAdmin(userId, page, pageSize, roomId,featureId, fromDateTime, toDateTime));
            }
            else if (role == Enums.RoleType.Supervisor.ToString())
            {
                //var supervisor = _supervisorService.Find(userId);
                //var featureIds = supervisor.SupervisorFeatures.Select(x => x.FeatureId);

                DateTime fromDateTime = !String.IsNullOrEmpty(from) ? DateTime.Parse(from) : DateTime.MinValue;
                DateTime toDateTime = !String.IsNullOrEmpty(to) ? DateTime.Parse(to) : DateTime.MaxValue;
                requestsCount = _requestService
                    .Query(x => x.Feature.SupervisorFeatures.Select(s => s.SupervisorId).Contains(userId) &&
                                (roomId <= 0 || x.CreationBy == roomId) && (featureId <= 0 || x.FeatureId == featureId)
                                && x.CreateTime >= fromDateTime && x.CreateTime <= toDateTime)
                    .Select().Count();
                requests = Mapper.Map<List<RequestDto>>(_requestService.GetAllRequestsBySupervisor(userId, page, pageSize, roomId, featureId, fromDateTime, toDateTime));
            }
            else if (role == Enums.RoleType.Receptionist.ToString())
            {
                DateTime fromDateTime = !String.IsNullOrEmpty(from) ? DateTime.Parse(from) : DateTime.MinValue;
                DateTime toDateTime = !String.IsNullOrEmpty(to) ? DateTime.Parse(to) : DateTime.MaxValue;
                requestsCount = _requestService
                    .Query(x => x.Feature.Creater.Receptionists.Select(r => r.UserId).Contains(userId) &&
                                (roomId <= 0 || x.CreationBy == roomId) && (featureId <= 0 || x.FeatureId == featureId)
                                && x.CreateTime >= fromDateTime && x.CreateTime <= toDateTime)
                    .Select().Count();
                requests = Mapper.Map<List<RequestDto>>(_requestService.GetAllRequestsByReceptionist(userId, page, pageSize, roomId, featureId, fromDateTime, toDateTime));
            }
            else if (role == Enums.RoleType.Waiter.ToString())
            {
                DateTime fromDateTime = !String.IsNullOrEmpty(from) ? DateTime.Parse(from) : DateTime.MinValue;
                DateTime toDateTime = !String.IsNullOrEmpty(to) ? DateTime.Parse(to) : DateTime.MaxValue;
                var waiter = _restaurantWaiterService.Find(userId);
                requestsCount = _requestService.Query(x => x.RestaurantId == waiter.RestaurantId).Select().Count();
                requests = Mapper.Map<List<RequestDto>>(_requestService.GetAllRequestsByWaiter(waiter.RestaurantId, page, pageSize, roomId, fromDateTime, toDateTime));
            }

            PagedResultsDto results = new PagedResultsDto
            {
                TotalCount = requestsCount,
                Data = requests
            };
            return results;
        }

        public List<RequestDetailDto> GetAllRequestDetailByFeatureId(long featureId)
        {
            var lk = _requestService.Query(x => x.FeatureId == featureId).Select().ToList();
            var lk1 = _requestService.Query(x => x.FeatureId == featureId && x.Status != Enums.RequestStatus.Rejected).Select().ToList();
            var requestDetails = Mapper.Map<List<RequestDetailDto>>(_requestDetailService
                .Query(x => x.Request.FeatureId == featureId && x.Request.Status != Enums.RequestStatus.Rejected &&
                            (x.FeatureDetail.FeatureControl.Control == Enums.Control.Available || x.FeatureDetail.FeatureControl.Control == Enums.Control.ListOfAvailable)).Select().ToList());
            return requestDetails;
        }

        public void ApproveRequest(long requestId, long userId, List<RequestDetailDto> requestDetailDtos)
        {
            Request request = _requestService.Find(requestId);
            var user = _userService.Find(userId);
            if(user == null)
                throw new ValidationException(ErrorCodes.UserNotFound);
            if (user.IsDeleted)
                throw new ValidationException(ErrorCodes.UserDeleted);
            if (!user.IsActive)
                throw new ValidationException(ErrorCodes.UserDeactivated);
            if (request.Status == Enums.RequestStatus.Pending)
            {

                request.ModifyTime = DateTime.UtcNow;
                request.ModifiedBy = userId;
                request.Status = Enums.RequestStatus.Approved;
                //if (requestDetailDtos != null && request.Feature.Type == Enums.FeatureType.Normal)
                //{
                //    foreach (var requestDetail in requestDetailDtos)
                //    {
                //        var price = _featureDetailService.Find(requestDetail.FeatureDetailId).Price;
                //        request.RequestDetails.Add(new RequestDetail
                //        {
                //            FeatureDetailId = requestDetail.FeatureDetailId,
                //            Number = requestDetail.Number,
                //            RequestId = requestId,
                //            Price = price
                //        });
                //    }
                //    _requestDetailService.InsertRange(request.RequestDetails);
                //}
                _requestService.Update(request);
                SaveChanges();
            }
            else
                throw new ValidationException(ErrorCodes.RequestStatusChanged);
        }

        public void RejectRequest(long requestId, long userId)
        {
            Request request = _requestService.Find(requestId);
            var user = _userService.Find(userId);
            if (user == null)
                throw new ValidationException(ErrorCodes.UserNotFound);
            if (user.IsDeleted)
                throw new ValidationException(ErrorCodes.UserDeleted);
            if (!user.IsActive)
                throw new ValidationException(ErrorCodes.UserDeactivated);
            if (request.Status == Enums.RequestStatus.Pending)
            {
                request.ModifyTime = DateTime.UtcNow;
                request.ModifiedBy = userId;
                request.Status = Enums.RequestStatus.Rejected;
                _requestService.Update(request);
                SaveChanges();
            }
            else
                throw new ValidationException(ErrorCodes.RequestStatusChanged);
        }

        public RequestStatusDto GetLastRequestByFeaturedId(long featureId ,long roomId)
        {
            return  Mapper.Map<RequestStatusDto>(_requestService.Query(x => x.FeatureId == featureId && x.CreationBy == roomId).Select().OrderByDescending(x => x.CreateTime).FirstOrDefault());
        }
    }
}
