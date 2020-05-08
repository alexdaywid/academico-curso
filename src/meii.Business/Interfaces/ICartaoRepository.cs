using meii.Business.Entities;
using meii.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Interfaces
{
    public interface ICartaoRepository : IRepository<Cartao>
    {
        Task<IEnumerable<Cartao>> BuscarCartaoEstudantePorId(int estudanteId);
    }
}
