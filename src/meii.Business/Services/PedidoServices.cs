using meii.applicationCore.Services;
using meii.Business.Entities;
using meii.Business.Entities.Validation;
using meii.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Services
{
    public class PedidoServices : BaseServices , IPedidoServices
    {
        private readonly IPedidoRepository _pedidoRepository;
        public PedidoServices(INotificador notificador, IPedidoRepository pedidoRepository) : base(notificador)
        {
            _pedidoRepository = pedidoRepository;
        }

        public async Task Add(Pedido pedido)
        {
            if (!ExecutarValidacao(new PedidoValidation(), pedido))
                return;

            await _pedidoRepository.Add(pedido);
           
        }

        public async Task Remove(Pedido pedido)
        {
            await _pedidoRepository.Remove(pedido);
        }

        public async Task Update(Pedido pedido)
        {
            if (!ExecutarValidacao(new PedidoValidation(), pedido))
                return;

            await _pedidoRepository.Update(pedido);
        }

        public void Dispose()
        {
            _pedidoRepository?.Dispose();
        }
    }
}
