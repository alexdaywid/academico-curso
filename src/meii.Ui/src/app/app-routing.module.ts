import { MatriculaModule } from './pages/matricula/matricula.module';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'cliente', loadChildren: () => import('./pages/cliente/cliente.module')
    .then(a => a.ClienteModule),
  },
  {
    path: 'estudante', loadChildren: () => import('./pages/estudante/estudante.module')
    .then(a => a.EstudanteModule),
  },
  {
    path: 'curso', loadChildren: () => import('./pages/curso/curso.module')
    .then(a => a.CursoModule),
  },
  {
    path: 'cartao', loadChildren: () => import('./pages/cartao/cartao.module')
    .then(a => a.CartaoModule),
  },
  {
    path: 'pedido', loadChildren: () => import('./pages/pedido/pedido.module')
    .then(a => a.PedidoModule),
  },
  {
    path: 'empresa', loadChildren: () => import('./pages/empresa/empresa.module')
    .then(a => a.EmpresaModule),
  },
  {
    path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module')
    .then(a => a.DashboardModule),
  },
  {
    path: 'pagamento', loadChildren: () => import('./pages/pagamento/pagamento.module')
    .then(a => a.PagamentoModule),
  },
  {
    path: 'matricula', loadChildren: () => import('./pages/matricula/matricula.module')
    .then(a => a.MatriculaModule),
  },
];

@NgModule({
  imports:
  [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
