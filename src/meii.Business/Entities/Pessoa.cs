﻿using meii.Business.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace meii.Business.Entities
{
    public class Pessoa
    {
        public int PessoaId { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public string TelefoneFixo { get; set; }

        public string TelefoneCelular { get; set; }

        public Estudante Cliente { get; set; }

        public ICollection<Endereco> Endereco { get; set; }
    }
}
