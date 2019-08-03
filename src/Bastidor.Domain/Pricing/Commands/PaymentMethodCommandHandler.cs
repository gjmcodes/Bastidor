using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Bastidor.Domain.Core.Notifications;
using Bastidor.Domain.Handlers;
using Bastidor.Domain.Interfaces;
using MediatR;

public class PaymentMethodCommandHandler : CommandHandler,
IRequestHandler<AddPaymentMethodCommand>
{
    private readonly IPaymentMethodPersistentRepository _paymentMethodPersistentRepository;
    public PaymentMethodCommandHandler(
        IPaymentMethodPersistentRepository paymentMethodPersistentRepository,
        IUnitOfWork unitOfWork,
     IMediatorHandler mediatorHandler,
      INotificationHandler<DomainNotification> domainNotificationHandler) : base(unitOfWork, mediatorHandler, domainNotificationHandler)
    {
        _paymentMethodPersistentRepository = paymentMethodPersistentRepository;
    }

    public async Task<Unit> Handle(AddPaymentMethodCommand request, CancellationToken cancellationToken)
    {

        var entity = new PaymentMethod(request.Description, request.MaxInstallments);

        if (!entity.IsValid())
            return await Unit.Task;

        var taxesEntity = new List<PaymentMethodTax>();
        bool taxesAreValid = true;
        foreach (var item in request.TaxesCommands)
        {
            var tax = new PaymentMethodTax(item.Description, item.TaxValue, entity.Id);
            
            if (!tax.IsValid())
                taxesAreValid = false;
            else
                taxesEntity.Add(tax);
        }

        if (!taxesAreValid)
            return await Unit.Task;


        await _paymentMethodPersistentRepository.AddAsync(entity);

        throw new System.NotImplementedException();
    }
}