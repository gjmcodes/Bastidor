using Bastidor.Domain.Payments;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bastidor.Infra.Data.Configurations.Payments
{
    public class PaymentTypeConfiguration : EntityConfiguration<PaymentType>
    {
        public override void Configure(EntityTypeBuilder<PaymentType> builder)
        {
            builder.Property(e => e.Description)
                .HasColumnType("VARCHAR(100)")
                .IsRequired();

            builder.Property(e => e.TaxesPercentage)
                .HasColumnType("NUMERIC")
                .IsRequired();

            base.Configure(builder);

        }
    }
}
