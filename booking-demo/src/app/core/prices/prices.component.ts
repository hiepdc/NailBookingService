import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { LoaderService } from '../http-handle';
import { Service } from '../models/service';
import { ServiceItem } from '../models/serviceItem';
import { ServiceItemApi } from '../models/serviceItemApi';
@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  private services:Service[];
  private serviceItems:ServiceItem[];
  private serviceId:number=1;
  private serviceItemApi:ServiceItemApi;
  constructor(
    private bookingService:BookingService,
    private loaderService:LoaderService
  ) { }

  ngOnInit() {
    this.getServices();
    this.getAllServiceItems();
  }

  getServices(){
    this.bookingService.getServices().subscribe(
      serviceApi => this.services = serviceApi.data
    );
  }

  selectService(serviceId:number){
    this.serviceId = serviceId;
    //this.getServiceItemsByServiceId();
  }

  getAllServiceItems(){
    this.bookingService.getServiceItemsByServiceId(this.serviceId).subscribe(
      serviceItemApi => {
        this.serviceItemApi = serviceItemApi;
        console.log("index1: " + JSON.stringify(this.serviceItemApi.data["1"][0]) )
      }
    );
  }

}
