import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/Login', pathMatch: 'full'},
{path: 'Login', component: LoginComponent},
{path: 'Home', component: HomeComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class CoreRoutingModule { }
