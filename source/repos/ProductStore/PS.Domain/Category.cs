using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PS.Domain
{
    public class Category
    {
        public int CategoryId { get; set; }
        public String Name { get; set; }
        public List<Product> Products { get; set; }
    }
}
