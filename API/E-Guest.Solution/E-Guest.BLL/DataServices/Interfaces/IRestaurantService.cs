using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DTOs;
using E_Guest.DAL.Entities.Model;
using Service.Pattern;

namespace E_Guest.BLL.DataServices.Interfaces
{
    public interface IRestaurantService:IService<Restaurant>
    {
        PagedResultsDto GetAllRestaurant(string language, int page, int pageSize);
        Restaurant GetRestaurantByAdminId(long adminId);
        Restaurant GetRestaurantByWaiterId(long waiterId);
        //int GetAllResturantsLimits(long userId);
        List<Restaurant> GetRestaurantsName(long adminId);
    }
}
