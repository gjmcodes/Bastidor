using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Bastidor.Infra.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PricingPaymentMethod",
                columns: table => new
                {
                    Id = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(type: "varchar(100)", nullable: false),
                    MaxInstallments = table.Column<int>(type: "int", nullable: false, defaultValue: 1)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PricingPaymentMethod", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PricingProductProfit",
                columns: table => new
                {
                    Id = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    ProfitValue = table.Column<decimal>(type: "decimal(5,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PricingProductProfit", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PricingPaymentMethodTax",
                columns: table => new
                {
                    Id = table.Column<string>(type: "VARCHAR(36)", nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(type: "varchar(100)", nullable: false),
                    TaxValue = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    PaymentMethodId = table.Column<string>(type: "varchar(36)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PricingPaymentMethodTax", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PricingPaymentMethodTax_PricingPaymentMethod_PaymentMethodId",
                        column: x => x.PaymentMethodId,
                        principalTable: "PricingPaymentMethod",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PricingPaymentMethodTax_PaymentMethodId",
                table: "PricingPaymentMethodTax",
                column: "PaymentMethodId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PricingPaymentMethodTax");

            migrationBuilder.DropTable(
                name: "PricingProductProfit");

            migrationBuilder.DropTable(
                name: "PricingPaymentMethod");
        }
    }
}
