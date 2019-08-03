using Bastidor.Domain.Handlers;
using Bastidor.Domain.Core.Notifications;
using Bastidor.Domain.Interfaces;
using Bastidor.Domain.Payments.Repositories.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Bastidor.Domain.Payments.Commands
{
    public class PaymentTypeCommandHandler : CommandHandler,
        IRequestHandler<AddPaymentTypeCommand>
    {

        private readonly IPaymentTypePersistentRepository _paymentTypePersistentRepository;

        public PaymentTypeCommandHandler(IUnitOfWork unitOfWork,
            IMediatorHandler mediatorHandler, 
            INotificationHandler<DomainNotification> domainNotificationHandler,
            IPaymentTypePersistentRepository paymentTypePersistentRepository) : base(unitOfWork, mediatorHandler, domainNotificationHandler)
        {
            _paymentTypePersistentRepository = paymentTypePersistentRepository;
        }

        private bool PaymentTypeIsValid(PaymentType paymentType)
        {
            if (paymentType.IsValid())
                return true;

            NotifyValidationErrors(paymentType.ValidationResult);
            return false;
        }


        public async Task<Unit> Handle(AddPaymentTypeCommand request, CancellationToken cancellationToken)
        {
            var paymentType = new PaymentType(request.Description, request.TaxesPercentage);


            if(!PaymentTypeIsValid(paymentType))
                return await Unit.Task;

            //Validar regras de negócio

            await _paymentTypePersistentRepository.AddAsync(paymentType);

            if(await CommitAsync())
            {
                //_mediatorHandler.PublishEventAsync(new DomainNotification())
            }

            return await Unit.Task;
        }

    }
}
