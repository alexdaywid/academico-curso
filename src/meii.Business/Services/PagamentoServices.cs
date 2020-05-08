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
    public class PagamentoServices : BaseServices , IPagamentoServices
    {
        private readonly IPagamentoRepository _pagamentoRepository;
        public PagamentoServices(INotificador notificador, 
            IPagamentoRepository pagamentoRepository) : base(notificador)
        {
            _pagamentoRepository = pagamentoRepository;
        }

        public async Task Add(Pagamento pagamento)
        {
            if (!ExecutarValidacao(new PagamentoValidation(), pagamento))
                return;

            await _pagamentoRepository.Add(pagamento);
           
        }

        public async Task Remove(Pagamento pagamento)
        {
            await _pagamentoRepository.Remove(pagamento);
        }

        public async Task Update(Pagamento pagamento)
        {
            if (!ExecutarValidacao(new PagamentoValidation(), pagamento))
                return;

            await _pagamentoRepository.Update(pagamento);
        }

        public async Task EfetuarPagamento(Pagamento pagamento)
        {
            if (!ExecutarValidacao(new PagamentoValidation(), pagamento))
                return;

            await _pagamentoRepository.Update(pagamento);
        }

        public void Dispose()
        {
            _pagamentoRepository?.Dispose();
        }

        public async Task<bool> EnviarEmailCorfimacaoPagamentoParcela(Pagamento pagamento)
        {
            if (pagamento.Pedido.Estudante.Pessoa.Email == null)
            {
                Notificar("Não é possível enviar o email, informe o email no cadastro do estudante");
                return false;
            }

            if (!pagamento.Pago)
            {
                Notificar("Pedido se encontrar com situacao pedentente");
                return false;
            }

            //await _mailServices.SendEmailAsync(pagamento.Pedido.Estudante.Pessoa.Email, "Confirmação de Pagamento",
            //    "Identificamos o seu pagamento");

            return true;
        }
    }
}
