using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meii.Api.ViewModel
{
    public class PedidoViewModel
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public DateTime? DataGeracao { get; set; }
        public bool Status { get; set; }
        public int EstudanteId { get; set; }
        public int Quantidade { get; set; }
        public float Valor { get; set; }
        public ICollection<CursoViewModel> Curso { get; set; }
        public ICollection<PagamentoViewModel> Pagamento { get; set; }
    }
}
