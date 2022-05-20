export class FlightDetails {
    flightNo: string = '';
    airlineName:string="";
    flightName:string="";
    fromPlace:string="";
    toPlace:string="";
    departureDetails:string="";
    arrivalDetails:string="";
    availableSeats:number=0;
    schldDays:string="";
    instrumentUsed:string="";
    ticketFare:number=0;
    mealOption:string="";
}

//Search Service
export class SearchInputData {
    fromLocation: string = '';
    toLocation: string = '';
    noOfPassengers: number = 0;
    departureDate: string = '';
    returnDate: string = '';
}

//Booking Service
export class PassengerDetails {
    psngrName: string = '';
    psngrAge: string = '';
    psngrSeatNo:string="";
    psngrGender: string = '';
    isMealOpted: string = '';
    price: number = 0;
}

//Booking Service
export class FlightBookingDetails {
    userId: number = 0;
    flightNo: string = '';
    noOfPassengers: number = 0;    
    isOneWay: string = '';
    departureTime: string = '';
    arrivalTime: string = '';
    tblPassengerDetails: Array<PassengerDetails> = new Array<PassengerDetails>();
}

export class BookingHistoryDetails {
    pnr: number = 0;
    userName: string = '';
    flightNo: string = '';
    psngrName: string = '';
    psngrAge: number = 0;
    psngrGender: string = '';
    isMealOpted: string = '';
    mealType: string = '';
    departureTime: string = '';
    isOneWay: string = '';
    arrivalTime: string = '';
    noofPassengers: number = 0;
    price: number = 0;
    status: number = 0;
}

export class AirlineRegister{
    airlineName:string="";
    regOn:string="";
    regBy:string="";
    isActive:string="";
    remarks:string="";
}