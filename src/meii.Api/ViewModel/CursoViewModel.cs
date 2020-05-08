using meii.Business.Enums;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meii.Api.ViewModel
{
    public class CursoViewModel
    {
        public int Id { get; set; }
        public DateTime? DataCadastro { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public bool Ativo { get; set; }
        public float Valor { get; set; }
        public int CargaHoraria { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public Nivel Nivel { get; set; }
    }
}
