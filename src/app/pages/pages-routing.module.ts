import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {path:"",component:PagesComponent,children:[
    { path: "rrhh", loadChildren: "./rrhh/rrhh.module#RrhhModule" },
    { path: "factura", loadChildren: "./factura/factura.module#FacturaModule" }
  ]}
 
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
