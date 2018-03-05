﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.Common;
using Repository.Pattern.Ef6;

namespace E_Guest.DAL.Entities.Model
{
    public class Request:Entity
    {
        public Request()
        {
            RequestDetails = new List<RequestDetail>();
        }
        public long RequestId { get; set; }
        [ForeignKey("Creater")]
        public long CreationBy { get; set; }
        public virtual Room Creater { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime CreateTime { get; set; }

        [ForeignKey("Modifier")]
        public long? ModifiedBy { get; set; }
        public virtual Supervisor Modifier { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime ModifyTime { get; set; }

        [ForeignKey("Feature")]
        public long FeatureId { get; set; }
        public virtual Feature Feature { get; set; }

        public Enums.RequestStatus Status { get; set; }
        public virtual List<RequestDetail> RequestDetails { get; set; }

    }
}
