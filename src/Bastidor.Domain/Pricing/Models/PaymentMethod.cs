using System.Collections.Generic;
using Bastidor.Domain.Core.Models;

public class PaymentMethod : Entity<PaymentMethod>
{
    public PaymentMethod(string description, int maxInstallments)
    {
        Description = description;
        MaxInstallments = maxInstallments;
    }

    public string Description { get; private set; }
    public int MaxInstallments { get; private set; }

    //Migrations Data
    public IEnumerable<PaymentMethodTax> Taxes { get; private set; }
    protected override void ValidateRules()
    {
    }
}