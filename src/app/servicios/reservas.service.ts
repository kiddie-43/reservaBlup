import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(
    private http : HttpClient
  ) { }


  getReservas( ){
    return this.http.get(`${environment.urlServer}/reservas/getReservasUsuario.php?id_usuario=${localStorage.getItem(environment.userCode)}`).pipe(map((result : any)=>{return result}))
  }


}
