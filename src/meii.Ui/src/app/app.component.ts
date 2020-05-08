import { ItensDetails } from './shared/model/itensDetails';
import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meii';
  ambiente: string;
  itensMenu: ItensDetails[];
  id: string;
  label: string;
  linkUserAtual: string = '/estudante/cpf/88888888';  // Alterar o numero cpf;
  constructor() {
    this.itensMenu = this.getItensMenuTipo('dashboard');
   }

  ngOnInit() {
  }

  OnClick(tipo: string) {
    switch (tipo) {
      case 'dashboard':
        this.id = 'nav-dashboard';
        this.label = 'nav-dashboard-tab';
        break;
      case 'vendas':
        this.id = 'nav-vendas';
        this.label = 'nav-vendas-tab';
        break;
      case 'estudante':
        this.id = 'nav-estudante';
        this.label = 'nav-estudante-tab';
        break;
      case 'cartao':
        this.id = 'nav-cartao';
        this.label = 'nav-cartao-tab';
        break;
        case 'curso':
          this.id = 'nav-curso';
          this.label = 'nav-curso-tab';
          break;
      default:
        this.id = 'nav-dashboard';
        this.label = 'nav-dashboard-tab';
        break;
    }
    this.itensMenu = this.getItensMenuTipo(tipo);
  }

  // Retorna o itens da lista por tipo.
  getItensMenuTipo(tipo: string): ItensDetails[] {
    return this.getAllItensMenu().filter(itens => itens.tipo === tipo);
  }

  // Retorna lista itens do menu.
  getAllItensMenu(): ItensDetails[] {
    return this.itensMenu = [
      { link: '/vendas', icon: 'fas fa-tags', nome: 'Vendas', tipo: 'vendas'},
      { link: this.linkUserAtual, icon: 'fas fa-tags', nome: 'Perfil', tipo: 'estudante'},
      { link: '/cartao/estudante', icon: 'fas fa-tags', nome: 'Cartão de Crédito', tipo: 'estudante'},
      { link: '/curso', icon: 'fas fa-user', nome: 'Comprar Curso', tipo: 'estudante'},
      { link: '/curso/estudante', icon: 'fas fa-user', nome: 'Meus Cursos', tipo: 'estudante'},
      // { link: '/pedido/cpf-aluno', icon: 'fas fa-user', nome: 'Meus Pedidos', tipo: 'estudante'},
       { link: '/estudante', icon: 'fas fa-box-open', nome: 'Aluno', tipo: 'empresa'},
       { link: '/curso/empresa', icon: 'fas fa-tools', nome: 'Curso', tipo: 'empresa'},
      // { link: '/pedido', icon: 'fas fa-tools', nome: 'Pedido', tipo: 'empresa'},
      { link: '/pagamento', icon: 'fas fa-tools', nome: 'Pagamento', tipo: 'empresa'},
      // { link: '/matricula', icon: 'fas fa-tools', nome: 'Matricula', tipo: 'empresa'},
    ];
  }

}
