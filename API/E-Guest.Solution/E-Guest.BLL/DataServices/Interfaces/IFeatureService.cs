﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.DAL.Entities.Model;
using Service.Pattern;

namespace E_Guest.BLL.DataServices.Interfaces
{
    public interface IFeatureService:IService<Feature>
    {
        List<Feature> GetAllFeaturesAdminId(long adminId, int page, int pageSize);
        List<Feature> GetAllActiveFeaturesAdminId(long adminId, int page, int pageSize);
        Feature CheckFeatureAsRestaurant(long adminId);
    }
}
