import { Component, OnInit } from '@angular/core';
import { LoginModel } from './shared/login.module';
import { NgForm } from '@angular/forms';
import { LoginService } from './shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuarioAutentica: LoginModel = {
    usuario: "Orlando",
    clave: "holamundo"
  }
  constructor(private loginService: LoginService,
    private router:Router) { }

  ngOnInit() {
  }
  autenticar(algo: NgForm) {
    //console.log('llego', algo.value);
    //console.log('modelo', this.usuarioAutentica);
    this.loginService.autenticar(this.usuarioAutentica)
      .subscribe(
        (resp) => {
          
          localStorage.setItem("miToken", resp.token)
          this.router.navigate(["/"])
        },
        (err) => {
          console.log("Nose pudo traer los datos",err);

        }
      );


  }

}
