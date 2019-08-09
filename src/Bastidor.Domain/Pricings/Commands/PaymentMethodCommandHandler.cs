using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Bastidor.Domain.Core.Notifications;
using Bastidor.Domain.Handlers;
using Bastidor.Domain.Interfaces;
using Bastidor.Domain.Pricings.Models;
using MediatR;


namespace Bastidor.Domain.Pricings.Commands
{
    public class PaymentMethodCommandHandler : CommandHandler,
    IRequestHandler<AddPaymentMethodCommand>
    {
        public PaymentMethodCommandHandler(
            IUnitOfWork unitOfWork,
         IMediatorHandler mediatorHandler,
          INotificationHandler<DomainNotification> domainNotificationHandler) : base(unitOfWork, mediatorHandler, domainNotificationHandler)
        {
        }

        public async Task<Unit> Handle(AddPaymentMethodCommand request, CancellationToken cancellationToken)
        {

            var paymentMethod = new PricingPaymentMethod(request.Description, request.MaxInstallments);

            if (!paymentMethod.IsValid())
                return await Unit.Task;

            var taxesEntity = new List<PricingPaymentMethodTax>();
            bool taxesAreValid = true;
            foreach (var item in request.TaxesCommands)
            {
                var tax = new PricingPaymentMethodTax(item.Description, item.TaxValue, paymentMethod.Id);

                if (!tax.IsValid())
                    taxesAreValid = false;
                else
                    taxesEntity.Add(tax);
            }

            if (!taxesAreValid)
                return await Unit.Task;

            await _unitOfWork.BeginTransactionAsync(cancellationToken);
            await _unitOfWork.PaymentMethodPersistentRepository.AddAsync(paymentMethod);
            await _unitOfWork.PaymentMethodPersistentRepository.AddTaxesAsync(taxesEntity);
            var result = await _unitOfWork.CommitAsync();

            if (!result)
                await _domainNotificationHandler.Handle(new DomainNotification("Persistence", "Ocorreu um erro ao gravar os dados."), cancellationToken);

            return await Unit.Task;
        }
    }
}