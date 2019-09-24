import { Component, OnInit } from '@angular/core';
import { FacturaModel } from '../shared/factura.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {
  
  facturas: FacturaModel[] = []
  datos:MatTableDataSource<FacturaModel>;
  displayColumns : string[]=["codigo","cliente","monto"];

  constructor() { 
    
  }
  llenarDatos() {
    this.facturas=[
      {codigo:1,cliente:"Juan Perez",monto:3000},
      {codigo:2,cliente:"Orlando yarasca",monto:4000},
      {codigo:3,cliente:"Jozzelyn Blendy Cordova",monto:5000},
      {codigo:4,cliente:"Marleny",monto:66000}
    ]
    this.datos=new MatTableDataSource<FacturaModel>(this.facturas)
  }
  ngOnInit() {
    this.llenarDatos();
  }

}
