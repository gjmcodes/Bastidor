using Bastidor.Domain.Interfaces;
using Bastidor.Domain.Notifications;

namespace Bastidor.Domain.CommandsHandlers
{
    public abstract class CommandHandler
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IDomainNotificationHandler _domainNotificationHandler;

        protected readonly IMediatorHandler _mediatorHandler;

        protected CommandHandler(IUnitOfWork unitOfWork, IMediatorHandler mediatorHandler, IDomainNotificationHandler domainNotificationHandler)
        {
            _unitOfWork = unitOfWork;
            _mediatorHandler = mediatorHandler;
            _domainNotificationHandler = domainNotificationHandler;
        }
    }
}
