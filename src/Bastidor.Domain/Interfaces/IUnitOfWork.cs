using System;
using System.Data.Common;
using System.Threading;
using System.Threading.Tasks;

namespace Bastidor.Domain.Interfaces
{
    public interface  IUnitOfWork : IDisposable
    {
        Task<DbTransaction> BeginTransactionAsync(CancellationToken cancellationToken);
        Task<bool> CommitAsync();
    }
}
