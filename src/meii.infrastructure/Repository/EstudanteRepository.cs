using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using meii.Business.Entities;
using meii.Business.Interfaces;
using meii.infrastrutucture.Context;
using Microsoft.EntityFrameworkCore;

namespace meii.infrastrutucture.Repository
{
    public class EstudanteRepository : EFRepository<Estudante>, IEstudanteRepository
    {
        public EstudanteRepository(MEContext context) : base(context)
        {

        }

        public async Task<IEnumerable<Estudante>> BuscarEstudanteMatriculaCurso(int estudanteId)
        {
            var estudante = await _context.Estudantes
                            .Include(m => m.Matricula).ThenInclude(m => m.Curso)
                            .Where(e => e.Id == estudanteId)
                            .ToListAsync();

            return estudante;
        }

       
        public async override Task<IEnumerable<Estudante>> GetAll()
        {
            return await _context.Estudantes.AsNoTracking()
                           .Include(p => p.Pessoa)
                                .ThenInclude(e => e.Endereco).ToListAsync();
        }

        public async override Task<Estudante> GetId(int id)
        {
            return await _context.Estudantes
                .AsNoTracking()
                .Include(p => p.Pessoa).ThenInclude(e => e.Endereco)
                .FirstOrDefaultAsync(c => c.Id == id);
        }





    }
}
