using PS.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PS.Service
{
    // 1 er condition : classe statique "static"
    public static class ProviderExtension
    {
        // 2ème condition : méthode statique "static"
        // 3ème condition : passez un objet de la classe à étendre comme paramètre de la méthode et le faire précéder par le mot-clé "this"
        public static void UpperName(this Provider p)
        {
            p.UserName = p.UserName.ToUpper();
        }
    }
}
