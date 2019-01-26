using AutoMapper;
using Bastidor.Application.ViewModels.Application;
using Bastidor.Domain.Core.Notifications;
using Bastidor.Domain.Interfaces;
using MediatR;
using System;
using System.Linq;

namespace Bastidor.Application.Services
{
    public class BaseAppService : IDisposable
    {

        protected readonly IMediatorHandler mediatorHandler;
        protected readonly IMapper mapper;
        private readonly DomainNotificationHandler notificationHandler;

        public BaseAppService(IMediatorHandler mediatorHandler,
            IMapper mapper,
            INotificationHandler<DomainNotification> notificationHandler)
        {
            this.mediatorHandler = mediatorHandler;
            this.mapper = mapper;
            this.notificationHandler = (DomainNotificationHandler)notificationHandler;
        }

        protected OperationResult OperationResult()
        {
            var validations = notificationHandler.GetNotifications();
            var opResult = new OperationResult(validations.ToDictionary(x => x.Key, y => y.Value));

            return opResult;
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
