using meii.Business.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Interfaces
{
    public interface ICartaoServices : IDisposable
    {
        Task Add(Cartao cartao);
        Task Update(Cartao cartao);
        Task Remove(Cartao cartao);
       
    }
}
