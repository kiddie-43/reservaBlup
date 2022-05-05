import { Component, Input, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReservaFormComponent } from '../../formularios/reserva-form/reserva-form.component';
MAT_DIALOG_DATA

MatDialog

MatDivider
@Component({
  selector: 'app-reservas-card',
  templateUrl: './reservas-card.component.html',
  styleUrls: ['./reservas-card.component.scss']
})
export class ReservasCardComponent implements OnInit {
  @Input() reserva: any;
  dialogRef !: MatDialogRef<ReservaFormComponent>;


  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  updateReserva() {
    const params = {
      edit: true,
      data: this.reserva
    }
    this.dialogRef = this.dialog.open(ReservaFormComponent, { data: params });
  }



}
