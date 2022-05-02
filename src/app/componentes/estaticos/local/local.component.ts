import { Component, OnInit } from '@angular/core';
import { LocalesService } from 'src/app/servicios/locales.service';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComentarioComponent } from '../comentario/comentario.component';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { ComentariosService } from '../../../servicios/comentarios.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {
  cargando = true;
  local !: any;
  carusel !: Array<string>;
  idLocal !: number;
  constructor(
    private localService: LocalesService,
    private activateRoute: ActivatedRoute,
    private dialog: MatDialog,
    private comentariosService: ComentariosService
  //  public dialogRef : MatDialogRef<any>,

  ) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe((params) => {
      this.idLocal = params['id_local'];
      //this.getLocal(params['id_local']);
      this.getLocal();
      this.getComentarios()
    });
  }


  getLocal() {
    this.localService.getLocal(this.idLocal).subscribe((result: any) => {     
      this.local = result;
      this.cargando = false;
    });
  }

  crearCoemtario() {
    const params = {
      edit: false,
      data: {
        idLocal: this.idLocal
      }
    };

    const dialogRef = this.dialog.open(ComentarioComponent, { data: params, panelClass: "comentario" },);

     dialogRef.afterClosed().subscribe((resp: any) => {
    this.getLocal();

    })

  }

  getComentarios(){
    this.comentariosService.getComentarios(this.idLocal).subscribe((result : any)=>{
      
    })
  }
}

