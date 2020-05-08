import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';


const routes: Routes = [
  {
    path: '' , component: ClienteListComponent
  },
  {
    path: 'new' , component: ClienteFormComponent
  },
  {
    path: 'edit/:id' , component: ClienteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }