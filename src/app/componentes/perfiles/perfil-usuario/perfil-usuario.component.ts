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


    this.getDataUsuario();


  }

  getDataUsuario() {

    this.usuarioService.getUserData().subscribe((result: any) => {
      this.userData = result.data;
      this.createForm();
    })
  }


  createForm() {

    this.userData = this.form.group({
      nickUser: [(this.userData.nombre_usuario) ? this.userData.nombre_usuario : "",],
      nombreUser: [(this.userData.nombre_usuario) ? this.userData.nombre_usuario : ""],
      telefonoUser: [(this.userData.telefono_user) ? this.userData.telefono_user : ""],
      emailUser: [(this.userData.email_user) ? this.userData.email_user : ""],



    });

  }

}
