using meii.Business.Entities;
using meii.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Interfaces
{
    public interface IEstudanteRepository : IRepository<Estudante>
    {
        Task<IEnumerable<Estudante>> BuscarEstudanteMatriculaCurso(int estudanteId);
    }
}
