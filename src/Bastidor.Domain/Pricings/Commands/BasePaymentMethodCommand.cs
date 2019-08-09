using System.Collections.Generic;
using Bastidor.Domain.Core.Commands;


namespace Bastidor.Domain.Pricings.Commands
{
    public abstract class BasePaymentMethodCommand : Command
    {
        public string Description { get; protected set; }
        public int MaxInstallments { get; protected set; }
        public IEnumerable<BasePaymentMethodTaxCommand> TaxesCommands { get; protected set; }

    }
}
