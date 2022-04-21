import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalesService } from '../../servicios/locales.service';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss']
})
export class LocalesComponent implements OnInit {
  
  listaLocales: any;
  cargando: boolean = true;
  

  constructor(
    public localesService : LocalesService,
    public usuarioService : UsuarioService
    ) { 
    this.getLocales();
    }

  ngOnInit(): void {
  }
  getLocales() {

    return this.localesService.obtenerLocales().subscribe((params: any) => {
     const response = params;
     console.log(response);
     
     this.listaLocales = response[0];
     this.cargando = false;
      return this.listaLocales;
    })
  }
  
  verLocal(id_local: number) {
  }

}
