import { Component, OnInit,Input } from '@angular/core';
import { UserPortalService } from '../services/userportal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightBookingDetails, FlightDetails, PassengerDetails } from '../models/flightrepository';
import { HttpClient,HttpParams } from '@angular/common/http';
import { SearchService } from '../services/search.service';
import { SearchInputData } from '../models/flightrepository';


@Component({
  selector: 'app-userportal',
  templateUrl: './userportal.component.html'
})
export class UserPortalComponent implements OnInit {

  

  constructor(private _search: SearchService, private _router: Router, private route: ActivatedRoute, public httpc: HttpClient) { }

  //userBookingDetailsArray: Array<FlightBookingDetails> = [];
  searchInputData: SearchInputData = new SearchInputData();
  userFlightData: FlightDetails = new FlightDetails();
  flightDetails: Array<FlightDetails> = new Array<FlightDetails>();
  userBookingDetailsArray: any = [];
  passengerArray: Array<PassengerDetails> = [];
  newPassenger: any = {};
  userBookingData: any = {};

  ngOnInit(): void {
    debugger;
    this.newPassenger = { psngrName: "", psngrAge: "", psngrGender: "", isMealOpted: "", price: this.userFlightData.ticketFare };
    this.passengerArray.push(this.newPassenger);
  }

  addRow(index: any) {
    this.newPassenger = { psngrName: "", psngrAge: "", psngrGender: "", isMealOpted: "", price: this.userFlightData.ticketFare };
    this.passengerArray.push(this.newPassenger);
    return true;
  }

  deleteRow(index: any) {
    if (this.passengerArray.length == 1) {
      return false;
    } else {
      this.passengerArray.splice(index, 1);
      return true;
    }
  }

  // bookFlight() {    
  //   console.log(this.passengerArray);
  //   this.userBookingData = { userId: localStorage.getItem('userId'), flightNo: "54321", noOfPassengers: this.passengerArray.length, departureDateTime: "2022-05-22T00:00:00", isOneWay: "", returnDateTime: "2022-05-29T00:00:00", tblPassengerDetails: this.passengerArray }
  //   this.userBookingDetailsArray.push(this.userBookingData);
  //   console.log(this.userBookingDetailsArray);
  //   this.httpc.post("https://localhost:44397/api/v1.0/flight/Booking/BookTickets", this.userBookingDetailsArray).subscribe(res => { this.Success(res) }, res => this.Error);
  // }

  bookFlight(obj: FlightDetails) {
    this._search.UserBookingObj(obj);
    this._router.navigate(['/bookflight']); 
      
  }

  addPassenger(obj: FlightDetails){
    console.log(obj)
    this.userBookingData.flightName=obj.flightName;
    this.userBookingData.departureDetails=obj.departureDetails;
    this.userBookingData.arrivalDetails=obj.arrivalDetails; 
    console.log(this.userBookingData)   
  }

  searchFlights() {
    debugger;
    var searchdto = {
      fromLocation: this.searchInputData.fromLocation,
      toLocation: this.searchInputData.toLocation,
      noOfPassengers: this.searchInputData.noOfPassengers,
      departureDate:this.searchInputData.departureDate,     
    }
    this.httpc.post("https://localhost:44397/api/v1.0/flight/Booking/SearchFlights", searchdto).subscribe(res => { 
      this.successSearch(res)
     }, res => this.Error);

  }  

  Error(res: any) {
    console.log(res);
  }

  Success(res: any) {
    console.log(res.response);
    alert(res.response);
  }

  successSearch(res:any)
  {
    this.flightDetails=res
  }
}
