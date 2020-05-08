import { Router } from '@angular/router';
import { Endereco } from './../../model/endereco.model';
import { PessoaJuridica } from './../../model/pessoaJuridica.model';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from '../../model/pessoaFisica.model';
import { Pessoa } from '../../model/pessoa.model';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente: Cliente;
  btnDetailsList = {
    name : 'Novo cliente',
    link: 'cliente/new',
  };


  constructor(
    private clienteService: ClienteService,
    private router: Router,
    ) { }

  ngOnInit() {
   this.listarCliente();
  }

  private listarCliente() {
    return this.clienteService.listarCliente()
    .subscribe(cliente =>
     this.clientes = this.getClientes(cliente),
      error => alert('Erro ao carregar a lista de clientes')
    );
  }

  getClientes(clientes: Cliente[]) {
    const lstClientes: Cliente[] = [];
    clientes.forEach(c => {
      this.cliente = new Cliente(
        c.clienteId,
        c.codigo,
        c.pessoa,
      );
      lstClientes.push(this.cliente);
    });
    return lstClientes;
  }

  redirecionar(linkRouter: string , id: number) {
    this.router.navigateByUrl(linkRouter);
  }

}


