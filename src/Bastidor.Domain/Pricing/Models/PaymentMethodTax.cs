using Bastidor.Domain.Core.Models;

public class PaymentMethodTax : Entity<PaymentMethodTax>
{
    public PaymentMethodTax(string description, double taxValue, string paymentMethodId)
    {
        Description = description;
        TaxValue = taxValue;
        PaymentMethodId = paymentMethodId;
    }

    public string Description { get; private set; }
    public double TaxValue { get; private set; }
    public string PaymentMethodId { get; private set; }

    protected override void ValidateRules()
    {
    }
}