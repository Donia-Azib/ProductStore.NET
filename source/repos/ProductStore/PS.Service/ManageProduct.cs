using PS.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PS.Service
{
    public class ManageProduct
    {
        public List<Product> Products { get; set; }

        public List<Chemical> Get5Chemical(double price)
        {
            var req = from c in Products
                      where c.Price > price
                      select c;
            // juste fel héritage => OfType<Chemical>()
            return req.OfType<Chemical>().Take(5).ToList();
        }

        public List<Product> GetProductPrice(double price)
        {
            var req = from c in Products
                      where c.Price > price
                      select c;
            return req.Skip(2).ToList();
        }

        public int GetCountProduct(String city)
        {
            var req = from c in Products.OfType<Chemical>()
                      where c.City == city
                      select c;
            return req.ToList().Count;
        }

        public List<Chemical> GetChemicalCity()
        {
            var req = from c in Products.OfType<Chemical>()
                      orderby c.City descending
                      select c;
            return req.ToList();
        }
        //IGrouping<Key,Value>
        public IEnumerable<IGrouping<String,Chemical>> GetChemicalGroupByCity()
        {
            var req = from c in Products.OfType<Chemical>()
                      orderby c.City descending
                      group c by c.City;
            foreach(var g in req)
            {
                Console.WriteLine(g.Key);
                foreach(Chemical c in g)
                {
                    Console.WriteLine(c);
                }
            }
            return req;
        }
    }
}
