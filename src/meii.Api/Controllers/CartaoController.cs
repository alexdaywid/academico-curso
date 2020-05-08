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
    public class CartaoController : MainController
    {
        private readonly ICartaoServices _cartaoService;
        private readonly ICartaoRepository _cartaoRepository;
        private readonly IMapper _mapper;

        public CartaoController(ICartaoServices cartaoService,
            ICartaoRepository cartaoRepository, IMapper mapper,
            INotificador notificador): base(notificador)
        {
            _cartaoService = cartaoService;
            _cartaoRepository = cartaoRepository;
            _mapper = mapper;
        }


        // GET: api/Cartao
        [HttpGet]
        public async Task<IEnumerable<CartaoViewModel>> Get()
        {
            return _mapper.Map<IEnumerable<CartaoViewModel>>(await _cartaoRepository.GetAll());
        }

        // GET: api/Cartao/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Cartao>> Get(int id)
        {
            var cartao = await _cartaoRepository.GetId(id);

            if (cartao == null) return NotFound("Cartao informado não foi encontrado.");

            return Ok(cartao);
        }

        // GET: api/Cartao/5
        [HttpGet("estudante/{estudanteId:int}")]
        public async Task<IEnumerable<CartaoViewModel>> BuscarCartaoEstudantePorId(int estudanteId)
        {
            return _mapper.Map<IEnumerable<CartaoViewModel>>
                (await _cartaoRepository.BuscarCartaoEstudantePorId(estudanteId));

        }

        // POST: api/Cartao
        [HttpPost]
        public async Task<ActionResult<CartaoViewModel>> Post(CartaoViewModel cartaoViewModel)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
    
            await _cartaoService.Add(_mapper.Map<Cartao>(cartaoViewModel));

            return CustomResponse(cartaoViewModel);
        }

        // PUT: api/Cartao/5
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, CartaoViewModel cartaoViewModel)
        {
            if (id != cartaoViewModel.Id) NotificarErro("Id informado difere do cartaoId");

            if (!ModelState.IsValid) CustomResponse(ModelState);

            await _cartaoService.Update(_mapper.Map<Cartao>(cartaoViewModel));

            return CustomResponse("Atualizado com sucesso.");
       
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Remove(int id)
        {
            var cartao = await _cartaoRepository.GetId(id);

            if (cartao == null) {
                NotificarErro("Cartão informado não foi encontrado.");
                return CustomResponse();
            } 

            await _cartaoService.Remove(cartao);

            return CustomResponse("Cartão excluído com sucesso.");
        }
    }
}
