using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.DAL.Entities.Model;
using Service.Pattern;

namespace E_Guest.BLL.DataServices.Interfaces
{
    public interface IReceptionistService:IService<Receptionist>
    {
        List<Receptionist> GetAllReceptionists(long adminId, int page, int pageSize);
        bool CheckUserNameDuplicated(string userName, long userId, long adminId);
    }
}
