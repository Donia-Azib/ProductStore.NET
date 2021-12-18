using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PS.Domain
{
    public class Biological : Product
    {
        public String Herbes { get; set; }

        public override string GetMyType()
        {
            return base.GetMyType()+" Biologique ... !";
        }
    }

   
}
