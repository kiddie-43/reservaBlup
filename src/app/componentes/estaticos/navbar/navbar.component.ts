import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
public usuarioService :UsuarioService

  ) { }

  ngOnInit(): void {
  }

}
