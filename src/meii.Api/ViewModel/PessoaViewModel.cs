using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meii.Api.ViewModel
{
    public class PessoaViewModel
    {
        public string Nome { get; set; }

        public string Email { get; set; }

        public string TelefoneFixo { get; set; }

        public string TelefoneCelular { get; set; }

        public ICollection<EnderecoViewModel> Endereco { get; set; }

    }
}
