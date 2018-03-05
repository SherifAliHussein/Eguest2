﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DataServices.Interfaces;
using E_Guest.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace E_Guest.BLL.DataServices
{
    public class ItemSizeService:Service<ItemSize>,IItemSizeService
    {
        public ItemSizeService(IRepositoryAsync<ItemSize> repository):base(repository)
        {
            
        }
    }
}