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
using E_Guest.BLL.Services.Interfaces;
using E_Guest.API.Providers;
using E_Guest.BLL.DTOs;
using E_Guest.Common;

namespace E_Guest.API.Controllers
{
    public class FloorsController : BaseApiController
    {
        private IFloorFacade _floorFacade;

        public FloorsController(IFloorFacade floorFacade)
        {
            _floorFacade = floorFacade;
        }
        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Floors/", Name = "AddFloor")]
        [HttpPost]
        public IHttpActionResult AddFloor([FromBody] FloorModel floorModel)
        {
            _floorFacade.AddFloor(Mapper.Map<FloorDto>(floorModel), UserId);
            return Ok();
        }

        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Floors/", Name = "GetAllFloor")]
        [HttpGet]
        [ResponseType(typeof(List<FloorModel>))]
        public IHttpActionResult GetAllFloor(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto floor = _floorFacade.GetAllFloor(UserId, page, pagesize);
            var data = Mapper.Map<List<FloorModel>>(floor.Data);

            return PagedResponse("GetAllFloor", page, pagesize, floor.TotalCount, data);
        }


        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Floors/{floorId:long}", Name = "DeleteFloor")]
        [HttpDelete]
        public IHttpActionResult DeleteFloor(long floorId)
        {
            _floorFacade.DeleteFloor(floorId);
            return Ok();
        }

        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Floors", Name = "UpdateFloor")]
        [HttpPut]
        public IHttpActionResult UpdateFloor([FromBody] FloorModel floorModel)
        {
            _floorFacade.UpdateFloor(Mapper.Map<FloorDto>(floorModel), UserId);
            return Ok();
        }
    }
}
