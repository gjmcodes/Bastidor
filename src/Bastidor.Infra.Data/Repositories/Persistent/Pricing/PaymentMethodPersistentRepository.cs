using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Bastidor.Domain.Pricings.Models;
using Bastidor.Domain.Pricings.Repositoires.Persistent;
using Dapper;

public class PaymentMethodPersistentRepository : BasePersistentRepository, IPaymentMethodPersistentRepository
{
    public PaymentMethodPersistentRepository(IDbTransaction transaction) : base(transaction)
    {
    }

    public async Task<bool> AddAsync(PricingPaymentMethod obj)
    {
        var sql = @"INSERT INTO PaymentMethods 
                (Id, Description, MaxInstallments)
                VALUES (?Id, ?Description, ?MaxInstallments)";

        var result = await base.connection.ExecuteScalarAsync<int>(
             sql,
             param: new { Id = obj.Id, Description = obj.Description, MaxInstallments = obj.MaxInstallments },
             transaction: base.transaction
         );

        return result > 0;
    }

    public async Task<bool> AddTaxesAsync(IEnumerable<PricingPaymentMethodTax> taxes)
    {
        var sql = @"INSERT INTO PaymentMethodTaxes
        (Id, Description, TaxValue)
        VALUES (?Id, ?Description, ?TaxValue, ?PaymentMethodId)";

        var result = await base.connection.ExecuteScalarAsync<int>(
             sql,
             param: taxes,
             transaction: base.transaction
         );

        return result > 0;
    }

}