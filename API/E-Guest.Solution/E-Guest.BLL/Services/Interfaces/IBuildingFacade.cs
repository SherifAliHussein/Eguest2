﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DTOs;

namespace E_Guest.BLL.Services.Interfaces
{
    public interface IBuildingFacade
    {
        void AddBuilding(BuildingDto buildingDto,long adminId);
        void UpdateBuilding(BuildingDto buildingDto, long adminId);
        void DeleteBuilding(long buildingId);
        PagedResultsDto GetAllBuilding(long adminId, int page, int pageSize);
    }
}
