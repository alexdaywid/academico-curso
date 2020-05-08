using meii.Business.Entities;
using meii.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Interfaces
{
    public interface IPedidoServices : IDisposable
    {
        Task Add(Pedido pedido);
        Task Update(Pedido pedido);
        Task Remove(Pedido pedido);

    }
}
