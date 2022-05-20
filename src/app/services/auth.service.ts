import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { UserData } from '../models/UserData';

@Injectable()
export class AuthService {
    private _registerUrl = "https://localhost:44360/api/v1.0/Login/UserRegister";
    private _loginUrl = "https://localhost:44360/api/v1.0/Login/Userlogin"

    constructor(private http: HttpClient, private _router: Router) {

    }

    loginUser(user: any) {
        return this.http.post<any>(this._loginUrl, user)
    }

    registerUser(user: UserData) {
        console.log(user);
        return this.http.post<any>(this._registerUrl, user)
    }

    logoutUser() {
        localStorage.removeItem('token')
        localStorage.removeItem('isadmin')
        this._router.navigate(['/login'])
    }

    getToken() {
        return localStorage.getItem('token')
    }
    loggedIn() {
        return !!localStorage.getItem('token')
    }
    
    adminLoggedIn() {
        if (!!localStorage.getItem('token') && localStorage.getItem('roleId') == "1")
            return true;
        else
            return false;
    }

    userLoggedIn() {
        if (!!localStorage.getItem('token') && localStorage.getItem('roleId') == "2")
            return true;
        else
            return false;
    }
}