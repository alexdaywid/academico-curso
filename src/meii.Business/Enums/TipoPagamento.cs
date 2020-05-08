using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace meii.Business.Enums
{
    public enum TipoPagamento
    {
        [Description("À Vista")]
        dinheiro,
        [Description("Boleto")]
        boleto,
        [Description("Cartâo Crédito")]
        cartaoCredito,
    }
}
