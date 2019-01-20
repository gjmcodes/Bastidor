namespace Bastidor.Domain.Payments.Commands
{
    public class AddPaymentTypeCommand : BasePaymentTypeCommand
    {
        public AddPaymentTypeCommand(string description,
            int taxesPercentage)
        {
            Description = description;
            TaxesPercentage = taxesPercentage;
        }
    }
}
