using Bastidor.Domain.Core.Notifications;
using Bastidor.Domain.Interfaces;
using MediatR;

namespace Bastidor.Domain.CommandsHandlers
{
    public abstract class CommandHandler
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMediatorHandler _mediatorHandler;
        private readonly DomainNotificationHandler _domainNotificationHandler;

        protected CommandHandler(IUnitOfWork unitOfWork, IMediatorHandler mediatorHandler, INotificationHandler<DomainNotification> domainNotificationHandler)
        {
            _unitOfWork = unitOfWork;
            _mediatorHandler = mediatorHandler;
            _domainNotificationHandler = (DomainNotificationHandler)domainNotificationHandler;
        }
    }
}
