import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { HttpClient,HttpParams } from '@angular/common/http';
import { FlightInventoryDetails } from '../models/InventoryDetails';
import { Router } from '@angular/router';
import { FlightDetails } from '../models/flightrepository';


@Component({  
  templateUrl: './adminportal.component.html'
})

export class AdminComponent implements OnInit {

  isFlightDetailsAvailable:boolean=false;
  flightData: FlightInventoryDetails = new FlightInventoryDetails();
  flightDataArray: Array<FlightInventoryDetails> = new Array<FlightInventoryDetails>();
  FlightDetailsArray:Array<FlightDetails>=new Array<FlightDetails>();

  constructor(public httpc: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.flightData = {   flightNo: '',airlineName:"",flightName: "", fromPlace: "", toPlace: "", departureDetails: "", arrivalDetails: "", availableSeats: 0, schldDays: "", instrumentUsed: "", ticketFare: 0,mealOption:""};
    this.flightDataArray.push(this.flightData);
  }

  addRow(index: any) {
    this.flightData = {  flightNo: '',airlineName:"",flightName: "", fromPlace: "", toPlace: "", departureDetails: "", arrivalDetails: "", availableSeats: 0, schldDays: "", instrumentUsed: "", ticketFare: 0,mealOption:""};
    this.flightDataArray.push(this.flightData);
    console.log(this.flightDataArray);
    return true;
  }

  deleteRow(index: any) {
    if (this.flightDataArray.length == 1) {
      return false;
    } else {
      this.flightDataArray.splice(index, 1);
      return true;
    }
  }

  addInventory() {
    debugger;
    this.isFlightDetailsAvailable=true;
    // console.log(this.flightDataArray)
    this.httpc.post<any>("https://localhost:44347/api/v1.0/FlightReg/airline/add", this.flightData).subscribe(
      res => {
        alert(res.response)
        }, 
        res => this.Error
        );       
  }
  
  getflightdetails(){
    this.isFlightDetailsAvailable=true;
    this.httpc.get<any>("https://localhost:44347/api/v1.0/FlightReg/FlightList").subscribe(
      res=>{
          this.FlightDetailsArray=res
      },
      err=>console.log(err)
    )
  }

  Error(res: any) {
    console.log(res);
    alert(res.response);
  }
  
  Success(res: any) {
    console.log(res.response);
    alert(res.response);
  }
}
