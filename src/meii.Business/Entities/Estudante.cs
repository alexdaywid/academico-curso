using System;
using System.Collections.Generic;
using System.Text;

namespace meii.Business.Entities
{
    public class Estudante
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public bool Ativo { get; set; }
        public int PessoaId { get; set; }
        public Pessoa Pessoa { get; set; }
        public ICollection<Cartao> Cartao { get; set; }
        public ICollection<Pedido> Pedido { get; set; }
        public ICollection<Matricula> Matricula { get; set; }
    }
}
