using meii.Business.Entities;
using meii.Business.Interfaces;
using meii.infrastrutucture.Context;

namespace meii.infrastrutucture.Repository
{
    public class EnderecoRepository : EFRepository<Endereco>, IEnderecoRepository
    {
        public EnderecoRepository(MEContext context) : base (context)
        {

        }
    }
}
