import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../../servicios/reservas.service';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-reservas-usuario',
  templateUrl: './reservas-usuario.component.html',
  styleUrls: ['./reservas-usuario.component.scss']
})
export class ReservasUsuarioComponent implements OnInit {
reservas : Array<any> = [];
  constructor(
    private reseraService : ReservasService
  ) { }

  ngOnInit(): void {
 
 this.getreservas();
 
  }


getreservas(){
  this.reseraService.getReservas().subscribe((result:any)=>{
  
  
    this.reservas = result.data;
  
  })
}

}
