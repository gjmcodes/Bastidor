using Bastidor.Domain.Sales;
using Bastidor.Infra.Data.Contexts;
using System;

namespace Bastidor.ConsoleTest
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var ctx = new BastidorContext())
            {
                ctx.Database.EnsureCreated();


                ctx.SaveChanges();
            }
            Console.WriteLine("Hello World!");
        }
    }
}
