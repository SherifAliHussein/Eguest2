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
    public interface IBackgroundService : IService<Background>
    {
        PagedResultsDto GetAllBackgrounds(int page, int pageSize, long userId); 
        PagedResultsDto GetActivatedBackgroundByUserId(long userId, int page, int pageSize);
    }
}
