import { CartaoListComponent } from './cartao-list/cartao-list.component';
import { CartaoFormComponent } from './cartao-form/cartao-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '' , component: CartaoListComponent
  },
  {
    path: 'estudante' , component: CartaoListComponent
  },
  {
    path: 'new' , component: CartaoFormComponent
  },
  {
    path: 'estudante/edit/:id' , component: CartaoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartaoRoutingModule { }
