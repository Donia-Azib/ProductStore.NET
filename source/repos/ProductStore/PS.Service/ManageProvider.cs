using PS.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PS.Service
{
    public class ManageProvider
    {
        public List<Provider> Providers { get; set; }

        public IEnumerable<Provider> GetProviderByName(string name)
        {
            return from p in Providers
                   where p.UserName.Contains(name)
                   select p;
        }

        public Provider GetFirstProviderByName(string name)
        {
            var req = from p in Providers
                      where p.UserName.StartsWith(name)
                      select p;
            return req.First();
        }
    }
}
