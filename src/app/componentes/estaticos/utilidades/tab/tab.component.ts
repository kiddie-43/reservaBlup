import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {


descripciones :any =   {
descripcion : "bla bla bla bla ", 
menu : "menu bla bla bla "
} 
 
 
 
 
 constructor() { }

  ngOnInit(): void {
  }




}
