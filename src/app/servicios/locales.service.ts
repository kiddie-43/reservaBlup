import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(
    private http: HttpClient
  ) { }


  obtenerLocales() {
    return this.http.get(`${environment.urlServer}/locales/locales.php`).pipe(map((result : any)=>{ return result.data;  }));
  }

  getLocal(id: any) {
    return this.http.get(`${environment.urlServer}/local/getLocal.php?id_local=${id}`).pipe(map((result: any) => {
      return result.datos;
    }));
  }








}
