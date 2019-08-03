using Bastidor.Domain.Core.Models;

public class ProductProfit : Entity<ProductProfit>
{
    public ProductProfit(double profitValue)
    {
        ProfitValue = profitValue;
    }
    public double ProfitValue {get; private set;}

    protected override void ValidateRules()
    {
    }
}