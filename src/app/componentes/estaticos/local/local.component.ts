import { Component, OnInit } from '@angular/core';
import { LocalesService } from 'src/app/servicios/locales.service';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {
  cargando = true;
  local !: any;
  carusel !: Array<string> ;

  constructor(
    private localService: LocalesService,
    private activateRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {

    this.activateRoute.params.subscribe((params) => {
      this.getLocal(params['id_local']);
    });
  }


  getLocal(id_local: string) {
  
    this.localService.getLocal(id_local).subscribe((result : any) => {
  
      this.carusel = result['carrusel'];

      this.local = result;

      this.cargando = false;
    });
  }


}
