using meii.Business.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Interfaces
{
    public interface IPagamentoServices : IDisposable
    {
        Task Add(Pagamento pagamento);
        Task Update(Pagamento pagamento);
        Task Remove(Pagamento pagamento);
        Task EfetuarPagamento(Pagamento pagamento);
        Task<bool> EnviarEmailCorfimacaoPagamentoParcela(Pagamento pagamento);
    }
}
