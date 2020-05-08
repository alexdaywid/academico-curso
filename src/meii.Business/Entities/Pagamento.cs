using meii.Business.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace meii.Business.Entities
{
    public class Pagamento
    {
        public int Id { get; set; }
        public DateTime? DataVencimento { get; set; }
        public DateTime? DataPagamento { get; set; } = DateTime.Now;
        public TipoPagamento TipoPagamento { get; set; }
        public int TotalParcelas { get; set; }
        public float ValorParcela { get; set; }
        public int PedidoId { get; set; }
        public Pedido Pedido { get; set; }
        public int CartaoId { get; set; }
        public bool Pago { get; set; }
    }
}
