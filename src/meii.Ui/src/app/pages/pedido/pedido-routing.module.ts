import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '' , component: PedidoListComponent
  },
  {
    path: 'cpf-aluno' , component: PedidoListComponent
  },
  {
    path: 'new' , component: PedidoFormComponent
  },
  {
    path: 'new/:cursoId' , component: PedidoFormComponent
  },
  {
    path: 'edit/:id' , component: PedidoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
