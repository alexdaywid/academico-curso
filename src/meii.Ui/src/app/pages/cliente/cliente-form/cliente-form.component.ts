import { Pessoa } from './../../model/pessoa.model';
import { Endereco } from './../../model/endereco.model';
import { PessoaFisica } from './../../model/pessoaFisica.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  clienteform: FormGroup;
  cliente: Cliente = new Cliente();
  btnDetailsForm = {
    name: 'Salvar',
    link: 'cliente/new'
  };
  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const clienteId = +this.route.snapshot.paramMap.get("id");
    this.criarClienteForm();
    if (clienteId > 0) {
      this.buscarPorId(clienteId);
    }
  }

  onSubmit($event) {
    if ($event === 'new') {
      this.newCliente();
    } else {
    }
  }

  private criarClienteForm() {
    this.clienteform = this.formBuilder.group({
      clienteId: [null],
      codigo: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      cpf: [null],
      rg: [null],
      cnpj: [null],
      telResidencial: [null],
      endereco: [],
      telCelular: [null],
      dtNascimento: [null],
      nomeFantasia: [null],
      inscMunicipal: [null],
      inscEstadual: [null],
    });
  }

  public popularClienteForm(cliente: Cliente) {
    this.clienteform.patchValue({
        clienteId: cliente.clienteId,
        codigo: cliente.codigo,
        nome: cliente.pessoa.nome,
        email: cliente.pessoa.email,
        cpf: cliente.pessoa.cpf,
        rg: cliente.pessoa.rg,
        cnpj: cliente.pessoa.cnpj,
        telResidencial: cliente.pessoa.telefoneFixo,
        endereco: [],
        telCelular: cliente.pessoa.telefoneCelular,
        dtNascimento: cliente.pessoa.dtNascimento,
        nomeFantasia: cliente.pessoa.nomeFantasia,
        inscMunicipal: cliente.pessoa.inscMunicipal,
        inscEstadual: cliente.pessoa.inscEstadual
      });
  }

  private newCliente() {
    const endereco1: Endereco[] = [];
    const cliente: Cliente = new Cliente();
    cliente.codigo = '1222',
    cliente.pessoa = new Pessoa(
      null,
      this.clienteform.get('nome').value,
      this.clienteform.get('email').value,
      this.clienteform.get('telResidencial').value,
      this.clienteform.get('telCelular').value,
      endereco1,
      this.clienteform.get('cpf').value,
      this.clienteform.get('rg').value,
      this.clienteform.get('cnpj').value,
      this.clienteform.get('dtNascimento').value,
      this.clienteform.get('nomeFantasia').value,
      this.clienteform.get('inscMunicipal').value,
      this.clienteform.get('inscEstadual').value,
    );

    this.criarCliente(cliente, 0);
  }

  public buscarPorId(clienteId: number) {
   return this.clienteService.buscarClienteId(clienteId)
    .subscribe(cliente => {
      this.popularClienteForm(cliente);
    });

  }

  public criarCliente(cliente: Cliente , tipoPessoa: number) {
    if (tipoPessoa === 0) {
      this.clienteService.criarClientePessoaFisica(cliente);
    } else {
      this.clienteService.criarClientePessoaJuridica(cliente);
    }
  }


}



// cliente.pessoa.nome =  this.clienteform.get('nome').value,
//     cliente.pessoa.email =  this.clienteform.get('email').value,
//     cliente.pessoa.telefoneCelular = this.clienteform.get('telCelular').value,
//     cliente.pessoa.telefoneFixo = this.clienteform.get('telResidencial').value,
//     cliente.pessoa.endereco = endereco1,
//     cliente.pessoa.cpf = this.clienteform.get('cpf').value,
//     cliente.pessoa.rg = this.clienteform.get('rg').value,
//     cliente.pessoa.cnpj = this.clienteform.get('cnpj').value,
//     cliente.pessoa.dtNascimento =  this.clienteform.get('dtNascimento').value,
//     cliente.pessoa.nomeFantasia = this.clienteform.get('nomeFantasia').value,
//     cliente.pessoa.inscEstadual = this.clienteform.get('inscEstadual').value,
//     cliente.pessoa.inscMunicipal = this.clienteform.get('inscMunicipal').value,