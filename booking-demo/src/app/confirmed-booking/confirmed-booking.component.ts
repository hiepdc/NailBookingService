import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StylistService } from '../stylist.service';
@Component({
  selector: 'app-confirmed-booking',
  templateUrl: './confirmed-booking.component.html',
  styleUrls: ['./confirmed-booking.component.css']
})
export class ConfirmedBookingComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private location:Location,
    private stylistService:StylistService
  ) { }

  ngOnInit() {
  }

  getDataFromRoute():void{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(""+this.route.snapshot.paramMap);
    
  }

  goBack():void{
    this.location.back();
  }

}
