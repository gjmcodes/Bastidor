using System.Collections.Generic;
using Bastidor.Domain.Core.Models;


namespace Bastidor.Domain.Pricings.Models
{
    public class PricingPaymentMethod : Entity<PricingPaymentMethod>
    {
        public PricingPaymentMethod(string description, int maxInstallments)
        {
            Description = description;
            MaxInstallments = maxInstallments;
        }

        public string Description { get; private set; }
        public int MaxInstallments { get; private set; }

        //Migrations Data
        public IEnumerable<PricingPaymentMethodTax> Taxes { get; private set; }
        protected override void ValidateRules()
        {
        }
    }
}