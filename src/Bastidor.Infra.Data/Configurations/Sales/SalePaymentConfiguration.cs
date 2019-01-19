using Bastidor.Domain.Sales;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bastidor.Infra.Data.Configurations.Sales
{
    public class SalePaymentConfiguration : EntityConfiguration<SalePayment>
    {
        public override void Configure(EntityTypeBuilder<SalePayment> builder)
        {
            builder.Property(e => e.AmountInstallments)
                .HasColumnType("NUMERIC")
                .IsRequired();

            builder.Property(e => e.InstallmentValue)
                .HasColumnType("DECIMAL(8, 2)")
                .IsRequired();

            builder.Property(e => e.PaymentTypeId)
                .HasColumnType("VARCHAR(36)")
                .IsRequired();

            builder.Property(e => e.SaleId)
                .HasColumnType("VARCHAR(36)")
                .IsRequired();

            builder.HasOne(e => e.PaymentType)
                .WithMany(e => e.SalesPayment)
                .HasForeignKey(e => e.PaymentTypeId);

            base.Configure(builder);

        }
    }
}
