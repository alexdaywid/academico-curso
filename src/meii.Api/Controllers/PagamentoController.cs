using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Runtime.InteropServices.WindowsRuntime;
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
    public class PagamentoController : MainController
    {
        private readonly IPagamentoServices _pagamentoService;
        private readonly IPagamentoRepository _pagamentoRepository;
        private readonly IMapper _mapper;

        public PagamentoController(IPagamentoServices pagamentoService , 
            IPagamentoRepository pagamentoRepository, IMapper mapper,
            INotificador notificador) : base(notificador)
        {
            _pagamentoService = pagamentoService;
            _pagamentoRepository = pagamentoRepository;
            _mapper = mapper;
        }
        // GET: api/pagamento
        [HttpGet]
        public async Task<IEnumerable<PagamentoViewModel>> Get()
        {
            var pedido = await _pagamentoRepository.GetAll();
            return _mapper.Map<IEnumerable<PagamentoViewModel>>(await _pagamentoRepository.GetAll());
        }

        // GET: api/pagamento/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<PagamentoViewModel>> Get(int id)
        {
            var pagamento = await _pagamentoRepository.GetId(id);

            if (pagamento == null)
                return NotFound("Pagamento informado não foi encontrado.");

            return Ok(_mapper.Map<PagamentoViewModel>(pagamento));
        }

        // POST: api/pagamento
        [HttpPost]
        public async Task<ActionResult<PagamentoViewModel>> Post(PagamentoViewModel pagamentoViewModel)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            
            await _pagamentoService.Add(_mapper.Map<PagamentoViewModel, Pagamento>(pagamentoViewModel));

            return Ok(pagamentoViewModel);
        }

        // PUT: api/pagamento/5
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, PagamentoViewModel pagamentoViewModel)
        {
            if (id != pagamentoViewModel.Id) return BadRequest("Id informado difere do pagamento.");

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var pagamento = await _pagamentoRepository.GetId(id);

            if (pagamento == null) return NotFound("Pagamento não encontrado.");

            pagamento.DataPagamento = DateTime.Now;
            pagamento.Pago = pagamentoViewModel.Pago;


            await _pagamentoService.Update(pagamento);
            return NoContent();
        }

        // PUT: api/pagamento/5
        [HttpPut("efetuar-pagamento/{id:int}")]
        public async Task<ActionResult> EfetuarPagamento(int id, PagamentoViewModel pagamentoViewModel)
        {
            var pagamento = await _pagamentoRepository.GetId(id);
            
            if (pagamento == null) return NotFound("Pagamento informado não foi encontrado.");

            pagamento.Pago = pagamentoViewModel.Pago;
            pagamento.DataPagamento = pagamentoViewModel.DataPagamento;
      
            await _pagamentoService.EfetuarPagamento(pagamento);
            
            return NoContent();
        }

        // POST: api/pedido
        [HttpGet("email-confirmacao-pagamento/{id:int}")]
        public async Task<ActionResult<PagamentoViewModel>> EnviarEmailCorfimacaoPagamentoParcela(int id)
        {

            var pagamentoEstutante = await _pagamentoRepository.GetId(id);

            if (pagamentoEstutante == null) return NotFound();

            //Classe de Servico envia o email ao cliente
            // await _pagamentoService.EnviarEmailCorfimacaoPagamentoParcela(pagamentoEstutante)

            return Ok("Email enviado com sucesso");
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<PagamentoViewModel>> Delete(int id)
        {
            var pagamento = await _pagamentoRepository.GetId(id);
            if(pagamento == null)
                return NotFound("Pagamento informado não foi encontrado.");

            await _pagamentoService.Remove(pagamento);

            return NoContent();
        }
    }
}
