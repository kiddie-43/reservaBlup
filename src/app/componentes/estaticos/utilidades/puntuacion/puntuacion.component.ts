import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.scss']
})
export class PuntuacionComponent implements OnInit {
 color: ThemePalette = 'primary';
   mode: ProgressSpinnerMode = 'determinate';
   value = 100;
   valueMedia = 10;
  constructor(
   
  ) { }

  ngOnInit(): void {
  }

}
