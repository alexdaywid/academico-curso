import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';


@NgModule({
  declarations: [PedidoListComponent, PedidoFormComponent],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PedidoModule { }
