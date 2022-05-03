import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-perfil',
  templateUrl: './tab-perfil.component.html',
  styleUrls: ['./tab-perfil.component.scss']
})
export class TabPerfilComponent implements OnInit {
  @Input() hostelero: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
