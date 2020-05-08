import { MatriculaModule } from './pages/matricula/matricula.module';
import { PagamentoModule } from './pages/pagamento/pagamento.module';
import { EmpresaModule } from './pages/empresa/empresa.module';
import { PedidoModule } from './pages/pedido/pedido.module';
import { CursoModule } from './pages/curso/curso.module';
import { CartaoModule } from './pages/cartao/cartao.module';
import { EstudanteModule } from './pages/estudante/estudante.module';
import { SharedModule } from './shared/shared.module';
import { ClienteModule } from './pages/cliente/cliente.module';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavbarComponent } from './shared/layout/menu-navbar/menu-navbar.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {PanelMenuModule} from 'primeng/panelmenu';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';



@NgModule({
  declarations: [
    AppComponent,
    MenuNavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AccordionModule,
    TieredMenuModule,
    SlideMenuModule,
    PanelMenuModule,
    ClienteModule,
    DashboardModule,
    HttpClientModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    EstudanteModule,
    CartaoModule,
    CursoModule,
    PedidoModule,
    EmpresaModule,
    SharedModule,
    PagamentoModule,
    MatriculaModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
