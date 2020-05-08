using System;
using System.Collections.Generic;
using System.Text;

namespace meii.Business.Entities
{
    public class PedidoCurso
    {
        public int PedidoId { get; set; }
        public Pedido Pedido { get; set; }
        public int CursoId { get; set; }
        public Curso Curso { get; set; }
    }
}
