import { Component } from '@angular/core';
import { CredentialsService } from '../../services/auth/credentials.service';
import { loginInterface } from '../../services/interfaces/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private credentialsService: CredentialsService
  ){
    this.loginForm=this.formBuilder.group({
      username:['', [Validators.required]],
      password:['', Validators.required]
    })
    
  

}
 submit(){
  if(this.loginForm.invalid){
    return;
  }
 
this.credentialsService.login(this.loginForm.value as loginInterface).subscribe({
  next: (data:any)=>{
    console.log("Login correcto:" , data);
  },
  error: (err:any) =>{
    console.log("Login incorrecto", err)
  }
})
 }
}
