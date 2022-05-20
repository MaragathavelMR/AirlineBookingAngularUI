import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'event-app';
 
  constructor(private _authService:AuthService) {
   
  }

  LogOut(){
    this._authService.logoutUser();
  }

  userLoggedIn(input:boolean):boolean{
    if(input){
      return this._authService.userLoggedIn();
    }
    else{
      return !this._authService.userLoggedIn();
    }
  }

  adminLoggedIn(input:boolean):boolean{
    if(input){
      return this._authService.adminLoggedIn();
    }
    else{
      return !this._authService.adminLoggedIn();
    }
  }
  LoggedIn(input:boolean):boolean{
    if(input){
      return this._authService.loggedIn();
    }
    else{
      return !this._authService.loggedIn();
    }
  }
  
}
