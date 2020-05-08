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
    public class CartaoServices : BaseServices , ICartaoServices
    {
        private readonly ICartaoRepository _cartaoRepository;
        private readonly IEstudanteRepository _estudanteRepository;
        public CartaoServices(
            INotificador notificador, 
            ICartaoRepository cartaoRepository,
            IEstudanteRepository estudanteRepository) : base(notificador)
        {
            _cartaoRepository = cartaoRepository;
            _estudanteRepository = estudanteRepository;
        }

        public async Task Add(Cartao cartao)
        {
            if (!ExecutarValidacao(new CartaoValidation(), cartao))
                return;
          
            await _cartaoRepository.Add(cartao);       
        }

        public async Task Remove(Cartao cartao)
        {
            await _cartaoRepository.Remove(cartao);
        }

        public async Task Update(Cartao cartao)
        {
            if (!ExecutarValidacao(new CartaoValidation(), cartao))
                return;

            await _cartaoRepository.Update(cartao);
        }

        public void Dispose()
        {
            _cartaoRepository?.Dispose();
        }
    }
}
