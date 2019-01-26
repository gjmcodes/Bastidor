using Bastidor.Domain.Core.Models;
using System;

namespace Bastidor.Domain.Interfaces
{
    public interface IPersistentRepository<T> : IDisposable where T : Entity<T>
    {
        void Add(T obj);
    }
}
