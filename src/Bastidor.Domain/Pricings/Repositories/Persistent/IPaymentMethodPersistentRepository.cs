using System.Collections.Generic;
using System.Threading.Tasks;
using Bastidor.Domain.Interfaces;
using Bastidor.Domain.Pricings.Models;

namespace Bastidor.Domain.Pricings.Repositoires.Persistent
{
    public interface IPaymentMethodPersistentRepository : IPersistentRepository<PricingPaymentMethod>
    {
        Task<bool> AddTaxesAsync(IEnumerable<PricingPaymentMethodTax> taxes);
    }
}