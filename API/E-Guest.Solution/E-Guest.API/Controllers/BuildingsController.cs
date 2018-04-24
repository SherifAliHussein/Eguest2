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
    public class BuildingsController : BaseApiController
    {
        private IBuildingFacade _buildingFacade;

        public BuildingsController(IBuildingFacade buildingFacade)
        {
            _buildingFacade = buildingFacade;
        }
        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Buildings/", Name = "AddBuilding")]
        [HttpPost]
        public IHttpActionResult AddBuilding([FromBody] BuildingModel buildingModel)
        {
            _buildingFacade.AddBuilding(Mapper.Map<BuildingDto>(buildingModel), UserId);
            return Ok();
        }

        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Buildings/", Name = "GetAllBuilding")]
        [HttpGet]
        [ResponseType(typeof(List<BuildingModel>))]
        public IHttpActionResult GetAllBuilding(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto buildings = _buildingFacade.GetAllBuilding(UserId, page, pagesize);
            var data = Mapper.Map<List<BuildingModel>>(buildings.Data);

            return PagedResponse("GetAllBuilding", page, pagesize, buildings.TotalCount, data);
        }


        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Buildings/{buildingId:long}", Name = "DeleteBuilding")]
        [HttpDelete]
        public IHttpActionResult DeleteBuilding(long buildingId)
        {
            _buildingFacade.DeleteBuilding(buildingId);
            return Ok();
        }
        
        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Buildings", Name = "UpdateBuilding")]
        [HttpPut]
        public IHttpActionResult UpdateBuilding([FromBody] BuildingModel buildingModel)
        {
            _buildingFacade.UpdateBuilding(Mapper.Map<BuildingDto>(buildingModel), UserId);
            return Ok();
        }
    }
}
