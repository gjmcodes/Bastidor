

namespace Bastidor.Domain.Pricings.Commands
{
    public class AddProductProfitCommand : BaseProductProfitCommand
    {
        public AddProductProfitCommand(double profitValue) : base(profitValue)
        {
        }
    }
}