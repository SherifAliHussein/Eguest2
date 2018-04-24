using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DTOs;

namespace E_Guest.BLL.Services.Interfaces
{
    public interface IFloorFacade
    {
        void AddFloor (FloorDto floorDto, long adminId);
        PagedResultsDto GetAllFloor(long adminId, int page, int pageSize);
        void UpdateFloor (FloorDto floorDto, long adminId);
        void DeleteFloor (long floorId);
    }
}
