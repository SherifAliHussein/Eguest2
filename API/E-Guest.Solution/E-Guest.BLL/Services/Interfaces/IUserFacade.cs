using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DTOs;
using E_Guest.Common;

namespace E_Guest.BLL.Services.Interfaces
{
    public interface IUserFacade
    {
        UserDto ValidateUser(string email, string password);

        UserDto GetUser(long UserId);
        PagedResultsDto GetAllUsers(long adminId, int page, int pageSize,Enums.RoleType role);
        void AddReceptionist(ReceptionistDto receptionistDto, long adminId);
        void UpdateReceptionist(ReceptionistDto receptionistDto, long adminId);
        void ActivateReceptionist(long receptionistId, long adminId);
        void DeActivateReceptionist(long receptionistId, long adminId);
        void DeleteReceptionist(long receptionistId, long adminId);
        ReceptionistDto GetReceptionist(long receptionistId);
        SupervisorDto GetSupervisor(long supervisorId);
        void AddSupervisor(SupervisorDto supervisorDto, long adminId);
        void UpdateSupervisor(SupervisorDto supervisorDto, long adminId);
        void ActivateSupervisor(long supervisorId, long adminId);
        void DeActivateSupervisor(long supervisorId, long adminId);
        void DeleteSupervisor(long supervisorId,  long adminId);
        UserConsumed GetMaxAndConsumedUsers(long userId);
        void AddNewGlobalUser(AdminDto adminDto);
        void UpdateGlobalUser(AdminDto adminDto);
        void UpdateAdminPackage(AdminDto adminDto);
        void AddRestaurantWaiter(RestaurantWaiterDTO restaurantWaiterDto, long restaurantAdminId);
        RestaurantWaiterDTO GetRestaurantWaiter(long waiterId);
        PagedResultsDto GetAllRestaurantWaiters(long restaurantAdminId, int page, int pageSize, string language);
        void UpdateRestaurantWaiter(RestaurantWaiterDTO restaurantWaiterDto);
        void DeleteRestaurantWaiter(long restaurantWaiterId);
    }
}
