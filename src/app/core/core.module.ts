import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './paginas/home/home.component';


@NgModule({
  declarations: [ LoginComponent, HomeComponent,],
  imports: [
    CommonModule,
    CoreRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule
    
  ]
})
export class CoreModule { }
