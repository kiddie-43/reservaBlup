import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservasService } from '../../../../servicios/reservas.service';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { AmazingTimePickerService, AmazingTimePickerModule } from 'amazing-time-picker';
import { NgxMaterialTimepickerService } from 'ngx-material-timepicker/src/app/material-timepicker/services/ngx-material-timepicker.service';
AmazingTimePickerService



ReactiveFormsModule
Validators
MatDatepicker
MatDatepickerModule
MatNativeDateModule
@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss']
})
export class ReservaFormComponent implements OnInit {
  recogedor = true;
  desabilitado = "false";
  dataReserva !: any;
  createReservaForm !: any;
  zonaLocal: Array<any> = [];
  posicionConfirmarReserba : number = 1;
  
  darkTheme: NgxMaterialTimepickerModule = {
    container: {
      bodyBackgroundColor: '#424242',
      buttonColor: '#fff'
    },
    dial: {
      dialBackgroundColor: '#555',
    },
    clockFace: {
      clockFaceBackgroundColor: '#555',
      clockHandColor: '#9fbd90',
      clockFaceTimeInactiveColor: '#fff'
    }
  };

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reservaService: ReservasService,
    public dialogRef: MatDialogRef<ReservaFormComponent>,
  private atp : AmazingTimePickerService
    ) {
    this.getReservaInfo();
    this.createForm();
  }

  ngOnInit(): void {
  }
open(){
  const AmazingTimePicker = this.atp.open();
  AmazingTimePicker.afterClose().subscribe(time =>{
    console.log(time)
  })
}

  getReservaInfo() {
    const params = {
      idLocal: this.data.data.idLocal ? this.data.data.idLocal : -1
    }

    this.reservaService.getDataCreateReserva(params).subscribe((result: any) => {

      if (result.mensage.mensageType === 1) {

        this.dataReserva = result['data'];
        this.zonaLocal = this.dataReserva.local.zonas;

        this.actualizarForm();
      }


    });
    /*
      -> usuario data ( nombre usuario, telefono, email  )
      -> local (nombre, direccion, zonas )
      ->
    */


  }
  actualizarForm() {
    this.createReservaForm.controls?.['nombreUsuario'].setValue(this.dataReserva.usuario.nombre);
    this.createReservaForm.controls?.['apellidosUsuario'].setValue(this.dataReserva.usuario.apellidos);
    this.createReservaForm.controls?.['telefonoUsuario'].setValue(this.dataReserva.usuario.telefono);
    this.createReservaForm.controls?.['email'].setValue(this.dataReserva.usuario.email_user);
    this.createReservaForm.controls?.['nombreLocal'].setValue(this.dataReserva.local.nombre);
    this.createReservaForm.controls?.['direccion'].setValue(this.dataReserva.local.direccion);

  }

  createForm() {

    this.createReservaForm = this.fb.group({
      nombreUsuario: ['', [Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,48}"), Validators.required]],
      apellidosUsuario: ['', [Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,48}"), Validators.required]],
      telefonoUsuario: ['', [Validators.pattern("[0-9]{9}"), Validators.required]],
      email: ['', [Validators.pattern("[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"), Validators.required]],
      nombreLocal: [''],
      direccion: [''],
      numPersonas: [1, [Validators.pattern("[0-9]{0,2}"), Validators.required]],
      fechaHora: [''],
      zonaLocal: ['', [ Validators.required]],
      comentario: ['']
    })

  }

  sumarPersona() {

    let index = isNaN( this.createReservaForm.controls.numPersonas.value) ? this.createReservaForm.controls.numPersonas.value+1 : 0;
    
    this.createReservaForm.controls.numPersonas.setValue(0);
    this.createReservaForm.controls.numPersonas.setValue(index);

  }
  restarPersona() {

    let index = this.createReservaForm.controls.numPersonas.value;

    index = (index - 1 === 0 || index == 0) ? 1 : (index - 1);
    this.createReservaForm.controls.numPersonas.setValue(0);
    this.createReservaForm.controls.numPersonas.setValue(index);


  }


  // myFilter = (d: Date | null): boolean => {
  //   const day = (d || new Date()).getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // };
}
