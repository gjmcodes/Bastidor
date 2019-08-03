using Bastidor.Domain.SellingGoods;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bastidor.Infra.Data.Migrations.Configurations.SellingGoods
{
    public class ProductConfiguration : EntityConfiguration<Product>
    {
        public override void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.Property(e => e.Description)
                .HasColumnType("VARCHAR(150)")
                .IsRequired();

            builder.Property(e => e.Price)
                .HasColumnType("DECIMAL(8, 2)")
                .IsRequired();

            builder.Property(e => e.ImagePath)
             .HasColumnType("VARCHAR(150)")
             .IsRequired();

            builder.HasMany(e => e.Sales)
                .WithOne(e => e.Product)
                .HasForeignKey(e => e.ProductId);

            base.Configure(builder);

        }
    }
}