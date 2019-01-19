using Bastidor.Domain.Sales;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bastidor.Infra.Data.Configurations.Sales
{
    public class SaleProductConfiguration : EntityConfiguration<SaleProduct>
    {
        public override void Configure(EntityTypeBuilder<SaleProduct> builder)
        {
            builder.Property(e => e.ProductId)
                .HasColumnType("VARCHAR(36)")
                .IsRequired();

            builder.Property(e => e.SaleId)
                .HasColumnType("VARCHAR(36)")
                .IsRequired();

            base.Configure(builder);

        }
    }
}
