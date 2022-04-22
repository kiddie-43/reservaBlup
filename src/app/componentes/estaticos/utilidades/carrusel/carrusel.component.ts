import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  @Input() carrusel: Array<String> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
