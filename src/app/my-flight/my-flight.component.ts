import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-my-flight',
  templateUrl: './my-flight.component.html',
  styleUrls: ['./my-flight.component.css']
})
export class MyFlightComponent implements OnInit {
 flights : Flight[];
  constructor(private flightService : FlightService) { 
    this.flights = []
  }

  ngOnInit(): void {
    this.flights = this.flightService.getMyFlights();
  }

}
