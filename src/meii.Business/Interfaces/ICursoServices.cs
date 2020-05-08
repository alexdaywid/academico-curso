using meii.Business.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Interfaces
{
    public interface ICursoServices : IDisposable
    {
        Task Add(Curso curso);
        Task Update(Curso curso);
        Task Remove(Curso curso);
       
    }
}
