using System;
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
    public class RequestService:Service<Request>,IRequestService
    {
        public RequestService(IRepositoryAsync<Request> repository):base(repository)
        {
            _repository = repository;
        }

        public List<Request> GetAllRequestsByAdmin(long adminId, int page, int pageSize)
        {
            List<Request> requests;
            if (pageSize > 0)
                requests = _repository.Query(x => x.Creater.AdminId == adminId).Select()
                    .OrderBy(x => x.Status).ThenByDescending(x => x.CreateTime).Skip((page - 1) * pageSize)
                    .Take(pageSize).ToList();
            else
                requests = _repository.Query(x => x.Creater.AdminId == adminId).Select()
                    .OrderBy(x => x.Status).ThenByDescending(x => x.CreateTime).ToList();

            return requests;
        }

        public List<Request> GetAllRequestsBySupervisor(long userId, int page, int pageSize)
        {
            List<Request> requests;
            if (pageSize > 0)
                requests = _repository.Query(x => x.Feature.SupervisorFeatures.Select(s => s.SupervisorId).Contains(userId)).Select()
                    .OrderBy(x=>x.Status).ThenByDescending(x => x.CreateTime).Skip((page - 1) * pageSize)
                    .Take(pageSize).ToList();
            else
                requests = _repository.Query(x => x.Feature.SupervisorFeatures.Select(s => s.SupervisorId).Contains(userId)).Select()
                    .OrderBy(x => x.Status).ThenByDescending(x => x.CreateTime).ToList();

            return requests;
        }
        public List<Request> GetAllRequestsByReceptionist(long userId, int page, int pageSize)
        {
            List<Request> requests;
            if (pageSize > 0)
                requests = _repository.Query(x => x.Feature.Creater.Receptionists.Select(r => r.UserId).Contains(userId)).Select()
                    .OrderBy(x => x.Status).ThenByDescending(x => x.CreateTime).Skip((page - 1) * pageSize)
                    .Take(pageSize).ToList();
            else
                requests = _repository.Query(x => x.Feature.Creater.Receptionists.Select(r => r.UserId).Contains(userId)).Select()
                    .OrderBy(x => x.Status).ThenByDescending(x => x.CreateTime).ToList();

            return requests;
        }

    }
}
