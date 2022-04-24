import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {
 
  forma!: FormGroup;

 
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      comentario : ['', [Validators.required]], 
      puntuacion : [0, [Validators.required]]
  
  
    })
  
  
  }

  puntuacion(value: number) {
    return value + " "; 
  }
  
  enviarFormulario(){
      console.log(this.forma.controls);

      // enviar formulario mas adelanter
  }

}
