using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using meii.Api.ViewModel;
using meii.Business.Entities;
using meii.Business.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace meii.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstudanteController : MainController
    {
        private readonly IEstudanteServices _estudanteService;
        private readonly IEstudanteRepository _estudanteRepository;
        private readonly IMapper _mapper;

        public EstudanteController(
            IEstudanteServices estudanteService ,
            IEstudanteRepository estudanteRepository, 
            IMapper mapper,
            INotificador notificador) : base(notificador)
        {
            _estudanteService = estudanteService;
            _estudanteRepository = estudanteRepository;
            _mapper = mapper;
        }
        // GET: api/estudante
        [HttpGet]
        public async Task<IEnumerable<EstudanteViewModel>> Get()
        {
            return _mapper.Map<IEnumerable<EstudanteViewModel>>(await _estudanteRepository.GetAll());
        }

        // GET: api/estudante/matricula-curso/5
        [HttpGet("matricula-curso/{id:int}")]
        public async Task<IEnumerable<Estudante>> BuscarEstudanteMatriculaCurso(int id)
        {
            return  await _estudanteRepository.BuscarEstudanteMatriculaCurso(id);
        }

        // GET: api/estudante/matricula-curso/5
        [HttpGet("{cpf}")]
        public async Task<ActionResult<EstudantePessoaFisicaViewModel>> BuscarEstudantePorCpf(string cpf)
        {
            var estudantes = _mapper.Map<IEnumerable<EstudantePessoaFisicaViewModel>>(await _estudanteRepository.GetAll());

            if (estudantes.Count() == 0) {
                NotificarErro("Nenhum estudante cadastrado.");
                return CustomResponse();
            }

            var estudante = estudantes.Where(x => x.Pessoa.Cpf == cpf).FirstOrDefault();

            if (estudante == null)
            {
                NotificarErro("Nenhum estudante cadastrado com o cpf informado.");
                return CustomResponse();
            }

            return Ok(estudante);
          
        }

        // GET: api/estudante/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<EstudantePessoaFisicaViewModel>> Get(int id)
        {
            var estudante = await _estudanteRepository.GetId(id);

            if (estudante == null)
                return NotFound("Estudante informado não foi encontrado.");

            var cartoes = _mapper.Map<EstudantePessoaFisicaViewModel>(estudante);

            return Ok(cartoes);
        }

        // POST: api/estudante
        [HttpPost]
        public async Task<ActionResult<EstudantePessoaFisicaViewModel>> Post(EstudantePessoaFisicaViewModel estudanteViewModel)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var estudante = _mapper.Map<Estudante>(estudanteViewModel);
            await _estudanteService.Add(estudante);
            
            estudanteViewModel.Id = estudante.Id;
            return Ok(_mapper.Map<EstudantePessoaFisicaViewModel>(estudanteViewModel));
        }

        // PUT: api/estudante/5
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, EstudantePessoaFisicaViewModel estudanteViewModel)
        {
            if (id != estudanteViewModel.Id) return BadRequest("Id informado difere do estudante.");

            if (!ModelState.IsValid) return BadRequest(ModelState);

            await _estudanteService.Update(_mapper.Map<Estudante>(estudanteViewModel));
            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<EstudantePessoaFisicaViewModel>> Delete(int id)
        {
            var estudante = await _estudanteRepository.GetId(id);
            if(estudante == null)
                return NotFound("Estudante informado não foi encontrado.");

            await _estudanteService.Remove(estudante);

            return NoContent();
        }
    }
}
