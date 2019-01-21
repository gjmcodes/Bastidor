using Bastidor.Domain.Core.Commands;
using Bastidor.Domain.Core.Events;
using System.Threading.Tasks;

namespace Bastidor.Domain.Interfaces
{
    public interface IMediatorHandler
    {
        Task PublishEventAsync<T>(T evt) where T : Event;
        Task PublishCommandAsync<T>(T cmd) where T : Command;
    }
}
