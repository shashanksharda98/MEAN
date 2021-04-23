import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required])
  registerEmail = new FormControl('', [Validators.required, Validators.email])
  registerpassword = new FormControl('', [Validators.required])
  registerpasswordAgain = new FormControl('', [Validators.required])
  hide = true
  hide1 = true
  hide2 = true
  

  constructor() { }

  ngOnInit(): void{
    
  }
  getErrorMessage(){

  }
  getpasswordErrorMessage(){

  }
  getRegisterEmailError(){

  }
  getRegisterPasswordErrorMessage(){

  }
  getRegisterPasswordAgainErrorMessage(){

  }

}
