using System;
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
        public RequestFacade(IUnitOfWorkAsync unitOfWork, IRequestService requestService, IReceptionistService receptionistService, ISupervisorService supervisorService, IRequestDetailService requestDetailService, IUserService userService, IFeatureDetailService featureDetailService) : base(unitOfWork)
        {
            _requestService = requestService;
            _receptionistService = receptionistService;
            _supervisorService = supervisorService;
            _requestDetailService = requestDetailService;
            _userService = userService;
            _featureDetailService = featureDetailService;
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
            _requestService.Insert(request);
            SaveChanges();
        }

        public PagedResultsDto GetAllRequests(long userId, int page, int pageSize, string role)
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
                requestsCount = _requestService.Query(x => x.Creater.AdminId == userId).Select().Count();
                requests = Mapper.Map<List<RequestDto>>(_requestService.GetAllRequestsByAdmin(userId, page, pageSize));
            }
            else if (role == Enums.RoleType.Supervisor.ToString())
            {
                //var supervisor = _supervisorService.Find(userId);
                //var featureIds = supervisor.SupervisorFeatures.Select(x => x.FeatureId);
                requestsCount = _requestService.Query(x => x.Feature.SupervisorFeatures.Select(s => s.SupervisorId).Contains(userId)).Select().Count();
                requests = Mapper.Map<List<RequestDto>>(_requestService.GetAllRequestsBySupervisor(userId, page, pageSize));
            }
            else if (role == Enums.RoleType.Receptionist.ToString())
            {
                requestsCount = _requestService.Query(x => x.Feature.Creater.Receptionists.Select(r => r.UserId).Contains(userId)).Select().Count();
                requests = Mapper.Map<List<RequestDto>>(_requestService.GetAllRequestsByReceptionist(userId, page, pageSize));
            }

            PagedResultsDto results = new PagedResultsDto
            {
                TotalCount = requestsCount,
                Data = requests
            };
            return results;
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
                if (requestDetailDtos != null)
                {
                    foreach (var requestDetail in requestDetailDtos)
                    {
                        var price = _featureDetailService.Find(requestDetail.FeatureDetailId).Price;
                        request.RequestDetails.Add(new RequestDetail
                        {
                            FeatureDetailId = requestDetail.FeatureDetailId,
                            Number = requestDetail.Number,
                            RequestId = requestId,
                            Price = price
                        });
                    }

                }
                _requestDetailService.InsertRange(request.RequestDetails);
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

    }
}
