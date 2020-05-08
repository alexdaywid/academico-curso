import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoListEstudanteComponent } from './curso-list-estudante/curso-list-estudante.component';
import { CursoListEmpresaComponent } from './curso-list-empresa/curso-list-empresa.component';


@NgModule({
  declarations: [
    CursoFormComponent,
    CursoListComponent,
    CursoListEstudanteComponent,
    CursoListEmpresaComponent,
  ],
  imports: [
    CommonModule,
    CursoRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CursoModule { }
