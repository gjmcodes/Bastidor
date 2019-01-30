using Bastidor.Domain.Payments;
using Bastidor.Domain.Personel;
using Bastidor.Domain.Sales;
using Bastidor.Infra.Data.Configurations.Payments;
using Bastidor.Infra.Data.Configurations.Personel;
using Bastidor.Infra.Data.Configurations.Sales;
using Bastidor.Infra.Data.Configurations.SellingGoods;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Bastidor.Infra.Data.Contexts
{
    public class BastidorContext : DbContext
    {
        public DbSet<Sale> Sales { get; set; }
        public DbSet<SalePayment> SalesPayment { get; set; }
        public DbSet<PaymentType> PaymentTypes { get; set; }
        public DbSet<Employee> Employees { get; set; }

        private readonly IConfiguration configuration;

        public BastidorContext()
        {
        }

        public BastidorContext(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseMySql(configuration.GetConnectionString("BastidorDB"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Sales
            modelBuilder.ApplyConfiguration(new SaleConfiguration());
            modelBuilder.ApplyConfiguration(new SalePaymentConfiguration());
            modelBuilder.ApplyConfiguration(new SaleProductConfiguration());

            //Payments
            modelBuilder.ApplyConfiguration(new PaymentTypeConfiguration());

            //Personel
            modelBuilder.ApplyConfiguration(new EmployeeConfiguration());

            //Selling Goods
            modelBuilder.ApplyConfiguration(new ProductConfiguration());

        }

    }
}
