import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaoRoutingModule } from './cartao-routing.module';
import { CartaoListComponent } from './cartao-list/cartao-list.component';
import { CartaoFormComponent } from './cartao-form/cartao-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CartaoListComponent,
    CartaoFormComponent],
  imports: [
    CommonModule,
    CartaoRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CartaoModule { }
