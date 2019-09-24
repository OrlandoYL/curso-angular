import { Component, OnInit } from '@angular/core';
import { LoginModel } from './shared/login.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuarioAutentica:LoginModel={
    usuario:"Orlando",
    clave:"holamundo"
  }
  constructor() { }

  ngOnInit() {
  }
  autenticar(algo:NgForm){
    console.log('llego', algo.value);
    console.log('modelo',this.usuarioAutentica);
    
    
  }

}
