import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasComponent } from './paginas/despesas/despesas.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DespesasComponent
  ],
  imports: [
    CommonModule,
    DespesasRoutingModule,
    SharedModule
  ]
})
export class DespesasModule { }
