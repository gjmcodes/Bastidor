using Bastidor.Domain.CommandsHandlers;
using Bastidor.Domain.Interfaces;
using Bastidor.Domain.Notifications;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bastidor.Domain.Payments.Commands
{
    public class PaymentTypeCommandHandler : CommandHandler
    {
        public PaymentTypeCommandHandler(IUnitOfWork unitOfWork,
            IMediatorHandler mediatorHandler, 
            IDomainNotificationHandler domainNotificationHandler) : base(unitOfWork, mediatorHandler, domainNotificationHandler)
        {
        }
    }
}
