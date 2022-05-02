import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

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
  
  inicioSesion(params: any) {

    // ?email=${params.email}&pass=${params.pass}`
    return this.http.post(`${environment.urlServer}/users/getUserSesion.php`, JSON.stringify(params)).pipe(map((result:any)=>{
      console.log(result);

      return result;
    }));
  }

  registrarse(params: any) {
    return this.http.post(`${environment.urlServer}/users/registrarse.php`, JSON.stringify(params));
  }

  obtenerDatosUser(params: any) {
    return this.http.get(`${environment.urlServer}/users/data.php?id=${params.id}`);
  }




}
