﻿// <auto-generated />
using System;
using Bastidor.Infra.Data.Migrations.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Bastidor.Infra.Data.Migrations
{
    [DbContext(typeof(BastidorContext))]
    [Migration("20190808235955_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Bastidor.Domain.Pricings.Models.PricingPaymentMethod", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("VARCHAR(36)");

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<int>("MaxInstallments")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasDefaultValue(1);

                    b.HasKey("Id");

                    b.ToTable("PricingPaymentMethod");
                });

            modelBuilder.Entity("Bastidor.Domain.Pricings.Models.PricingPaymentMethodTax", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("VARCHAR(36)");

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<string>("PaymentMethodId")
                        .IsRequired()
                        .HasColumnType("varchar(36)");

                    b.Property<decimal>("TaxValue")
                        .HasConversion(new ValueConverter<decimal, decimal>(v => default(decimal), v => default(decimal), new ConverterMappingHints(precision: 38, scale: 17)))
                        .HasColumnType("decimal(5,2)");

                    b.HasKey("Id");

                    b.HasIndex("PaymentMethodId");

                    b.ToTable("PricingPaymentMethodTax");
                });

            modelBuilder.Entity("Bastidor.Domain.Pricings.Models.PricingProductProfit", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("VARCHAR(36)");

                    b.Property<DateTime>("CreationDate");

                    b.Property<decimal>("ProfitValue")
                        .HasConversion(new ValueConverter<decimal, decimal>(v => default(decimal), v => default(decimal), new ConverterMappingHints(precision: 38, scale: 17)))
                        .HasColumnType("decimal(5,2)");

                    b.HasKey("Id");

                    b.ToTable("PricingProductProfit");
                });

            modelBuilder.Entity("Bastidor.Domain.Pricings.Models.PricingPaymentMethodTax", b =>
                {
                    b.HasOne("Bastidor.Domain.Pricings.Models.PricingPaymentMethod", "PaymentMethod")
                        .WithMany("Taxes")
                        .HasForeignKey("PaymentMethodId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
