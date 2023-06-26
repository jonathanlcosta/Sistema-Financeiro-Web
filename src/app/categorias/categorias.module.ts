import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule { }
