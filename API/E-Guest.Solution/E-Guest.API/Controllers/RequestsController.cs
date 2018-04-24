using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using E_Guest.API.Infrastructure;
using E_Guest.API.Models;
using E_Guest.API.Providers;
using E_Guest.BLL.DTOs;
using E_Guest.BLL.Services.Interfaces;
using E_Guest.Common;

namespace E_Guest.API.Controllers
{
    public class RequestsController : BaseApiController
    {
        private IRequestFacade _requestFacade;
        public RequestsController(IRequestFacade requestFacade)
        {
            _requestFacade = requestFacade;
        }

        [AuthorizeRoles(Enums.RoleType.Room)]
        [Route("api/Requests", Name = "CreateRequest")]
        [HttpPost]
        public IHttpActionResult CreateRequest([FromBody] RequestModel requestModel)
        {
            requestModel.RoomId = UserId;
            _requestFacade.CreateRequest(Mapper.Map<RequestDto>(requestModel));
            return Ok();
        }

        [AuthorizeRoles(Enums.RoleType.Admin,Enums.RoleType.Receptionist, Enums.RoleType.Supervisor, Enums.RoleType.Waiter)]
        [Route("api/Requests/", Name = "GetAllRequests")]
        [HttpGet]
        [ResponseType(typeof(List<RequestModel>))]
        public IHttpActionResult GetAllRequests(int page = Page, int pagesize = PageSize, long roomId = 0, long featureId = 0,string from="", string to = "")
        {
            PagedResultsDto requests = _requestFacade.GetAllRequests(UserId, page, pagesize,UserRole,roomId,featureId, from, to);
            var data = Mapper.Map<List<RequestModel>>(requests.Data);
           
            return PagedResponse("GetAllRequests", page, pagesize, requests.TotalCount, data);
        }

        

        [AuthorizeRoles(Enums.RoleType.Supervisor, Enums.RoleType.Waiter)]
        [Route("api/Requests/{requestId:long}/Approve", Name = "ApproveRequest")]
        [HttpPost]
        public IHttpActionResult ApproveRequest(long requestId, [FromBody] RequestModel requestModel)
        {
            _requestFacade.ApproveRequest(requestId, UserId,Mapper.Map<List<RequestDetailDto>>(requestModel.RequestDetails));
            return Ok();
        }

        [AuthorizeRoles(Enums.RoleType.Supervisor, Enums.RoleType.Waiter)]
        [Route("api/Requests/{requestId:long}/Reject", Name = "RejectRequest")]
        [HttpGet]
        public IHttpActionResult RejectRequest(long requestId)
        {
            _requestFacade.RejectRequest(requestId, UserId);
            return Ok();
        }
    }
}
