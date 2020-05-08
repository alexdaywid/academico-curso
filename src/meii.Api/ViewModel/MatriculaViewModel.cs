using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meii.Api.ViewModel
{
    public class MatriculaViewModel
    {
        public int EstudanteId { get; set; }
        public int CursoId { get; set; }
        public string Codigo { get; set; }
        public DateTime DataDuracao { get; set; }
        public bool Ativo { get; set; }
    }
}
