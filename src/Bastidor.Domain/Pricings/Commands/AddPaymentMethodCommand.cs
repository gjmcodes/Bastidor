using System.Collections.Generic;

namespace Bastidor.Domain.Pricings.Commands
{

    public class AddPaymentMethodCommand : BasePaymentMethodCommand
    {
        public AddPaymentMethodCommand(string description, int maxInstallments,
        IEnumerable<BasePaymentMethodTaxCommand> taxesCommands)
        {
            Description = description;
            MaxInstallments = maxInstallments;
            TaxesCommands = taxesCommands ?? new List<BasePaymentMethodTaxCommand>();
        }
    }
}