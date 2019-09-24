import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RrhhRoutingModule } from './rrhh-routing.module';
import { PlanillaComponent } from './planilla/planilla.component';


@NgModule({
  declarations: [PlanillaComponent],
  imports: [
    CommonModule,
    RrhhRoutingModule
  ]
})
export class RrhhModule { }
