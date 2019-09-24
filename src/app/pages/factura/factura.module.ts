import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaRoutingModule } from './factura-routing.module';
import { VentaComponent } from './venta/venta.component';
import { FacturaComponent } from './factura/factura.component';
import { MaterialModule } from 'src/app/shared/modulos/material.module';
//import { MaterialModule } from '../../shared/modulos/material.module';


@NgModule({
  declarations: [VentaComponent, FacturaComponent],
  imports: [
    CommonModule,
    FacturaRoutingModule,MaterialModule
  ]
})
export class FacturaModule { }
