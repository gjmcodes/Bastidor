﻿using System;
using System.Threading.Tasks;

namespace Bastidor.Domain.Interfaces
{
    public interface  IUnitOfWork : IDisposable
    {
        Task<bool> CommitAsync();
    }
}
