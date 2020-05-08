using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meii.Api.ViewModel
{
    public class PessoaFisicaViewModel : PessoaViewModel
    {
        public string Cpf { get; set; }

        public string Rg { get; set; }

        public DateTime DtNascimento { get; set; }
    }
}
