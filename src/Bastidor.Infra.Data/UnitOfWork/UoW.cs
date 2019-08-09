using System;
using System.Data.Common;
using System.Threading;
using System.Threading.Tasks;
using Bastidor.Domain.Interfaces;
using Bastidor.Domain.Pricings.Repositoires.Persistent;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;

public class UoW : IUnitOfWork, IDisposable
{
    private MySqlConnection mySqlConnection;
    private MySqlTransaction mySqlTransaction;
    private IConfiguration configuration;

    public UoW(IConfiguration configuration)
    {
        this.configuration = configuration;
    }

    public IPaymentMethodPersistentRepository PaymentMethodPersistentRepository => new PaymentMethodPersistentRepository(mySqlTransaction);
    public IProductProfitPersistentRepository ProductProfitPersistentRepository => new ProductProfitPersistentRepository(mySqlTransaction);
    public async Task<DbTransaction> BeginTransactionAsync(CancellationToken cancellationToken)
    {
        if (mySqlTransaction != null)
            return mySqlTransaction;

        var connString = configuration.GetConnectionString("BastidorDb");

        mySqlConnection = new MySqlConnection(connString);
        mySqlTransaction = await mySqlConnection.BeginTransactionAsync(cancellationToken);

        return mySqlTransaction;
    }

    public async Task<bool> CommitAsync()
    {
        try
        {
            await mySqlTransaction.CommitAsync();
            return true;
        }
        catch
        {
            await mySqlTransaction.RollbackAsync();
            return false;
        }
        finally
        {
            mySqlTransaction.Dispose();
        }
    }

    void DisposeRepositories()
    {
        if (PaymentMethodPersistentRepository != null)
            PaymentMethodPersistentRepository.Dispose();

        if (ProductProfitPersistentRepository != null)
            ProductProfitPersistentRepository.Dispose();
    }

    public void Dispose()
    {
        DisposeRepositories();
        mySqlConnection.Dispose();
        GC.SuppressFinalize(this);
    }
}