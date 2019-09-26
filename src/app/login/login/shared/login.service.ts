import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './login.module';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    console.log("se instancio el llogin service");

  }
  autenticar(param: LoginModel):Observable<any> {
    let cabecera = new HttpHeaders();
    cabecera = cabecera.set("Content-Type", "application/json")

    let ruta: string = environment.urlbackend;
    let modelJson: string = JSON.stringify(param)
    return this.http.post(`${ruta}auth`, modelJson, { headers: cabecera })
  }
}
