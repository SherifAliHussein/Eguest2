using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.Common;

namespace E_Guest.BLL.DTOs
{
    public class RequestDto
    {
        public long RequestId { get; set; }
        public long RoomId { get; set; }
        public string RoomName { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime ModifyTime { get; set; }
        public string Modifier { get; set; }
        public long ModifyBy { get; set; }
        public long FeatureId { get; set; }
        public Dictionary<string, string> FeatureNameDictionary { get; set; }
        public Enums.RequestStatus Status { get; set; }
        public List<RequestDetailDto> RequestDetails { get; set; }
    }
}
