using meii.Business.Entities;
using meii.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Interfaces
{
    public interface IPedidoRepository : IRepository<Pedido>
    {
        Task<Pedido> BuscarPedidoPagamentoCursoPorId(int id);
        Task<IEnumerable<Pedido>> ListarPedidosPorEstudanteCurso(int estudanteId);
    }
}
