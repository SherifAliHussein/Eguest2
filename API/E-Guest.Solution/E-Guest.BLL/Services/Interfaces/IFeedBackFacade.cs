using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DTOs;

namespace E_Guest.BLL.Services.Interfaces
{
    public interface IFeedBackFacade
    {
        void AddFeedBack(FeedBackDto feedBackDto, long userId);
        PagedResultsDto GetAllFeedBack(long userId,long restaurantId, int page, int pageSize, string userRole);
    }
}
