import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from './flight';
@Injectable({
  providedIn: 'root'
})

export class FlightService {

  private myflights: Flight[] = [
    {"flightNumber" : "FS1298", "origin": "LAX", "destination" : "LHR",
  },
{ "flightNumber" : "FS1201", "origin": "LAX", "destination" : "LHR"} 
  ];
  constructor( private http : HttpClient) { 

    
  }

  public getMyFlights(): Flight[]{
    return this.myflights;
  }
}
