using meii.applicationCore.Services;
using meii.Business.Entities;
using meii.Business.Entities.Validation;
using meii.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace meii.Business.Services
{
    public class MatriculaServices : BaseServices , IMatriculaServices
    {
        private readonly IMatriculaRepository _matriculaRepository;
        private readonly IPedidoRepository _pedidoRepository;
        public MatriculaServices(
            IMatriculaRepository matriculaRepository,
            IPedidoRepository pedidoRepository,
            INotificador notificador) : base(notificador)
        {
            _matriculaRepository = matriculaRepository;
            _pedidoRepository = pedidoRepository;
        }

        public async Task<bool> Add(Matricula matricula)
        {
            if (!ExecutarValidacao(new MatriculaValidation(), matricula))
                return false;

            await _matriculaRepository.Add(matricula);
            return true;
           
        }

        public async Task Remove(Matricula matricula)
        {
            await _matriculaRepository.Remove(matricula);
        }

        public async Task Update(Matricula matricula)
        {
            if (!ExecutarValidacao(new MatriculaValidation(), matricula))
                return;

            await _matriculaRepository.Update(matricula);
        }

        public async Task EfetuarMatricula(Matricula matricula)
        {
            if (!ExecutarValidacao(new MatriculaValidation(), matricula))
                return;

            await _matriculaRepository.Update(matricula);
        }

        public void Dispose()
        {
            _matriculaRepository?.Dispose();
        }
    }
}
