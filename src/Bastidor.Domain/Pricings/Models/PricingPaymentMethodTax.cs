using Bastidor.Domain.Core.Models;


namespace Bastidor.Domain.Pricings.Models
{
    public class PricingPaymentMethodTax : Entity<PricingPaymentMethodTax>
    {
        public PricingPaymentMethodTax(string description, double taxValue, string paymentMethodId)
        {
            Description = description;
            TaxValue = taxValue;
            PaymentMethodId = paymentMethodId;
        }

        public string Description { get; private set; }
        public double TaxValue { get; private set; }
        public string PaymentMethodId { get; private set; }


        //Migrations Data
        public PricingPaymentMethod PaymentMethod { get; private set; }
        protected override void ValidateRules()
        {
        }
    }
}