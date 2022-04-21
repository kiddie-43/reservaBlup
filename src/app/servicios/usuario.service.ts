import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public registado =false;

  constructor(
    private http : HttpClient
  ) { }

  getRegistrado() {
    return this.registado;
  }
  
  inicioSesion(datos: any) {

    return this.http.get(`${environment.urlServer}/users/login.php?email=${datos.email}&pass=${datos.pass}`);
  }

  registrarse(datos: any) {
    return this.http.post(`${environment.urlServer}/users/registrarse.php`, JSON.stringify(datos));
  }
  obtenerDatosUser(params: any) {
    return this.http.get(`${environment.urlServer}/users/data.php?id=${params.id}`);

  }




}
