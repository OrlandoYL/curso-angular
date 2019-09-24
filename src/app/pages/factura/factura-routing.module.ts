import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturaComponent } from './factura/factura.component';
import { VentaComponent } from './venta/venta.component';


const routes: Routes = [
  {path:"factura",component:FacturaComponent},
  
  {path:"venta",component:VentaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaRoutingModule { }
