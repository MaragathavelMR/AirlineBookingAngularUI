import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { UserData } from '../models/UserData';

@Injectable()
export class AdminService {
    private _airlineRegUrl = "https://localhost:44347/api/v1.0/FlightReg/airline/Register";
    private _flightAddsUrl = "https://localhost:44347/api/v1.0/FlightReg/airline/add";
    private _airlineGetUrl = "https://localhost:44347/api/v1.0/FlightReg/AirlinesList";
    private _flightGetsUrl = "https://localhost:44347/api/v1.0/FlightReg/FlightList"

    constructor(private http: HttpClient) {
    }

    // postAirlineData(data:AirlineData) {
    //     debugger;
    //     return this.http.post<any>(this._airlineRegUrl, data)
    // }

    // // registerUser(user: UserData) {
    // //     console.log(user);
    // //     return this.http.post<any>(this._registerUrl, user)
    // // }

    // PostFlightData(data:FlightData) {
    //     return this.http.post<any>(this._flightAddsUrl,data)
    // }

    
    // getAirlineData() {
    //     return this.http.get<any>(this._airlineGetUrl)
    // }

    
    // getFlightData() {
    //     return this.http.get<any>(this._flightGetsUrl)
    // }
}