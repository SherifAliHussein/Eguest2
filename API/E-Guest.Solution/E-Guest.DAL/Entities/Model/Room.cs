using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace E_Guest.DAL.Entities.Model
{
    public class Room: User
    {
        public Room()
        {
            Requests = new List<Request>();
        }

        [ForeignKey("Admin")]
        public long AdminId { get; set; }
        public virtual Admin Admin { get; set; }

        public virtual List<Request> Requests { get; set; }
        [ForeignKey("Package")]
        public long PackageId { get; set; }
        public virtual Package Package { get; set; }
    }
}
