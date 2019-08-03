using System.Data;
using System.Threading.Tasks;

public class ProductProfitPersistentRepository : BasePersistentRepository, IProductProfitPersistentRepository
{
    public ProductProfitPersistentRepository(IDbTransaction transaction) : base(transaction)
    {
    }

    public Task<bool> AddAsync(ProductProfit obj)
    {
        throw new System.NotImplementedException();
    }
}