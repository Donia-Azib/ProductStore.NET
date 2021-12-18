using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PS.Domain
{
    //sealed bloque l'héritage
    public class Product
    {
        /*// FULL PROPERTY
        public int productId;
        public int ProductId
        {
            get { return productId; };
            set { productId = value; }
        }
        // property => Maj // attribute => min
         */
        // without constructor
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public DateTime DateProd { get; set; }
        public String Description { get; set; }
        public String Name { get; set; }
        public double Price { get; set; }

        //Objet de navigation (Relation)
        public List<Provider> Providers { get; set; }
        public Category Category { get; set; }

        public override string ToString()
        {
            return "Product :\nId :" + ProductId + "\nname : " + Name + "\ndescription : " + Description
                + "\nprice : " + Price+"\ndateProd :"+DateProd+"\nquantity : "+Quantity;
        }

        public virtual string GetMyType()
        {
            return "Je suis un PRODUIT... ";
        }

    }
}
