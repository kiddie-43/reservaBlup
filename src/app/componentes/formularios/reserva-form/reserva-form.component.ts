import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservasService } from '../../../servicios/reservas.service';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';

MatDatepicker
MatDatepickerModule
MatNativeDateModule
@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss']
})
export class ReservaFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reservaService :ReservasService,
    public dialogRef: MatDialogRef<ReservaFormComponent>,
  ) { }

  ngOnInit(): void {
    
  }
  // myFilter = (d: Date | null): boolean => {
  //   const day = (d || new Date()).getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // };
}
