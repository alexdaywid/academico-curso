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
    public class MatriculaController : MainController
    {
        private readonly IMatriculaServices _matriculaService;
        private readonly IMatriculaRepository _matriculaRepository;
        private readonly IMapper _mapper;

        public MatriculaController(IMatriculaServices matriculaService , 
            IMatriculaRepository matriculaRepository, IMapper mapper,
            INotificador notificador): base(notificador)
        {
            _matriculaService = matriculaService;
            _matriculaRepository = matriculaRepository;
            _mapper = mapper;
        }
        // GET: api/matricula
        [HttpGet]
        public async Task<IEnumerable<MatriculaViewModel>> Get()
        {
            return _mapper.Map<IEnumerable<MatriculaViewModel>>(await _matriculaRepository.GetAll());
        }

        // GET: api/matricula/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<MatriculaViewModel>> Get(int id)
        {
            var matricula = await _matriculaRepository.GetId(id);

            if (matricula == null)
                return NotFound("Matricula informado não foi encontrado.");

            return Ok(_mapper.Map<MatriculaViewModel>(matricula));
        }

        // POST: api/matricula
        [HttpPost]
        public async Task<ActionResult<MatriculaViewModel>> Post(MatriculaViewModel matriculaViewModel)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            
            await _matriculaService.Add(_mapper.Map<Matricula>(matriculaViewModel));

            return CustomResponse(matriculaViewModel);
        }

    }
}
