using meii.Business.Entities;
using meii.Business.Interfaces;
using meii.infrastrutucture.Context;
using meii.infrastrutucture.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.infrastrutucture.Repository
{
    public class PedidoCursoRepository : EFRepository<PedidoCurso>, IPedidoCursoRepository
    {
        public PedidoCursoRepository(MEContext context) : base(context)
        {
        }

    }
}
