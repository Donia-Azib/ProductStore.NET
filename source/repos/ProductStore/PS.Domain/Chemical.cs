using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PS.Domain
{
    public class Chemical : Product
    {
        public String City { get; set; }
        public String LabName { get; set; }
        public String StreetAddress { get; set; }

        public override string GetMyType()
        {
            return base.GetMyType() + " Chemical ... !";
        }
    }
}
