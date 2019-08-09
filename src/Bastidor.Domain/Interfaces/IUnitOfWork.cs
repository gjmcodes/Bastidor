using System;
using System.Data.Common;
using System.Threading;
using System.Threading.Tasks;
using Bastidor.Domain.Pricings.Repositoires.Persistent;

namespace Bastidor.Domain.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        Task<DbTransaction> BeginTransactionAsync(CancellationToken cancellationToken);
        Task<bool> CommitAsync();


        //Repositories
        IProductProfitPersistentRepository ProductProfitPersistentRepository { get; }
        IPaymentMethodPersistentRepository PaymentMethodPersistentRepository { get; }
    }
}
