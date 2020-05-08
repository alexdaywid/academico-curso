using System.Collections.Generic;
using System.Threading.Tasks;
using meii.Business.Entities;
using meii.Business.Interfaces;
using meii.infrastrutucture.Context;
using Microsoft.EntityFrameworkCore;

namespace meii.infrastrutucture.Repository
{
    public class PessoaRepository : EFRepository<Pessoa>, IPessoaRepository
    {
        public PessoaRepository(MEContext context) : base(context)
        {

        }

    }
}
