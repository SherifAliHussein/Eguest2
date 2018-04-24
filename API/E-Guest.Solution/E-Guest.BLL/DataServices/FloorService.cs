using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DataServices.Interfaces;
using E_Guest.BLL.DTOs;
using E_Guest.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace E_Guest.BLL.DataServices
{
    public class FloorService:Service<Floor>,IFloorService
    {
        public FloorService(IRepositoryAsync<Floor> repository):base(repository)
        {
            _repository = repository;
        }
        public bool CheckFloorRepeated(FloorDto floorDto, long adminId)
        {
            return _repository.Query(x => x.AdminId == adminId && x.FloorName == floorDto.FloorName && x.FloorId != floorDto.FloorId && !x.IsDeleted).Select().Any();
        }
    }
}
