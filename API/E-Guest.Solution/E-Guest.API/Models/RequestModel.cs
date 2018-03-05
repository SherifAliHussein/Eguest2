using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace E_Guest.API.Models
{
    public class RequestModel
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
        public string Status { get; set; }

        public List<RequestDetailModel> RequestDetails { get; set; }
    }
}