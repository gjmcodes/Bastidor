using Bastidor.Domain.Core.Models;


namespace Bastidor.Domain.Pricings.Models
{
    public class PricingProductProfit : Entity<PricingProductProfit>
    {
        public PricingProductProfit(double profitValue)
        {
            ProfitValue = profitValue;
        }
        public double ProfitValue { get; private set; }

        protected override void ValidateRules()
        {
        }
    }
}