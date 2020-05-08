using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace meii.Business.Enums
{
    public enum BandeiraCartao
    {
        [Description("Visa")]
        visa,
        [Description("MasterCard")]
        masterCard,
        [Description("Elo")]
        elo,
        [Description("HiperCard")]
        hiperCard
    }
}
