import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm;
   details;
   nxt;
  constructor(private fb:FormBuilder) {
    this.loginForm=this.fb.group({
   
    'email': this.fb.control('', [Validators.email]),
    'password': this.fb.control('', [Validators.required]),
    
     } )
     
 
 }
     checkAuth()
     {
       if(this.loginForm.valid)
       {
         this.details=JSON.parse(window.localStorage.getItem('credentials'));
         if(this.details.email=="aaaaaaa@ja.com" && this.details.password==123456)
         {
           console.log("login Success");
         }
       }
     }

  ngOnInit(): void {
  }

}
