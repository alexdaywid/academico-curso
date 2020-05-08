import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../../shared/shared.module';
import { ClienteRoutingModule } from './cliente-routing-module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClienteListComponent,
    ClienteFormComponent,

  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ClienteRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ClienteModule { }
