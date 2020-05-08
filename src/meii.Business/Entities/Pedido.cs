using System;
using System.Collections.Generic;
using System.Text;

namespace meii.Business.Entities
{
    public class Pedido
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public DateTime? DataGeracao { get; set; } = DateTime.Now;
        public bool Status { get; set; } = false;
        public int EstudanteId { get; set; }
        public Estudante Estudante { get; set; }
        public int Quantidade { get; set; }
        public float Valor { get; set; }
        public ICollection<PedidoCurso> PedidoCurso { get; set; }
        public ICollection<Pagamento> Pagamento { get; set; }
    }
}
