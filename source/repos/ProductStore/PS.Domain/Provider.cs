using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PS.Domain
{
    public sealed class Provider : Concept
    {
        public int Id { get; set; }
        public String UserName { get; set; }
        public String Email { get; set; }
        
        public String password;
        public String Password {
            get
            {
               return password ;
            }
            set {
                if(value == null || value.Length < 5 || value.Length > 20)
                    Console.WriteLine("wrong password format .... ");
                else
                    password = value;
            } 
        }

        public String confirmPassword;
        public String ConfirmPassword
        {
            get
            { return confirmPassword; }
            set
            {
                if (value != password)
                    Console.WriteLine("Confirm Password not equal to password value...");
                else
                    confirmPassword = value;
            }
        }
        public DateTime DateCreated { get; set; }
        public bool IsApproved { get; set; }        
        public List<Product> Products { get; set; }

        //passage par ref
        public static void SetIsApproved(Provider provider)
        {
            provider.IsApproved = provider.Password == provider.ConfirmPassword;
            Console.WriteLine("SetIsApproved 01 : "+provider.IsApproved);
        }
        //passage par valeur
        public static void SetIsApproved(String pass, String confirmPass,bool isApproved)
        {
            isApproved = pass == confirmPass;
            Console.WriteLine("SetIsApproved 02 : " + isApproved);
        }

        public bool Login(String username , String password)
        {
            return this.UserName == username && this.Password == password;
        }

        public bool Login(String username, String password,String email = null)
        {
            if (email != null)
                return this.UserName == username && this.Password == password
                    && this.Email == email;
            else
                return this.UserName == username && this.Password == password;
        }

        public override void GetDetail()
        {
            Console.WriteLine("Provider : Name : "+UserName+"\n products : ");
           /* for(int i=0; i< Products.Count; i++)
            {
                Console.WriteLine(Products[i]);
            }*/
           foreach(Product product in Products)
            {
                Console.WriteLine(product); 
            }
        }


        public void GetProducts(string filterType, string filterValue)
        {
            switch (filterType)
            {
                case "Name":
                    foreach(Product product in Products)
                    {
                        if(product.Name.Equals(filterValue))
                        {
                            Console.WriteLine(product+"\n");
                        }
                    }
                    break;
                case "DateProd":
                    foreach (Product product in Products)
                    {
                        if (product.DateProd == DateTime.Parse(filterValue))
                        {
                            Console.WriteLine(product + "\n");
                        }
                    }
                    break;
                case "Price":
                    foreach (Product product in Products)
                    {
                        if (product.Price == Double.Parse(filterValue))
                        {
                            Console.WriteLine(product + "\n");
                        }
                    }
                    break;
            }
        }

        //Les méthodes d’extension sont dans la classe ProviderExtension
       


    }
}
