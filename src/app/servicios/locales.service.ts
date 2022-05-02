import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {
  url = 'http://dws.local/api';
  constructor(
    private http: HttpClient
  ) { }
  
  
  obtenerLocales() {
    return this.http.get(`${environment.urlServer}/locales/locales.php`);
  }

  getLocal(id: any) {
   return this.http.get(`${environment.urlServer}/locales/local.php?id_local=` + id).pipe(map((result:any)=>{
     return result.datos;
   }));
  }
}
