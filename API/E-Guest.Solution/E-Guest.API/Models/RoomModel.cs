﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace E_Guest.API.Models
{
    public class RoomModel
    {
        public long RoomId { get; set; }
        public string RoomName { get; set; }
        public string Password { get; set; }
        public bool IsActive { get; set; }

    }
}