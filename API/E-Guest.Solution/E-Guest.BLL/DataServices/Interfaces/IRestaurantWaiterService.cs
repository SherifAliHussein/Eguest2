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
    public interface IRestaurantWaiterService:IService<RestaurantWaiter>
    {
        bool CheckUserNameDuplicated(string userName, long restaurantId);
        PagedResultsDto GetAllRestaurantWaiters(long restaurantId, int page, int pageSize, string language);
        List<RestaurantWaiter> GetAlRestaurantWaitersByRestaurantId(long restaurantId);
    }
}
