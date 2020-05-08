using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meii.Api.ViewModel
{
    public class EstudanteViewModel
    {
        public int Id { get; set; }
        public string Codigo { get; set; }  
        public PessoaViewModel Pessoa { get; set; }

    }
}
