import { Pagamento, TipoPagamento } from './../../model/pagamento.model';
import { catchError } from 'rxjs/operators';
import { Cartao } from './../../cartao/cartao.model';
import { CartaoService } from './../../cartao/cartao.service';
import { CursoService } from './../../curso/curso.service';
import { Curso, Nivel } from './../../curso/curso.model';
import { PedidoService } from './../pedido.service';
import { Pedido } from './../pedido-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {
  pedidoform: FormGroup;
  pedido: Pedido = new Pedido();
  curso: Curso = new Curso();
  cartao: Cartao = new Cartao();
  cartoes: Cartao[] = [];
  pagamento: Pagamento[] = [];
  cursos: Curso[] = [];
  cursoId: number;
  studanteId: number;
  btnDetailsForm = {
    name: 'Salvar',
    link: 'pedido/new'
  };
 

  constructor(
    private pedidoService: PedidoService,
    private cursoService: CursoService,
    private cartaoService: CartaoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.studanteId = parseInt(localStorage.getItem('estudanteId'));
    this.buscarCartoEstudante(this.studanteId);

    this.criarPedidoForm();
    this.cursoId = +this.route.snapshot.paramMap.get('cursoId');
    if (this.cursoId > 0) {
      this.buscarCurso(this.cursoId);
    }

    const pedidoId = +this.route.snapshot.paramMap.get('id');
    if (pedidoId > 0) {
      this.buscarPedidoPorId(pedidoId);
    }
 
  }


  onSubmit($event) {
    if ($event === 'new') {
      this.newPedido();
    } else {
    }
  }

  public criarPedidoForm() {
    this.pedidoform = this.formBuilder.group({
      codigo: [this.gerarNumeroPedido(), [Validators.required]],
      dataGeracao: [ null, [Validators.required]],
      ativo: [null],
      valor: [null],
      curso: [null],
      pagamento: [null],
      numeroParcela: [null],
      valorParcela: [null],
      cartaoCredito: [null],
    });
  }

  newPedido() {
    let novopedido = new Pedido(
      null,
      this.pedidoform.get('codigo').value,
      null, true, this.studanteId,
      this.pedidoform.get('valor').value,
      this.cursos = [
        new Curso(
        this.cursoId, null, null, null,
        true, null, null,
        Nivel.basico,
        )
      ],
      this.pagamento = [
        new Pagamento(
          null, null, null, TipoPagamento.cartaocredito,
          this.pedidoform.get('numeroParcela').value,
          false, this.pedidoform.get('valorParcela').value,
          this.pedidoform.get('cartaoCredito').value, null,
        )
      ],
    );
    this.pedidoService.criarPedido(novopedido);
  }

  buscarPedidoPorId(pedidoId: number) {
    this.pedidoService.buscarPedidoId(pedidoId)
    .subscribe(pedido => {
      this.popularPedidoForm(pedido);
    });
  }

  public popularPedidoForm(pedido: Pedido) {
    this.pedidoform.patchValue({
      codigo: pedido.codigo,
      dataGeracao: pedido.dataGeracao,
      ativo: pedido.status,
      valor: pedido.curso[0].valor,
      curso: pedido.curso[0].valor,
      numeroParcela: pedido.numeroParcela,
      valorParcela: pedido.valorParcela,
      cartaoCredito: pedido.cartaoCredito,
      });
  }

  public buscarCurso(Id: number) {
    this.cursoService.buscarCursoId(this.cursoId)
    .subscribe(curso => {
      this.cursos.push(curso);

      this.pedido.curso = this.cursos;
      this.pedido.numeroParcela = 1;
      this.pedido.valorParcela = this.pedido.curso[0].valor;
      this.popularPedidoForm(this.pedido);
    });
  }

  public buscarCartoEstudante(Id: number) {
    this.cartaoService.buscarCartaoEstudantePorId(this.studanteId)
    .subscribe(res =>  {
      this.cartoes = res;
    }, erro => {
      alert(erro.catchError);
    });
  }

  gerarNumeroPedido() {
    return Math.random();
  }


  calcularParcela(){
    let numeroParcela = this.pedidoform.get('numeroParcela').value;
    let valorPedido = this.pedidoform.get('valor').value;
    let valorAtualParcela = valorPedido / numeroParcela;
    this.pedidoform.patchValue({valorParcela: valorAtualParcela});
  }

}
