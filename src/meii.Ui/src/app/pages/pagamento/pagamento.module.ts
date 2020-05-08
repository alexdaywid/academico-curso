import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoListComponent } from './pagamento-list/pagamento-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PagamentoListComponent],
  imports: [
    CommonModule,
    PagamentoRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PagamentoModule { }
