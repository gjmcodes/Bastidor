using Bastidor.Domain.Pricings.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bastidor.Infra.Data.Migrations.Configurations.Pricing
{
    public class PricingPaymentMethodConfiguration : EntityConfiguration<PricingPaymentMethod>
    {
        public override void Configure(EntityTypeBuilder<PricingPaymentMethod> builder)
        {
            builder.Property(x => x.Description)
            .HasColumnType("varchar(100)")
            .IsRequired();

            builder.Property(x => x.MaxInstallments)
            .HasColumnType("int")
            .HasDefaultValue(1);

            builder.HasMany(x => x.Taxes)
            .WithOne(y => y.PaymentMethod)
            .HasForeignKey(x => x.PaymentMethodId);

            base.Configure(builder);
        }
    }
}