using System;
using System.Collections.Generic;
using System.Text;

namespace meii.Business.Entities
{
    public class Matricula
    {
        public int EstudanteId { get; set; }
        public Estudante Estudante { get; set; }
        public int CursoId { get; set; }
        public Curso Curso { get; set; }
        public string Codigo { get; set; }
        public DateTime DataDuracao { get; set; } = DateTime.Now.AddDays(120);
        public bool Ativo { get; set; } = true;


        
    }
}
