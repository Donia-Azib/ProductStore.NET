// See https://aka.ms/new-console-template for more information
using PS.Domain;
using PS.Service;

Console.WriteLine("Hello, World!");

Product product = new Product();
product.Quantity = 5;
product.DateProd=DateTime.Now;


Product product2 = new Product { ProductId = 5, Name = " Product 02", DateProd = new DateTime(2021,12,14,23,0,0)};

//cw + 2*tab
Console.WriteLine("\n\n----------------START Product----------------");

Console.WriteLine("----------------Product 01----------------");
Console.WriteLine(product);
Console.WriteLine("\n\n----------------Product 02----------------");
Console.WriteLine(product2);

Console.WriteLine("\n\n----------------END Product----------------");



Console.WriteLine("\n\n----------------START Provider----------------");

Console.WriteLine("\n\n----------------Provider 01----------------");
Provider provider = new Provider { Password="password123",ConfirmPassword="password123"};

//Provider.SetIsApproved(provider);
Provider.SetIsApproved(provider.Password , provider.ConfirmPassword,provider.IsApproved);
Console.WriteLine("------ IsApproved  : "+provider.IsApproved);

Product product1 = new Product();
Chemical chemical = new Chemical();
Biological biological = new Biological();

Console.WriteLine(product1.GetMyType());
Console.WriteLine(chemical.GetMyType());
Console.WriteLine(biological.GetMyType());

Console.WriteLine("\n\n----------------Provider 02----------------");
//List<Product> products = new List<Product>();
//products.Add(product1);
//products.Add(product);

List<Product> products = new List<Product>() { product, product1, product2 };
provider.Products = products;
provider.GetDetail();

Console.WriteLine("\n\n----------------Provider Test extension method----------------");
provider.UserName = "provider name";
provider.UpperName();
Console.WriteLine("...Username :"+provider.UserName);

Console.WriteLine("\n\n----------------END Provider----------------");

