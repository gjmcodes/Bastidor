using MediatR;
using System;

namespace Bastidor.Domain.Core.Events
{
    public class Event : INotification
    {
        public DateTime Timestamp { get; private set; }

        protected Event()
        {
            Timestamp = DateTime.Now;
        }
    }
}
