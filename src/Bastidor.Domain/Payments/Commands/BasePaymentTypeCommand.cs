using Bastidor.Domain.Core.Commands;

namespace Bastidor.Domain.Payments.Commands
{
    public abstract class BasePaymentTypeCommand : Command
    {
        public string Description { get; protected set; }
        public int TaxesPercentage { get; protected set; }
    }
}
