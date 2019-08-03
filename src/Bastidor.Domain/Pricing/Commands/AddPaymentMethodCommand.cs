using System.Collections.Generic;

public class AddPaymentMethodCommand : BasePaymentMethodCommand
{
    public AddPaymentMethodCommand(string description, int maxInstallments,
    IEnumerable<BasePaymentMethodTaxCommand> taxesCommands)
    {
        Description = description;
        MaxInstallments = maxInstallments;
        TaxesCommands = taxesCommands;
    }
}