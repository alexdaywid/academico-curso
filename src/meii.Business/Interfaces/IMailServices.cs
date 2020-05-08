using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Interfaces
{
    public interface IMailServices
    {
        Task SendEmailAsync(string email, string assunto, string mensagem);
    }
}
