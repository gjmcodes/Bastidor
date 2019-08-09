using Bastidor.Domain.Pricings.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bastidor.Infra.Data.Migrations.Configurations.Pricing
{
    public class PricingPaymentMethodTaxConfiguration : EntityConfiguration<PricingPaymentMethodTax>
    {
        public override void Configure(EntityTypeBuilder<PricingPaymentMethodTax> builder)
        {
            builder.Property(x => x.PaymentMethodId)
            .HasColumnType("varchar(36)")
            .IsRequired();


            builder.Property(x => x.Description)
            .HasColumnType("varchar(100)")
            .IsRequired();


            builder.Property(x => x.TaxValue)
            .HasColumnType("decimal(5,2)")
            .IsRequired();

            base.Configure(builder);
        }
    }
}