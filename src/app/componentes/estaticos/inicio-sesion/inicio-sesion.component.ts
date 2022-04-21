import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent  {
// hide password
hide = true;

// Errores al iniciar sesion
errorText !: String;
error = false;

// formulario inicio de sesion
forma!: FormGroup;
constructor(
  private fb: FormBuilder,
  private userService: UsuarioService,
  private router: Router
) {
  this.crearFormulario();
}

hidePass() {
  return (this.hide = !this.hide);
}

crearFormulario() {
  this.forma = this.fb.group({
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

add() { }


inicioSesion() {
  let params = {
    email: this.forma.get('emailUser')?.value,
    pass: Md5.hashStr(this.forma.get('passUser')?.value + 'blup'),
  };

  

  this.userService.inicioSesion(params).subscribe((datos) => {

    let respuesta: any = datos;
    console.log(datos);

  
    if (respuesta['error'].length > 0) {
      this.errorText = respuesta['error'];

      this.error = true;

    } else {

      this.userService.registado = true;
      localStorage.setItem('user_blup_proyect', respuesta['id_user']);
      this.router.navigate(['/locales']);

    }

  });
}


}


