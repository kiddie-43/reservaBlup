import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor ( 
    private http : HttpClient
  ) { }

obtenerComentarios (){

}

crearComentario(params : any){
  console.log(params)
return this.http.post(`${environment.urlServer}/comentarios/crearComentario.php`,JSON.stringify(params))
}


eliminarComentario (idComentario : number){

}

actualizarComentario (){

}

}
