using Bastidor.Domain.Core.Models;
using System;
using System.Threading.Tasks;

namespace Bastidor.Domain.Interfaces
{
    public interface IPersistentRepository<T> : IDisposable where T : Entity<T>
    {
        Task<bool> AddAsync(T obj);
    }
}
