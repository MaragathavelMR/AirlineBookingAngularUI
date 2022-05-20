import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';
import { NewUserData } from '../models/NewUserData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent  {
 

  registerUserData: NewUserData = new NewUserData();
  constructor(private _auth: AuthService, private _router: Router) { }
  
  registerUser() {
    debugger;    
    this._auth.registerUser(this.registerUserData).subscribe(res => {
      //localStorage.setItem('token', res.token)
      alert(res.response)
      this._router.navigate(['/login'])
    },
      err => console.log(err)
    )
  }
  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.registerUserData.formUserGroup.controls[controlname].hasError(typeofvalidator);
  }

  
}
