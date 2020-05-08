using FluentValidation;
using FluentValidation.Results;
using meii.applicationCore.Entities.Notificacoes;
using meii.applicationCore.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace meii.applicationCore.Services
{
    public class BaseServices
    {
        protected readonly INotificador _notificador;

        public BaseServices(INotificador notificador)
        {
            _notificador = notificador;
        }

        protected void Notificar(ValidationResult validationResult)
        {
            foreach (var error in validationResult.Errors)
            {
                Notificar(error.ErrorMessage);
            }
        }

        protected void Notificar(string mensagem)
        {
            _notificador.Handle(new Notificacao(mensagem));
        }

        protected bool ExecutarValidacao<TV, TE>(TV validacao, TE entidade) where TV : AbstractValidator<TE> where TE : class
        {
            var validator = validacao.Validate(entidade);

            if (validator.IsValid) return true;

            Notificar(validator);

            return false;
        }
    }
}
