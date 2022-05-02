import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComentarioComponent } from '../../comentario/comentario.component';
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  @Input() comentario: any = {};
  @Inject(MAT_DIALOG_DATA) public data: any
  constructor(
    private dialog : MatDialog,
    

  ) { }

  ngOnInit(): void {

  }

  eliminarComentario(idComentario: number) {
    return idComentario;
  }


actualizarComentario() {
  const params = {
    edit: true,
    data: "null"
  };

let data = this.dialog.open(ComentarioComponent, {data : params,panelClass:"comentario"},  );
}
}
