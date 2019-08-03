using System;
using System.Data.Common;
using System.Threading;
using System.Threading.Tasks;
using Bastidor.Domain.Interfaces;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;

public class UoW : IUnitOfWork, IDisposable
{
    private MySqlConnection mySqlConnection;
    private MySqlTransaction mySqlTransaction;
    private IConfiguration configuration;


    private IPaymentMethodPersistentRepository _paymentMethodPersistentRepository;
    public IPaymentMethodPersistentRepository PaymentMethodPersistentRepository => _paymentMethodPersistentRepository == null ?
     new PaymentMethodPersistentRepository(mySqlTransaction) : _paymentMethodPersistentRepository;
    
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

    public void Dispose()
    {
        mySqlConnection.Dispose();
        GC.SuppressFinalize(this);
    }
}