import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {


// descripciones :any =   {
// descripcion : "bla bla bla bla ", 
// menu : "menu bla bla bla "
// } 
 
 @Input() descripciones : any = { descripcion : "", menu : "" } ; 
 @Input() valoracion : any = 100;

 
 constructor() { }

  ngOnInit(): void {
  }
}
