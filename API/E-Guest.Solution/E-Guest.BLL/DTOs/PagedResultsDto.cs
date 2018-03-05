using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Guest.BLL.DTOs
{
    public class PagedResultsDto
    {
        public int TotalCount { get; set; }
        public object Data { get; set; }
    }
}
