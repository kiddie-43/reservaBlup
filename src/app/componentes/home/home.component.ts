import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // registrado = false;


  constructor(
  public  usuarioService : UsuarioService
  ) {
usuarioService.estaRegistrado();

   }

  ngOnInit(): void {



  }

logout(){
  this.usuarioService.registado = !this.usuarioService.registado;
}

}
