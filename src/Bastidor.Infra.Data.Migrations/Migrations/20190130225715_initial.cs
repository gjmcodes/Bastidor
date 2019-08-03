using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Bastidor.Infra.Data.Migrations.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Id = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    FirstName = table.Column<string>(type: "VARCHAR(50)", nullable: false),
                    LastName = table.Column<string>(type: "VARCHAR(150)", nullable: false),
                    Identification = table.Column<string>(type: "VARCHAR(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PaymentTypes",
                columns: table => new
                {
                    Id = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    TaxesPercentage = table.Column<int>(type: "NUMERIC", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    Id = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(type: "VARCHAR(150)", nullable: false),
                    Price = table.Column<decimal>(type: "DECIMAL(8, 2)", nullable: false),
                    ImagePath = table.Column<string>(type: "VARCHAR(150)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Sales",
                columns: table => new
                {
                    Id = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    SaleProductId = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    CustomerName = table.Column<string>(type: "VARCHAR(200)", nullable: false),
                    EmployeeId = table.Column<string>(type: "VARCHAR(36)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sales", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sales_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SaleProduct",
                columns: table => new
                {
                    Id = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    SaleId = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    ProductId = table.Column<string>(type: "VARCHAR(36)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SaleProduct", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SaleProduct_Product_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Product",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SaleProduct_Sales_SaleId",
                        column: x => x.SaleId,
                        principalTable: "Sales",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SalesPayment",
                columns: table => new
                {
                    Id = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    SaleId = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    PaymentTypeId = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    AmountInstallments = table.Column<int>(type: "NUMERIC", nullable: false),
                    InstallmentValue = table.Column<decimal>(type: "DECIMAL(8, 2)", nullable: false),
                    PaymentDay = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SalesPayment", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SalesPayment_PaymentTypes_PaymentTypeId",
                        column: x => x.PaymentTypeId,
                        principalTable: "PaymentTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SalesPayment_Sales_SaleId",
                        column: x => x.SaleId,
                        principalTable: "Sales",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SaleProduct_ProductId",
                table: "SaleProduct",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_SaleProduct_SaleId",
                table: "SaleProduct",
                column: "SaleId");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_EmployeeId",
                table: "Sales",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_SalesPayment_PaymentTypeId",
                table: "SalesPayment",
                column: "PaymentTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_SalesPayment_SaleId",
                table: "SalesPayment",
                column: "SaleId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SaleProduct");

            migrationBuilder.DropTable(
                name: "SalesPayment");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropTable(
                name: "PaymentTypes");

            migrationBuilder.DropTable(
                name: "Sales");

            migrationBuilder.DropTable(
                name: "Employees");
        }
    }
}
