using System;
using System.Collections.Generic;
using System.Text;

namespace meii.applicationCore.Entities
{
    public class PessoaJuridica : Pessoa
    {
        public string NomeFantasia { get; set; }

        public string Cnpj { get; set; }

        public string InscMunicipal { get; set; }

        public string InscEstadual { get; set; }

    }
}
