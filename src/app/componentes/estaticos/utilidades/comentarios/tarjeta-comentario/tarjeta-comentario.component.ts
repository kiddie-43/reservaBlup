import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ComentarioComponent } from '../../../comentario/comentario.component';

@Component({
  selector: 'app-tarjeta-comentario',
  templateUrl: './tarjeta-comentario.component.html',
  styleUrls: ['./tarjeta-comentario.component.scss']
})
export class TarjetaComentarioComponent implements OnInit {
@Input() comentario : any ;

updateData:boolean = false ;

//@Output('miEvento') actualiza : EventEmitter = new EventEmitter(); 
constructor(
   private dialog: MatDialog,
  
) { }


  ngOnInit(): void {
  }


  actualizarComentario() {
    const params = {
      edit: true,
      data: {
        idComentario: this.comentario.id,
        puntuacion: this.comentario.valoracion,
        comentario: this.comentario.comentario
      }
    };

    const dialogRef = this.dialog.open(ComentarioComponent, { data: params, panelClass: "comentario" },);
    dialogRef.afterClosed().subscribe((result: any) => {

    })

  }

  eliminarComentario(idComentario: number) {
    this.updateDataPadre();
    return idComentario;
  }



updateDataPadre(){
 // this.actualiza.emit("true");
}

}
