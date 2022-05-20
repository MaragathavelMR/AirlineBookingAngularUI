import { HttpClient,HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class UserPortalService {
    private _searchFlight = "https://localhost:44397/api/v1.0/flight/Booking/Searchflights";
    private _bookFlightUrl = "https://localhost:44397/api/v1.0/flight/Booking/BookTicketsQueue";
    private _getBookingUrl = "https://localhost:44397/api/v1.0/flight/Booking/history/{pnr}";
    private _deleteBookingUrl = "https://localhost:44397/api/v1.0/flight/Booking/cancel/{pnr}"

    constructor(private http: HttpClient) {
    }

    getFlightDetails(data:any) {
        return this.http.post<any>(this._searchFlight,data)
    }

    
    bookFlightdetails(data:any) {
        return this.http.post<any>(this._bookFlightUrl,data)
    }

    getBookedFlightDetails(data:any){
        let httparms=new HttpParams().set("pnr",data)
        let options={params:httparms};
        return this.http.get<any>(this._getBookingUrl,options)
    }

    deleteBookingDetails(data:any){
        let httparms=new HttpParams().set("Pnr",data.pnr)
        let options={params:httparms};
       return this.http.delete<any>(this._deleteBookingUrl, options)
    }
}