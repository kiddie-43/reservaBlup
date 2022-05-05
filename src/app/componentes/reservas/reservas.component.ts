import { Component, Input, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  
  @Input() hostelero : boolean = false;
   usuario : boolean = true;
  
  constructor (
    private reservasService : ReservasService
   ) {  }

  ngOnInit(): void { 

    this.getReservas();
   }


  getReservas (    ){

    // const params = {
    //   id : localStorage.getItem(environment.userCode), 
    //   usuario : this.hostelero
    // }

    // this.reservasService.getReservas().subscribe((result)=>{

    
    // })
  }


}
