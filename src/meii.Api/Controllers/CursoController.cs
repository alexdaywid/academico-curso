using System;
using System.Collections.Generic;
using System.Linq;
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
    public class CursoController : MainController
    {
        private readonly ICursoServices _cursoService;
        private readonly ICursoRepository _cursoRepository;
        private readonly IMapper _mapper;

        public CursoController(ICursoServices cursoService,
            ICursoRepository cursoRepository, IMapper mapper,
            INotificador notificador) : base(notificador)
        {
            _cursoService = cursoService;
            _cursoRepository = cursoRepository;
            _mapper = mapper;
        }


        // GET: api/Curso
        [HttpGet]
        public async Task<IEnumerable<CursoViewModel>> Get()
        {
            return _mapper.Map<IEnumerable<Curso> ,IEnumerable <CursoViewModel>>(await _cursoRepository.GetAll());
        }

        // GET: api/Curso/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Curso>> Get(int id)
        {
            var curso = await _cursoRepository.GetId(id);

            if (curso == null)
                return NotFound("Curso informado não foi encontrado.");

            return Ok(curso);
        }

        // GET: api/Curso/5
        [HttpGet("curso-matricula-estudante/{estudanteId:int}")]
        public async Task<IEnumerable<CursoViewModel>> BuscarCursoMatricula(int estudanteId)
        {
            var curso = await _cursoRepository.BuscarCursoMatriculaEstudante(estudanteId);
            return _mapper.Map<IEnumerable<Curso>, IEnumerable<CursoViewModel>>(curso);
        }

        // POST: api/Curso
        [HttpPost]
        public async Task<ActionResult<CursoViewModel>> Post(CursoViewModel cursoViewModel)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
    
            await _cursoService.Add(_mapper.Map<Curso>(cursoViewModel));

            return Ok(cursoViewModel);
        }

        // PUT: api/Curso/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, CursoViewModel cursoViewModel)
        {
            if (id != cursoViewModel.Id) return BadRequest("Id informado difere do curso.");

            if (!ModelState.IsValid) return BadRequest(ModelState);

            await _cursoService.Update(_mapper.Map<Curso>(cursoViewModel));
            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var curso = await _cursoRepository.GetId(id);

            if(curso == null)
                return NotFound("Curso informado não foi encontrado.");

            await _cursoService.Remove(curso);

            return NoContent();
        }
    }
}
