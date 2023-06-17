import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/Login', pathMatch: 'full'},
{
  path: 'Login', 
component: LoginComponent
},
{
  path: 'Home', 
  component: HomeComponent
},
{
  path: "despesas",
  loadChildren: () => import('../despesas/despesas.module').then(x => x.DespesasModule)
},
{
  path: "sistemas",
  loadChildren: () => import('../sistemas/sistemas.module').then(x => x.SistemasModule)
},
{
  path: 'categorias',
  loadChildren: () => import('../categorias/categorias.module').then(x => x.CategoriasModule)
}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class CoreRoutingModule { }
