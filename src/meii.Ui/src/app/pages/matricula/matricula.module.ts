import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculaRoutingModule } from './matricula-routing.module';
import { MatriculaListComponent } from './matricula-list/matricula-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MatriculaListComponent],
  imports: [
    CommonModule,
    MatriculaRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MatriculaModule { }
