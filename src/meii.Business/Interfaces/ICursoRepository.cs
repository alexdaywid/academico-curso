using meii.Business.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Interfaces
{
    public interface ICursoRepository: IRepository<Curso>
    {
        Task<IEnumerable<Curso>> BuscarCursoMatriculaEstudante(int estudanteId);
    }
}
