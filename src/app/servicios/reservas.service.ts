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


  getReservas( params : any ){
    return this.http.post(`${environment.urlServer}/reservas/getReservas.php`, JSON.stringify(params)).pipe(map((result : any)=>{return result}))
  }


}
