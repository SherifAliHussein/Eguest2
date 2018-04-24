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
    public class BuildingService:Service<Building>,IBuildingService
    {
        public BuildingService(IRepositoryAsync<Building> repository):base(repository)
        {
            _repository = repository;
        }

        public bool CheckBuildingRepeated(BuildingDto building, long adminId)
        {
            return _repository.Query(x => x.AdminId == adminId && x.BuildingName == building.BuildingName && x.BuildingId != building.BuildingId && !x.IsDeleted).Select().Any();
        }
    }
}
