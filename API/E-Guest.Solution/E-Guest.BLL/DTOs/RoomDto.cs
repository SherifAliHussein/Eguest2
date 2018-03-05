using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Guest.BLL.DTOs
{
    public class RoomDto
    {
        public long RoomId { get; set; }
        public string RoomName { get; set; }
        public string Password { get; set; }
        public bool IsActive { get; set; }

    }
}
