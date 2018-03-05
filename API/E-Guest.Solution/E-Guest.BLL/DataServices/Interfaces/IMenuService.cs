﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DTOs;
using E_Guest.DAL.Entities.Model;
using Service.Pattern;

namespace E_Guest.BLL.DataServices.Interfaces
{
    public interface IMenuService:IService<Menu>
    {
        //PagedResultsDto GetAllMenusByRestaurantId(string language, long restaurantId, int page, int pageSize);
    }
}
