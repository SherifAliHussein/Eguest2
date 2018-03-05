using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Guest.BLL.DTOs
{
    public class FeatureDetailDto
    {
        public long FeatureDetailId { get; set; }
        public Dictionary<string, string> DescriptionDictionary { get; set; }

        public bool IsFree { get; set; }
        public decimal Price { get; set; }
        public bool IsDeleted { get; set; }
        public long FeatureId { get; set; }

    }
}
