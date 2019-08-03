using Bastidor.Domain.Payments;
using Bastidor.Domain.Sales;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bastidor.Infra.Data.Migrations.Configurations.Payments
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

            builder.HasMany(e => e.SalesPayment)
                .WithOne(e => e.PaymentType)
                .HasForeignKey(e => e.PaymentTypeId);
                

            base.Configure(builder);

        }
    }
}
