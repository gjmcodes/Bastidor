using Bastidor.Domain.Sales;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bastidor.Infra.Data.Configurations.Sales
{
    public class SaleConfiguration : EntityConfiguration<Sale>
    {
        public override void Configure(EntityTypeBuilder<Sale> builder)
        {
            builder.Property(e => e.CustomerName)
               .HasColumnType("VARCHAR(200)")
               .IsRequired();

            builder.Property(e => e.SaleProductId)
             .HasColumnType("VARCHAR(36)")
             .IsRequired();

            builder.Property(e => e.EmployeeId)
             .HasColumnType("VARCHAR(36)");

            builder.HasMany(e => e.Products)
                .WithOne(e => e.Sale)
                .HasForeignKey(e => e.SaleId);

            builder.HasOne(e => e.SalePayment)
                .WithOne(e => e.Sale)
                .HasForeignKey<SalePayment>(e => e.SaleId);

            builder.HasOne(e => e.Employee)
                .WithMany(e => e.Sales)
                .HasForeignKey(e => e.EmployeeId);

            base.Configure(builder);
        }
    }
}
