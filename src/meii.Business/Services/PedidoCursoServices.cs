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
    public class PedidoCursoServices : BaseServices , IPedidoCursoServices
    {
        private readonly IPedidoCursoRepository _pedidoCursoRepository;
        public PedidoCursoServices(INotificador notificador, IPedidoCursoRepository pedidoCursoRepository) : base(notificador)
        {
            _pedidoCursoRepository = pedidoCursoRepository;
        }

        public async Task Add(PedidoCurso pedidoCurso)
        {
            if (!ExecutarValidacao(new PedidoCursoValidation(), pedidoCurso))
                return;

            await _pedidoCursoRepository.Add(pedidoCurso);
           
        }

        public async Task Remove(PedidoCurso pedidoCurso)
        {
            await _pedidoCursoRepository.Remove(pedidoCurso);
        }

        public async Task Update(PedidoCurso pedidoCurso)
        {
            if (!ExecutarValidacao(new PedidoCursoValidation(), pedidoCurso))
                return;

            await _pedidoCursoRepository.Update(pedidoCurso);
        }

        public void Dispose()
        {
            _pedidoCursoRepository?.Dispose();
        }
    }
}
