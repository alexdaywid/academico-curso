using meii.Business.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Interfaces
{
    public interface IEstudanteServices : IDisposable
    {
        Task Add(Estudante estudante);
        Task Update(Estudante estudante);
        Task Remove(Estudante estudante);
       
    }
}
