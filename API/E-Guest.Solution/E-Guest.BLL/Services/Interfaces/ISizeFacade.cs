using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DTOs;

namespace E_Guest.BLL.Services.Interfaces
{
    public interface ISizeFacade
    {
        PagedResultsDto GetAllSizes(string language,long userId, int page, int pageSize);
        void AddSize(SizeDto sizeDto,long restaurantAdminId);
        SizeDto GetSize(long sizeId);
        void UpdateSize(SizeDto sizeDto,long restaurantAdminId);
        void DeleteSize(long sizeId);
    }
}
