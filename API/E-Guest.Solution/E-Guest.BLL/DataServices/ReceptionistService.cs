﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DataServices.Interfaces;
using E_Guest.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace E_Guest.BLL.DataServices
{
    public class ReceptionistService:Service<Receptionist>,IReceptionistService
    {
        public ReceptionistService(IRepositoryAsync<Receptionist> repository):base(repository)
        {
            _repository = repository;
        }
        public List<Receptionist> GetAllReceptionists(long adminId, int page, int pageSize)
        {
            var receptionists = _repository
                .Query(x => !x.IsDeleted && x.AdminId == adminId).Select()
                .OrderBy(x => x.UserId).Skip((page - 1) * pageSize)
                .Take(pageSize).ToList();
            return receptionists;
        }

        public bool CheckUserNameDuplicated(string userName, long userId, long adminId)
        {
            return _repository.Queryable().Any(u => u.UserName.ToLower() == userName.ToLower() && !u.IsDeleted && u.UserId != userId && u.AdminId == adminId);
        }
    }
}
