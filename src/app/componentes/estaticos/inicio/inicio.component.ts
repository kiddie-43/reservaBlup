import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { UsuarioService } from '../../../servicios/usuario.service';
import { environment } from '../../../../environments/environment.prod';
import { Md5 } from 'ts-md5';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  // hide password
  hide = true;

  // Errores al iniciar sesion
  errorText !: String;
  error = false;

  // formulario inicio de sesion
  inicioSesionUsuarioForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsuarioService,
    private router: Router

  ) { }

  ngOnInit(): void {

this.crearFormulario();

  }

  crearFormulario() {
    this.inicioSesionUsuarioForm = this.fb.group({
      emailUser: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      passUser: ['', Validators.required],
    });
  }


  inicioSesion() {
    let params = {
      email: this.inicioSesionUsuarioForm.get('emailUser')?.value,
      pass: Md5.hashStr(this.inicioSesionUsuarioForm.get('passUser')?.value + 'blup'),
    };

    // mandar parametros al server con funcion md5

    this.userService.inicioSesion(params).subscribe((resp : any) => {
   
      if (resp.mensage.mensageType === 3 ) {
        this.errorText = resp.mensage.mensageText;

        this.error = true;
      } else {
        // this.userService.inicio = true;
        localStorage.setItem(environment.userCode, resp.data.id_usuario);
        
        this.userService.registado = true;

        this.router.navigate(['/home']);

      }

    });
  }

  hidePass() {
    return (this.hide = !this.hide);
  }


}
