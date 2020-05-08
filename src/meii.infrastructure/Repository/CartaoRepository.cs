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
    public class CartaoRepository : EFRepository<Cartao>, ICartaoRepository
    {
        public CartaoRepository(MEContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Cartao>> BuscarCartaoEstudantePorId(int estudanteId)
        {
            return await _context.Cartoes.Where(c => c.EstudanteId == estudanteId)
                .ToListAsync();
        }
    }
}
