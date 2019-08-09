using Bastidor.Domain.Pricings.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bastidor.Infra.Data.Migrations.Configurations.Pricing
{
    public class PricingProductProfitConfiguration : EntityConfiguration<PricingProductProfit>
    {
        public override void Configure(EntityTypeBuilder<PricingProductProfit> builder)
        {
            builder.Property(x => x.ProfitValue)
            .HasColumnType("decimal(5,2)")
            .IsRequired();
            
            base.Configure(builder);
        }

    }
}