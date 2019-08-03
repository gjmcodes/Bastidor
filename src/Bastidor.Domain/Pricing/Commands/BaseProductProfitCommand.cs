using Bastidor.Domain.Core.Commands;

public abstract class BaseProductProfitCommand : Command
{
    protected BaseProductProfitCommand(double profitValue)
    {
        ProfitValue = profitValue;
    }

    public double ProfitValue {get; protected set;}

}