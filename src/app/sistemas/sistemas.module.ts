import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasRoutingModule } from './sistemas-routing.module';
import { SistemasComponent } from './paginas/sistemas/sistemas.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SistemasComponent
  ],
  imports: [
    CommonModule,
    SistemasRoutingModule,
    SharedModule
  ]
})
export class SistemasModule { }
