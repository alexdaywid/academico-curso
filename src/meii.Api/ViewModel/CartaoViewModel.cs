using meii.Business.Entities;
using meii.Business.Enums;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace meii.Api.ViewModel
{
    public class CartaoViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório. ")]
        public string Titular { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório. ")]
        public DateTime DataVencimento { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório. ")]
        public string Numero { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório. ")]
        public int CodigoSeguranca { get; set; }

       
        [Required(ErrorMessage = "O campo {0} é obrigatório. ")]
        [JsonConverter(typeof(StringEnumConverter))]
        public BandeiraCartao BandeiraCartao { get; set; }
        public int EstudanteId { get; set; }

    }
}
