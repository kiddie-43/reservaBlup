import { Component, Inject, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComentariosService } from '../../servicios/comentarios.service';
import { TarjetaComentarioComponent } from './tarjeta-comentario/tarjeta-comentario.component';
import { environment } from '../../../environments/environment.prod';
import { ComentariosFormComponent } from '../formularios/comentarios-form/comentarios-form.component';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  // ACTUALIZAR NOMBRE A 1 COMENTARIO O ACTUALIZAR FUNCIONALIDAD A TODOS LOS COMENTARIOS Y SOLO LE PASO EL ID DEL LOCAL 


  //@ViewChild(TarjetaComentarioComponent)child  ;

  @Input() idLocal: number = 0;
  @Input() cambiosComentarios !: boolean;

  comentarios: Array<any> = [];

  constructor(
    private dialog: MatDialog,
    private comentariosService: ComentariosService
  ) {}
  
  recibiRespuesta(value:any){
    this.getComentarios();
  }


  ngOnChanges(changes: SimpleChanges): void {

    this.getComentarios();



  }

  ngOnInit(): void {
    this.getComentarios();
  }


  getComentarios() {
    this.comentariosService.getComentarios(this.idLocal).subscribe((result: any) => {
      this.comentarios = result['comentarios'];
    })
  }
  actualizarComentario(comentario: any) {
    const params = {
      edit: true,
      data: {
        idComentario: comentario.id,
        puntuacion: comentario.valoracion,
        comentario: comentario.comentario
      }
    };

    const dialogRef = this.dialog.open(ComentariosFormComponent, { data: params, panelClass: "comentario" },);
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getComentarios();
    })

  }

  eliminarComentario(id: any) {
    this.comentariosService.deleteComentario(id).subscribe((resp: any) => {
      this.getComentarios();
    })
  }


}
