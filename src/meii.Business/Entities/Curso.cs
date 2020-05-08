using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;
using meii.Business.Enums;

namespace meii.Business.Entities
{
    public class Curso
    {
        public int Id { get; set; }
        public DateTime? DataCadastro { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public bool Ativo { get; set; } = true;
        public float Valor { get; set; }
        public int CargaHoraria { get; set; } = 240;
        public Nivel? Nivel { get; set; } = Enums.Nivel.basico;
        public ICollection<PedidoCurso> PedidoCurso { get; set; }
        public ICollection<Matricula> Matricula { get; set; }
    }
}
