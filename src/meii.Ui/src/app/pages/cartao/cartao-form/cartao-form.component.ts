import { CartaoService } from './../cartao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cartao } from './../cartao.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cartao-form',
  templateUrl: './cartao-form.component.html',
  styleUrls: ['./cartao-form.component.css']
})
export class CartaoFormComponent implements OnInit {
  cartaoform: FormGroup;
  cartao: Cartao = new Cartao();
  btnDetailsForm = {
    name: 'Salvar',
    link: 'cartao/new'
  };
 estudanteId: number;

  constructor(
    private cartaoService: CartaoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.estudanteId = parseInt(localStorage.getItem('estudanteId'));
    this.criarCartaoForm();
    const cartaoId = +this.route.snapshot.paramMap.get('id');
    if (cartaoId > 0) {
      this.buscarCartaoPorId(cartaoId);
    }
  }


  onSubmit($event) {
    if ($event === 'new') {
      this.cartao = this.cartaoform.value;
      this.newCartao(this.cartao);
    } else {
    }
  }


  private criarCartaoForm() {
    this.cartaoform = this.formBuilder.group({
      id: [null],
      titular: [null, [Validators.required]],
      dataVencimento: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      codigoSeguranca: [null],
      estudanteId: [null],
      bandeiraCartao: ['visa'],
    });
  }

  newCartao(cartao: Cartao) {
    cartao.estudanteId = this.estudanteId;
    this.cartaoService.criarCartao(cartao);
  }

  buscarCartaoPorId(cartaoId: number) {
    this.cartaoService.buscarCartaoId(cartaoId)
    .subscribe(cartao => {
      this.popularCartaoForm(cartao);
    });
  }

  public popularCartaoForm(cartao: Cartao) {
    this.cartaoform.patchValue({
      id: cartao.id,
      titular: cartao.titular,
      dataVencimento: cartao.dataVencimento,
      numero: cartao.numero,
      codigoSeguranca: cartao.codigoSeguranca,
      estudanteId: cartao.estudanteId,
      bandeiraCartao: cartao.bandeiraCartao
      });
  }


}
