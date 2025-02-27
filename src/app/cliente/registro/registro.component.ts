import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  registroForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.registroForm=this.fb.group({
      usuario:['', [Validators.required, Validators.minLength(3)]],
      password:['', [Validators.required, Validators.minLength(5)]],
      role:['', Validators.required],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      address:['', Validators.required],
      terms:[false, Validators.requiredTrue]
    })

  }
  onSubmit(){
    if(this.registroForm.valid){
      console.log('Usuario  registrado!', this.registroForm.value);
    }else{
      console.log('No valido');
    }
  }

}
