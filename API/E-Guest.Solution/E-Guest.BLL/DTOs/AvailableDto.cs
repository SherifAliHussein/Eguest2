using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.Common;

namespace E_Guest.BLL.DTOs
{
    public class AvailableDto
    {
        public long AvailableId { get; set; }
        public DateTime From { get; set; }

        public DateTime To { get; set; }

        public long FeatureDetailId { get; set; }

        public Enums.Day Day { get; set; }
        public int Max { get; set; }
    }
}
