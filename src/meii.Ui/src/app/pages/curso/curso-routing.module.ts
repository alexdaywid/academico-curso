import { CursoListEmpresaComponent } from './curso-list-empresa/curso-list-empresa.component';
import { CursoListEstudanteComponent } from './curso-list-estudante/curso-list-estudante.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '' , component: CursoListComponent
  },
  {
    path: 'estudante' , component: CursoListEstudanteComponent
  },
  {
    path: 'new' , component: CursoFormComponent
  },
  {
    path: 'edit/:id' , component: CursoFormComponent
  },
  {
    path: 'empresa' , component: CursoListEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
