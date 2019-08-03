using System;
using System.Data;
using System.Data.Common;
using System.Threading.Tasks;
using Bastidor.Domain.Core.Models;
using Bastidor.Domain.Interfaces;
using Microsoft.Extensions.Configuration;

public abstract class BasePersistentRepository : IDisposable
{
    protected readonly IDbTransaction transaction;
    protected IDbConnection connection => transaction.Connection;

    protected BasePersistentRepository(IDbTransaction transaction)
    {
        this.transaction = transaction;
    }

    public virtual void Dispose()
    {
        GC.SuppressFinalize(this);
    }
}