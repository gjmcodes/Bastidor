﻿// <auto-generated />
using System;
using Bastidor.Infra.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Bastidor.Infra.Data.Migrations
{
    [DbContext(typeof(BastidorContext))]
    [Migration("20190130225715_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Bastidor.Domain.Payments.PaymentType", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("VARCHAR(36)");

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.Property<int>("TaxesPercentage")
                        .HasColumnType("NUMERIC");

                    b.HasKey("Id");

                    b.ToTable("PaymentTypes");
                });

            modelBuilder.Entity("Bastidor.Domain.Personel.Employee", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("VARCHAR(36)");

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("VARCHAR(50)");

                    b.Property<string>("Identification")
                        .IsRequired()
                        .HasColumnType("VARCHAR(20)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("VARCHAR(150)");

                    b.HasKey("Id");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("Bastidor.Domain.Sales.Sale", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("VARCHAR(36)");

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("CustomerName")
                        .IsRequired()
                        .HasColumnType("VARCHAR(200)");

                    b.Property<string>("EmployeeId")
                        .HasColumnType("VARCHAR(36)");

                    b.Property<string>("SaleProductId")
                        .IsRequired()
                        .HasColumnType("VARCHAR(36)");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.ToTable("Sales");
                });

            modelBuilder.Entity("Bastidor.Domain.Sales.SalePayment", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("VARCHAR(36)");

                    b.Property<int>("AmountInstallments")
                        .HasColumnType("NUMERIC");

                    b.Property<DateTime>("CreationDate");

                    b.Property<decimal>("InstallmentValue")
                        .HasColumnType("DECIMAL(8, 2)");

                    b.Property<DateTime>("PaymentDay");

                    b.Property<string>("PaymentTypeId")
                        .IsRequired()
                        .HasColumnType("VARCHAR(36)");

                    b.Property<string>("SaleId")
                        .IsRequired()
                        .HasColumnType("VARCHAR(36)");

                    b.HasKey("Id");

                    b.HasIndex("PaymentTypeId");

                    b.HasIndex("SaleId")
                        .IsUnique();

                    b.ToTable("SalesPayment");
                });

            modelBuilder.Entity("Bastidor.Domain.Sales.SaleProduct", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("VARCHAR(36)");

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("ProductId")
                        .IsRequired()
                        .HasColumnType("VARCHAR(36)");

                    b.Property<string>("SaleId")
                        .IsRequired()
                        .HasColumnType("VARCHAR(36)");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.HasIndex("SaleId");

                    b.ToTable("SaleProduct");
                });

            modelBuilder.Entity("Bastidor.Domain.SellingGoods.Product", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("VARCHAR(36)");

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("VARCHAR(150)");

                    b.Property<string>("ImagePath")
                        .IsRequired()
                        .HasColumnType("VARCHAR(150)");

                    b.Property<decimal>("Price")
                        .HasColumnType("DECIMAL(8, 2)");

                    b.HasKey("Id");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("Bastidor.Domain.Sales.Sale", b =>
                {
                    b.HasOne("Bastidor.Domain.Personel.Employee", "Employee")
                        .WithMany("Sales")
                        .HasForeignKey("EmployeeId");
                });

            modelBuilder.Entity("Bastidor.Domain.Sales.SalePayment", b =>
                {
                    b.HasOne("Bastidor.Domain.Payments.PaymentType", "PaymentType")
                        .WithMany("SalesPayment")
                        .HasForeignKey("PaymentTypeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Bastidor.Domain.Sales.Sale", "Sale")
                        .WithOne("SalePayment")
                        .HasForeignKey("Bastidor.Domain.Sales.SalePayment", "SaleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Bastidor.Domain.Sales.SaleProduct", b =>
                {
                    b.HasOne("Bastidor.Domain.SellingGoods.Product", "Product")
                        .WithMany("Sales")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Bastidor.Domain.Sales.Sale", "Sale")
                        .WithMany("Products")
                        .HasForeignKey("SaleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}