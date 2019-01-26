using Bastidor.Domain.Payments;
using Bastidor.Domain.Payments.Repositories.Persistence;
using Bastidor.Infra.Data.Contexts;

namespace Bastidor.Infra.Data.Repositories.Persistent
{
    public class PaymentTypePersistentRepository : PersistentRepository<PaymentType>, IPaymentTypePersistentRepository
    {
        public PaymentTypePersistentRepository(BastidorContext context) : base(context)
        {
        }
    }
}
