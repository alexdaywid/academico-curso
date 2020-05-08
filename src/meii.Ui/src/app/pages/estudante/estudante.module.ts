import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudanteRoutingModule } from './estudante-routing.module';
import { EstudanteFormComponent } from './estudante-form/estudante-form.component';
import { EstudanteListComponent } from './estudante-list/estudante-list.component';


@NgModule({
  declarations: [
    EstudanteFormComponent,
     EstudanteListComponent
    ],
  imports: [
    CommonModule,
    EstudanteRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class EstudanteModule { }
