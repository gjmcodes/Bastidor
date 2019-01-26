using Bastidor.Domain.Interfaces;
using Bastidor.Infra.Data.Contexts;
using System.Threading.Tasks;

namespace Bastidor.Infra.Data.UoW
{
    public class UnitOfWork : IUnitOfWork
    {
        private BastidorContext context;

        public async Task<bool> CommitAsync()
        {
            return await context.SaveChangesAsync() > 0;
        }

        public void Dispose()
        {
            context.Dispose();
        }
    }
}
