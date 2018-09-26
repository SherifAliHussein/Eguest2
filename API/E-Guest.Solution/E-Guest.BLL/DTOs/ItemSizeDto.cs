using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Guest.BLL.DTOs
{
    public class ItemSizeDto
    {
        public long ItemSizeId { get; set; }
        public long SizeId { get; set; }
        public string SizeName { get; set; }
        public Dictionary<string, string> SizeNameDictionary { get; set; }
        public double Price { get; set; }
    }
}
