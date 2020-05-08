using meii.Business.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Interfaces
{
    public interface IMatriculaServices : IDisposable
    {
        Task<bool> Add(Matricula matricula);
        Task Update(Matricula matricula);
        Task Remove(Matricula matricula);
    }
}
