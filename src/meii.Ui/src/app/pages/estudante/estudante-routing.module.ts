import { EstudanteFormComponent } from './estudante-form/estudante-form.component';
import { EstudanteListComponent } from './estudante-list/estudante-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '' , component: EstudanteListComponent
  },
  {
    path: 'new' , component: EstudanteFormComponent
  },
  {
    path: 'edit/:id' , component: EstudanteFormComponent
  },
  {
    path: 'cpf/:numero' , component: EstudanteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudanteRoutingModule { }
