using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meii.Api.ViewModel
{
    public class EstudantePessoaFisicaViewModel
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public PessoaFisicaViewModel Pessoa { get; set; }
        public ICollection<CartaoViewModel> Cartao {get;set;}

    }
}
