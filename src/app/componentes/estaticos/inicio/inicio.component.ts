import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  forma!: FormGroup;



  constructor(
    private fb: FormBuilder,

    private router: Router
  ) { }

  ngOnInit(): void {
  

  
  }

}
