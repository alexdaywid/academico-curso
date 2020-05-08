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
    public class PagamentoRepository : EFRepository<Pagamento>, IPagamentoRepository
    {
        public PagamentoRepository(MEContext context) : base(context)
        {
        }

    }
}
