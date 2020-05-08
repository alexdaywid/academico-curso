using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meii.Api.ViewModel
{
    public class PessoaJuridicaViewModel : PessoaViewModel
    {
        public string NomeFantasia { get; set; }

        public string Cnpj { get; set; }

        public string InscMunicipal { get; set; }

        public string InscEstadual { get; set; }
    }
}
