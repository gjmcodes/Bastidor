using Bastidor.Infra.Data.Migrations.Configurations.Pricing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Bastidor.Infra.Data.Migrations.Contexts
{
    public class BastidorContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("server=172.17.0.2;database=bastidordb;user=app;password=m3ll0n");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Pricing
             modelBuilder.ApplyConfiguration(new PricingPaymentMethodConfiguration());
             modelBuilder.ApplyConfiguration(new PricingPaymentMethodTaxConfiguration());
             modelBuilder.ApplyConfiguration(new PricingProductProfitConfiguration());

            base.OnModelCreating(modelBuilder);
        }

    }
}
