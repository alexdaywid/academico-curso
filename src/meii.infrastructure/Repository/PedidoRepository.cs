using meii.Business.Entities;
using meii.Business.Interfaces;
using meii.infrastrutucture.Context;
using meii.infrastrutucture.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace meii.infrastrutucture.Repository
{
    public class PedidoRepository : EFRepository<Pedido>, IPedidoRepository
    {
        public PedidoRepository(MEContext context) : base(context)
        {
        }

        public override async Task<IEnumerable<Pedido>> GetAll()
        {
            return await _context.Pedidos.AsNoTracking()
                        .Include(c => c.PedidoCurso).ThenInclude(c=>c.Curso)
                        .Include(p => p.Pagamento)
                        .ToListAsync();
         
        }

        public async Task<Pedido> BuscarPedidoPagamentoCursoPorId(int id)
        {
            return await _context.Pedidos.AsNoTracking()
                       .Include(c => c.PedidoCurso).ThenInclude(c => c.Curso)
                       .Include(p => p.Pagamento)
                       .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Pedido>> ListarPedidosPorEstudanteCurso(int estudanteId)
        {
            return await _context.Pedidos
                       .Include(c => c.PedidoCurso).ThenInclude(c => c.Curso)
                       .Include(p => p.Pagamento)
                       .Where(e => e.EstudanteId == estudanteId)
                       .ToListAsync();
        }
    }
}
