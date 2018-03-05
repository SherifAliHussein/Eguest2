using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Guest.Common
{
    public class Enums
    {
        public enum RoleType
        {
            Admin,
            Supervisor,
            Receptionist,
            Room,
            RestaurantAdmin,
            Waiter
        }
        public enum RequestStatus
        {
            Pending,
            Approved,
            Rejected
        }

        public enum FeatureType
        {
            Normal,
            Restaurant
        }
    }
}
