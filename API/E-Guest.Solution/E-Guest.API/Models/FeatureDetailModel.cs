using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace E_Guest.API.Models
{
    public class FeatureDetailModel
    {
        public long FeatureDetailId { get; set; }
        public Dictionary<string, string> DescriptionDictionary { get; set; }

        public bool IsFree { get; set; }
        public decimal Price { get; set; }
        public bool IsDeleted { get; set; }

    }
}