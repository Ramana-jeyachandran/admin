import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  status;
  credentials=[];
 
  constructor(private fb:FormBuilder) {
     this.registerForm=this.fb.group({
    
     'email': this.fb.control('', [Validators.email]),
      'password': this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      'confirm-password': this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)])
      } )
  
  }
 check()
 {
   if(this.registerForm.valid)
   {
      window.localStorage.setItem('credentials', JSON.stringify(this.registerForm.value)); 
     this.status="Registration Successful login to start"
   }
   else
   {
     this.status="Registration Faills"
   }
 }
  ngOnInit(): void {
  }

}
