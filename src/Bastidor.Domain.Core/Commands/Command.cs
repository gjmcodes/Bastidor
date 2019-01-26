using MediatR;
using System;

namespace Bastidor.Domain.Core.Commands
{
    public class Command : IRequest
    {

        public Command()
        {
            TimeStamp = DateTime.Now;
        }

        public DateTime TimeStamp { get; private set; }
    }
}
