using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using E_Guest.BLL.DTOs;

namespace E_Guest.API.Models
{
    public class ItemOrderModel
    {
        public List<ItemNamesDto> ItemNames{ get; set; }
    }
}