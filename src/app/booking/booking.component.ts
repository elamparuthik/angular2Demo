import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-booking',
  templateUrl: './booking.component.html',
  styleUrls: [ './booking.component.css' ],
})

export class BookingComponent implements OnInit {

  	//constructor(private http:Http) {}

  	ngOnInit(): void {
     //alert("hello booking");
     
    }

    eventHandler(event : String) {
      console.log(event);
   } 

   
}