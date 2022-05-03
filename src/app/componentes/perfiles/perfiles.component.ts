import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.scss']
})
export class PerfilesComponent implements OnInit {
  hostelero = true;
  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService.getHostelero().subscribe((result: any) => {
      if (result['mensage'].mensageType === 3) {

      }
      if (result['mensage'].mensageType === 1) {
        this.hostelero = result['data'];
      }

    })

  }


}
