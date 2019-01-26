using Bastidor.Domain.Core.Commands;
using Bastidor.Domain.Core.Events;
using Bastidor.Domain.Interfaces;
using MediatR;
using System;
using System.Threading.Tasks;

namespace Bastidor.Domain.Handlers
{
    public class MediatorHandler : IMediatorHandler
    {

        private readonly IMediator _mediator;

        public MediatorHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task PublishCommandAsync<T>(T cmd) where T : Command
        {
            await _mediator.Send(cmd);
        }

        public async Task PublishEventAsync<T>(T evt) where T : Event
        {
            await _mediator.Publish(evt);
        }
    }
}
