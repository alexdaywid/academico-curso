using meii.Business.Enums;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace meii.Api.ViewModel
{
    public class PagamentoViewModel
    {
        public int Id { get; set; }
        public DateTime DataVencimento { get; set; }
        public DateTime DataPagamento { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public TipoPagamento TipoPagamento { get; set; }
        public int TotalParcelas { get; set; }
        public float ValorParcela { get; set; }
        public int PedidoId { get; set; }
        public int CartaoId { get; set; }
        public bool Pago { get; set; }
    }
}
