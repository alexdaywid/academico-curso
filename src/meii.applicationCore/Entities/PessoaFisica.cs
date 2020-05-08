using System;
using System.Collections.Generic;
using System.Text;

namespace meii.applicationCore.Entities
{
    public class PessoaFisica : Pessoa
    {
        public string Cpf { get; set; }

        public string Rg { get; set; }

        public DateTime DtNascimento { get; set; }
    }
}
