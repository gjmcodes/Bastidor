using Bastidor.Domain.Core.Notifications;
using Bastidor.Domain.Interfaces;
using FluentValidation.Results;
using MediatR;
using System.Threading.Tasks;

namespace Bastidor.Domain.Handlers
{
    public abstract class CommandHandler
    {
        protected readonly IUnitOfWork _unitOfWork;
        protected readonly IMediatorHandler _mediatorHandler;
        protected readonly DomainNotificationHandler _domainNotificationHandler;

        protected CommandHandler(IUnitOfWork unitOfWork, IMediatorHandler mediatorHandler, INotificationHandler<DomainNotification> domainNotificationHandler)
        {
            _unitOfWork = unitOfWork;
            _mediatorHandler = mediatorHandler;
            _domainNotificationHandler = (DomainNotificationHandler)domainNotificationHandler;
        }


        protected void NotifyValidationErrors(ValidationResult validationResult)
        {
            foreach (var error in validationResult.Errors)
            {
                _mediatorHandler.PublishEventAsync(new DomainNotification(error.PropertyName, error.ErrorMessage));
            }
        }

        protected async Task<bool> CommitAsync()
        {
            if (_domainNotificationHandler.HasNotifications())
                return false;

            if (await _unitOfWork.CommitAsync())
                return true;

            await _mediatorHandler.PublishEventAsync(new DomainNotification("Commit", "Ocorreu um erro ao salvar os dados."));

            return false;
        }
    }
}
