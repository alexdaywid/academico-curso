using meii.applicationCore.Services;
using meii.Business.Entities;
using meii.Business.Entities.Validation;
using meii.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Services
{
    public class CursoServices : BaseServices , ICursoServices
    {
        private readonly ICursoRepository _cursoRepository;
        public CursoServices(INotificador notificador, ICursoRepository cursoRepository) : base(notificador)
        {
            _cursoRepository = cursoRepository;
        }

        public async Task Add(Curso curso)
        {
            if (!ExecutarValidacao(new CursoValidation(), curso))
                return;
            await _cursoRepository.Add(curso);       
        }

        public async Task Remove(Curso curso)
        {
            await _cursoRepository.Remove(curso);
        }

        public async Task Update(Curso curso)
        {
            if (!ExecutarValidacao(new CursoValidation(), curso))
                return;
            await _cursoRepository.Update(curso);
        }

        public void Dispose()
        {
            _cursoRepository?.Dispose();
        }
    }
}
