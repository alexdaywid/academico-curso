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
    public class PedidoController : MainController
    {
        private readonly IPedidoServices _pedidoService;
        private readonly IPedidoRepository _pedidoRepository;
        private readonly IMapper _mapper;

        public PedidoController(IPedidoServices pedidoService,
            IPedidoRepository pedidoRepository, IMapper mapper,
            INotificador notificador) : base(notificador)
        {
            _pedidoService = pedidoService;
            _pedidoRepository = pedidoRepository;
            _mapper = mapper;
        }
        // GET: api/pedido
        [HttpGet]
        public async Task<IEnumerable<PedidoViewModel>> Get()
        {
            var pedido = await _pedidoRepository.GetAll();
            return _mapper.Map<IEnumerable<Pedido>, IEnumerable<PedidoViewModel>>(pedido);
        }

        // GET: api/pedido/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<PedidoViewModel>> Get(int id)
        {
            var pedido = await _pedidoRepository.BuscarPedidoPagamentoCursoPorId(id);

            if (pedido == null)
                return NotFound("Pedido informado não foi encontrado.");

            return Ok(_mapper.Map<PedidoViewModel>(pedido));
        }

        // POST: api/pedido
        [HttpPost]
        public async Task<ActionResult<PedidoViewModel>> Post(PedidoViewModel pedidoViewModel)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);


            await _pedidoService.Add(_mapper.Map<PedidoViewModel, Pedido>(pedidoViewModel));

            return Ok(pedidoViewModel);
        }

        // PUT: api/pedido/5
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, PedidoViewModel pedidoViewModel)
        {
            if (id != pedidoViewModel.Id) return BadRequest("Id informado difere do pedido.");

            if (!ModelState.IsValid) return BadRequest(ModelState);

            await _pedidoService.Update(_mapper.Map<Pedido>(pedidoViewModel));
            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<PedidoViewModel>> Delete(int id)
        {
            var pedido = await _pedidoRepository.GetId(id);
            if(pedido == null)
                return NotFound("Pedido informado não foi encontrado.");

            await _pedidoService.Remove(pedido);

            return NoContent();
        }
    }
}
