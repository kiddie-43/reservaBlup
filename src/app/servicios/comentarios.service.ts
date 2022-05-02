import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(
    private http: HttpClient
  ) { }

  getComentarios(id_local: number) {
    return this.http.get(`${environment.urlServer}/comentarios/getComentarios.php?id_local=${id_local}`)
  }

  createComentario(params: any) {

    return this.http.post(`${environment.urlServer}/comentarios/createComentario.php`, JSON.stringify(params))
  }


  deleteComentario(idComentario: number) {
    this.http.delete(`${environment.urlServer}/comentarios/deleteComentario.php?id_comentario=${idComentario}`)
  }

  updateComentario(params : any) {
  this.http.put(`${environment.urlServer}/comentarios/updateCoemntario.php`, JSON.stringify(params));
  }

}
