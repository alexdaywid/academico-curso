using meii.Business.Entities;
using meii.Business.Interfaces;
using meii.infrastrutucture.Context;
using meii.infrastrutucture.Repository;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meii.infrastrutucture.Repository
{
    public class CursoRepository : EFRepository<Curso>, ICursoRepository
    {
        public CursoRepository(MEContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Curso>> BuscarCursoMatriculaEstudante(int estudanteId)
        {
            var matricula = _context.Matriculas.Where(x => x.EstudanteId == estudanteId).ToList();
            var cursos = new List<Curso>();
            foreach (var m in matricula)
            {
                var curso = await this.GetId(m.CursoId);
                if (curso != null) cursos.Add(curso);
            }

            return cursos;
        }
    }
}
