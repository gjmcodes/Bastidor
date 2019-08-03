using System.Collections.Generic;
using System.Threading.Tasks;
using Bastidor.Domain.Interfaces;

public interface IPaymentMethodPersistentRepository : IPersistentRepository<PaymentMethod>
{
    Task<bool> AddTaxesAsync(string paymentMethodId, IEnumerable<PaymentMethodTax> taxes);
}