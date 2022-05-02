import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mensage',
  templateUrl: './mensage.component.html',
  styleUrls: ['./mensage.component.scss']
})
export class MensageComponent implements OnInit {

  mensageText :string = "Se ha producido un error";
  estiloMensaje :string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MensageComponent>,
  ) { }

  ngOnInit(): void {
    //this.mensageText = this.data.data.mensajeText;
  
  }


  cerrarMensaje() {

    this.dialogRef.close(true);
  }

  tipoMensaje(){
    
    // info 
    
    // alert 
    // warning 
    // correct




  }


}
