using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using meii.Business.Enums;

namespace meii.Business.Entities
{
    public class Cartao
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
        public BandeiraCartao BandeiraCartao { get; set; }
        public int EstudanteId { get; set; }
        public Estudante Estudante { get; set; } 
        
    }

}
