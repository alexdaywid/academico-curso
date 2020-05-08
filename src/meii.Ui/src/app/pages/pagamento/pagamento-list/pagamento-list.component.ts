import { Pedido } from './../../pedido/pedido-model';
import { Matricula } from './../../matricula/matricula,model';
import { PedidoService } from './../../pedido/pedido.service';
import { MatriculaService } from './../../matricula/matricula.service';
import { PagamentoService } from './../pagamento.service';
import { Pagamento } from './../../model/pagamento.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-list',
  templateUrl: './pagamento-list.component.html',
  styleUrls: ['./pagamento-list.component.css']
})
export class PagamentoListComponent implements OnInit {
  pagamentos: Pagamento[] = [];
  pagamento: Pagamento;
  btnDetailsList = {
    name : 'Novo pagamento',
    link: 'pagamento/new',
  };

  disabilitarBotao = true;

  constructor(
    private pagamentoService: PagamentoService,
    private matriculaService: MatriculaService,
    private pedidoServices: PedidoService,
    private router: Router,
    ) { }

  ngOnInit() {
   this.listarPagamento();
  }

  private listarPagamento() {
    return this.pagamentoService.listarPagamento()
    .subscribe(pagamento =>
     this.pagamentos = this.getPagamentos(pagamento),
    );
  }

  getPagamentos(pagamentos: Pagamento[]) {
    const lstPagamentos: Pagamento[] = [];
    pagamentos.forEach(e => {
      this.pagamento = new Pagamento(
        e.id,
        e.dataVencimento,
        e.dataPagamento,
        e.tipoPagamento,
        e.totalParcelas,
        e.pago,
        e.valorParcela,
        e.pedidoId,
      );
      lstPagamentos.push(this.pagamento);
    });
    return lstPagamentos;
  }

  PagarParcela(pag: Pagamento) {
   if(!pag.pago) {
    pag.pago = true;
    this.pagamentoService.editarPagamento(this.pagamento)
    .subscribe(pagamento => {
      this.RealizarMatricula(this.pagamento);
        this.listarPagamento();
        alert("Email foi enviado para o cliente informa ativacao");
    });
   }else{
    alert("Este pagamento esta em dia.");
   }
 }

 RealizarMatricula(pagamentoMatricula: Pagamento) {
    this.pedidoServices.buscarPedidoId(pagamentoMatricula.id)
    .subscribe(res =>{
      const pedido: Pedido = res;
      const matricula = new Matricula(
        pedido.estudanteId, pedido.curso[0].id, null, null, true
      );
      this.matriculaService.criarMatricula(matricula);
    });
 }
}
