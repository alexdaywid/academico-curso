using meii.applicationCore.Entities.Notificacoes;
using System;
using System.Collections.Generic;
using System.Text;

namespace meii.applicationCore.Interfaces
{
    public interface INotificador
    {
        bool TemNotificacao();
        List<Notificacao> ObterNotificacoes();
        void Handle(Notificacao notificacao);
    }
}
