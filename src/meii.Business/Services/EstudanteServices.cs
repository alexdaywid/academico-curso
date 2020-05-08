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
    public class EstudanteServices : BaseServices , IEstudanteServices
    {
        private readonly IEstudanteRepository _estudanteRepository;
        public EstudanteServices(INotificador notificador, IEstudanteRepository estudanteRepository) : base(notificador)
        {
            _estudanteRepository = estudanteRepository;
        }

        public async Task Add(Estudante estudante)
        {
            if (!ExecutarValidacao(new EstudanteValidation(), estudante))
                return;

            await _estudanteRepository.Add(estudante);
           
        }

        public async Task Remove(Estudante estudante)
        {
            await _estudanteRepository.Remove(estudante);
        }

        public async Task Update(Estudante estudante)
        {
            if (!ExecutarValidacao(new EstudanteValidation(), estudante))
                return;

            await _estudanteRepository.Update(estudante);
        }

        public void Dispose()
        {
            _estudanteRepository?.Dispose();
        }
    }
}
