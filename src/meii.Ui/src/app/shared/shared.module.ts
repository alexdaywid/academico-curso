import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BtnCreateComponent } from './components/btn-create/btn-create.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BtnEditComponent } from './components/btn-edit/btn-edit.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';


@NgModule({
  declarations: [
    BtnCreateComponent,
    BreadcrumbComponent,
    BtnEditComponent,
    MenuListComponent,
 ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    BtnCreateComponent,
    BtnEditComponent,
    BreadcrumbComponent,
    MenuListComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
