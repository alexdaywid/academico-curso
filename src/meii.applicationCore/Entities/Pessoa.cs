using System;
using System.Collections.Generic;
using System.Text;

namespace meii.applicationCore.Entities
{
    public abstract class Pessoa
    {
        public int PessoaId { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public string TelefoneFixo { get; set; }

        public string TelefoneCelular { get; set; }

        public Cliente Cliente { get; set; }

        public ICollection<Endereco> Endereco { get; set; }
    }
}
