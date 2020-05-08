import { Cartao } from './../cartao.model';
import { CartaoService } from './../cartao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao-list',
  templateUrl: './cartao-list.component.html',
  styleUrls: ['./cartao-list.component.css']
})
export class CartaoListComponent implements OnInit {

  cartoes: Cartao[] = [];
  cartao: Cartao;
  btnDetailsList = {
    name : 'Novo cartão',
    link: 'cartao/new',
  };
estudanteId: number; 
  constructor(
    private cartaoService: CartaoService,
    private router: Router,
    ) { }

  ngOnInit() {
  this.estudanteId = parseInt(localStorage.getItem('estudanteId'));
   if( this.estudanteId > 0) {
    this.listarCartaoPorEstudante( this.estudanteId);
   }
  }

  private listarCartaoPorEstudante( estudanteId: number) {
    return this.cartaoService.buscarCartaoEstudantePorId(estudanteId)
    .subscribe(cartao =>
     this.cartoes = this.getCartoes(cartao),
      error => alert('Erro ao carregar a lista de cartaos')
    );
  }

  private listarCartao() {
    return this.cartaoService.listarCartao()
    .subscribe(cartao =>
     this.cartoes = this.getCartoes(cartao),
      error => alert('Erro ao carregar a lista de cartaos')
    );
  }

  getCartoes(cartoes: Cartao[]) {
    const lstCartoes: Cartao[] = [];
    cartoes.forEach(c => {
      this.cartao = new Cartao(
        c.id,
        c.titular,
        c.dataVencimento,
        c.numero,
        c.codigoSeguranca,
        c.estudanteId,
      );
      lstCartoes.push(this.cartao);
    });
    return lstCartoes;
  }

  excluirCartao(cartao: Cartao){
    this.cartaoService.excuirCartao(cartao.id)
    .subscribe(res => {
      this.listarCartaoPorEstudante(this.estudanteId);
      alert("Cartao excluido com sucesso.")
    });
  }

  editarCartao(cartao: Cartao){
    alert("função não implementada");
  }

  redirecionar(linkRouter: string , id: number) {
    this.router.navigateByUrl(linkRouter);
  }

}
