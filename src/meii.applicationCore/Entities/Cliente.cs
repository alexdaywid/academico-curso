using System;
using System.Collections.Generic;
using System.Text;

namespace meii.applicationCore.Entities
{
    public class Cliente
    {
        public int ClienteId { get; set; }

        public string Codigo { get; set; }

        public int PessoaId { get; set; }

        public Pessoa Pessoa { get; set; }
    }
}
