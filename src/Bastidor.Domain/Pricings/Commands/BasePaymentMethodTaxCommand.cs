using Bastidor.Domain.Core.Commands;


namespace Bastidor.Domain.Pricings.Commands
{
    public abstract class BasePaymentMethodTaxCommand : Command
    {
        public string Description { get; protected set; }
        public double TaxValue { get; protected set; }

    }
}