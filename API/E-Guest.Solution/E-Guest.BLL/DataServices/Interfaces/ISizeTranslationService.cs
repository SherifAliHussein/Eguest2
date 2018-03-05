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
    public  interface ISizeTranslationService:IService<SizeTranslation>
    {
        PagedResultsDto GetAllSizes(string language,long userId, int page, int pageSize);
        bool CheckSizeNameExist(string sizeName, string language, long sizeId,long restaurantAdminId);
        bool CheckSizeNameTranslated(string language, long sizeId);
    }
}
