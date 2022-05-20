import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlineRegister } from '../models/flightrepository';
import { FlightInventoryDetails } from '../models/InventoryDetails';

@Component({ 
  templateUrl: './airlineregister.component.html'
})
export class airlineresgiterComponent implements OnInit {

  isAirlineDetailsAvailable:boolean=false;
  airlineData: AirlineRegister = new AirlineRegister();
  airlineDataArray: Array<AirlineRegister> = new Array<AirlineRegister>();
  airlineDataUptdArray:Array<AirlineRegister>=new Array<AirlineRegister>();

  constructor(public httpc: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.airlineData = { airlineName: "", regOn: "", regBy: "", isActive: "", remarks: "" };
    this.airlineDataArray.push(this.airlineData);
  }

  addRow(index: any) {
    this.airlineData = { airlineName: "", regOn: "", regBy: "", isActive: "", remarks: "" };
    this.airlineDataArray.push(this.airlineData);
    console.log(this.airlineDataArray);
    return true;
  }

  deleteRow(index: any) {
    if (this.airlineDataArray.length == 1) {
      return false;
    } else {
      this.airlineDataArray.splice(index, 1);
      return true;
    }
  }

  addAirline() {
    debugger;   
    this.isAirlineDetailsAvailable=true
    this.httpc.post<any>("https://localhost:44347/api/v1.0/FlightReg/airline/Register", this.airlineData).subscribe(res => {
      alert(res.response)
      }, res => this.Error);
  
  }

  viewAirline()
  {
    this.isAirlineDetailsAvailable=true
    this.httpc.get<any>("https://localhost:44347/api/v1.0/FlightReg/AirlinesList").subscribe(
      res=>{
          this.airlineDataUptdArray=res
      },
      err=>console.log(err)
    )
  }

  Error(res: any) {
    console.log(res);
  }
  Success(res: any) {
    console.log(res.response);
    alert(res.response);
  }

}
