﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DTOs;

namespace E_Guest.BLL.Services.Interfaces
{
    public interface IRoomFacade
    {
        PagedResultsDto GetAllRoom(long adminId, int page, int pageSize);
        RoomDto GetRoom(long roomId);
        void AddRoom (RoomDto roomDto, long adminId);
        void UpdateRoom(RoomDto roomDto, long adminId);
        void ActivateRoom(long roomId, long adminId);
        void DeActivateRoom(long roomId, long adminId);
        void DeleteRoom(long roomId, long adminId);
    }
}
