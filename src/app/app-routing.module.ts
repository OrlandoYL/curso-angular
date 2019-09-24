import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  /*  {path:"rrhh",loadChildren:"./rrhh/rrhh.module#RrhhModule"},
   {path:"factura",loadChildren:"./factura/factura.module#FacturaModule"} */
  { path: "", loadChildren: "./pages/pages.module#PagesModule" },
  
  { path: "login", loadChildren: "./login/login.module#LoginModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
