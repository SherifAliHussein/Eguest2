﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace E_Guest.DAL.Entities.Model
{
    public class Page:Entity
    {
        public long Id { get; set; }
        public long CategoryId { get; set; }
        public virtual Category Category { get; set; }
        public long TemplateId { get; set; }
        public virtual Template Template { get; set; }
        public int PageNumber { get; set; }

    }
}
