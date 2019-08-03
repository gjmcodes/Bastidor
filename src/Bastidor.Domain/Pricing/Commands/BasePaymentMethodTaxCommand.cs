using Bastidor.Domain.Core.Commands;

public abstract class BasePaymentMethodTaxCommand : Command
{
    public string Description { get; protected set; }
    public double TaxValue { get; protected set; }

}