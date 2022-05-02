import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComentariosService } from 'src/app/servicios/comentarios.service';
import { environment } from 'src/environments/environment.prod';

MatDialogTitle

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {


  formularioComentario!: FormGroup;


  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private comnetarioServie: ComentariosService,
    public dialogRef: MatDialogRef<ComentarioComponent>,
  ) { }

  ngOnInit(): void {
    this.formularioComentario = this.fb.group({
      comentario: ['', [Validators.required]],
      puntuacion: [0, [Validators.required]]


    })


  }

  crearComentario() {

    const params = {
      descripcion: this.formularioComentario.controls?.['comentario'].value,
      puntuacion: this.formularioComentario.controls?.['puntuacion'].value,
      idUsuario: 34,
      idLocal: this.data.data.idLocal
      // idUsuario: localStorage.getItem(environment.userCode),

    }
    this.comnetarioServie.crearComentario(params).subscribe((resp: any) => {
      if (resp['mensage'].mensageType === 1) {
        this.dialogRef.close(true);
      }
      if (resp['mensage'].mensageType === 3) {
        alert(resp['mensage'].mensageText)
      }

    })

  }

  actualizarComentario(idComentario: number | undefined) {
    const params = {
      descripcion: this.formularioComentario.controls?.['comentario'].value,
      puntuacion: this.formularioComentario.controls?.['puntuacion'].value,
      idComentario: idComentario,

    }


  }

  puntuacion(value: number) {
    return value + " ";
  }

  enviarFormulario() {
    // enviar formulario mas adelanter
    if (!this.data.edit) {
      this.crearComentario();
    } else {
      this.actualizarComentario(this.data.idComentario);
    }



  }



}
