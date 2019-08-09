using System.Data;
using System.Threading.Tasks;
using Bastidor.Domain.Pricings.Models;
using Bastidor.Domain.Pricings.Repositoires.Persistent;
using Dapper;

public class ProductProfitPersistentRepository : BasePersistentRepository, IProductProfitPersistentRepository
{
    public ProductProfitPersistentRepository(IDbTransaction transaction) : base(transaction)
    {
    }

    public async Task<bool> AddAsync(ProductProfit obj)
    {
        var sql = @"INSERT INTO ProductProfit (Id, ProfitValue)
        VALUES (?Id, ?ProfitValue)";


        var result = await base.connection.ExecuteScalarAsync<int>(
             sql,
             param: new {Id = obj.Id, ProfitValue = obj.ProfitValue},
             transaction: base.transaction
         );

        return result > 0;
    }
}