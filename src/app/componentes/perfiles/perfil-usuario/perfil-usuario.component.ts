import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {
  datos: any;
  userData!: any

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    public form: FormBuilder,
  ) { }

  ngOnInit(): void {
  
    this.userData = this.form.group({
      // nickUser: [(response['data'].nick) ? response['data'].nick : "",],
      // nombreUser: [(response['data'].nombre) ? response['data'].nombre : ""],
      // telefonoUser: [(response['data'].telefono) ? response['data'].telefono : ""],
      // emailUser: [(response['data'].email) ? response['data'].email : ""],
  
      nickUser: [""],
      nombreUser: [""],
      telefonoUser: [""],
      emailUser: [""],
  
  
    });
  
  
  }
  

}
