using Bastidor.Domain.Core.Models;
using Bastidor.Domain.Interfaces;
using Bastidor.Infra.Data.Contexts;
using Microsoft.EntityFrameworkCore;

namespace Bastidor.Infra.Data.Repositories
{
    public class PersistentRepository<T> : IPersistentRepository<T> where T : Entity<T>
    {
        protected BastidorContext Context;
        protected DbSet<T> DbSet;

        public PersistentRepository(BastidorContext context)
        {
            Context = context;
            DbSet = Context.Set<T>();
        }

        public void Add(T obj)
        {
            DbSet.Add(obj);
        }

        public void Dispose()
        {
            Context.Dispose();
        }
    }
}
