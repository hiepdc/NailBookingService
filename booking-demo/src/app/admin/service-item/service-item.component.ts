import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service';
import { ServiceItem } from '../models/serviceItem';
import { ServiceItemApi } from '../models/serviceItemApi';
import { ServiceItemService } from './service-item.service';


@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {
  private services:Service[];
  private serviceItems:ServiceItem[];
  private serviceId:number=1;
  private serviceItemApi:ServiceItemApi;

  constructor(private itemService:ServiceItemService) { 
    
  }

  ngOnInit() {
    this.getServices();
    this.getAllServiceItems();
  }
  getServices(){
    this.itemService.getServices().subscribe(
      serviceApi => this.services = serviceApi.data
    );
  }

  deleteService(serviceItem_id: number): void{
    this.itemService.deleteServiceItemsByServiceId(serviceItem_id).subscribe(
      api => {this.getAllServiceItems();},
      error => {
        console.log(error);
        return;
      }
    )
  }

  getAllServiceItems(){
    this.itemService.getServiceItemsByServiceId(this.serviceId).subscribe(
      serviceItemApi => {
        this.serviceItemApi = serviceItemApi;
        console.log("index1: " + JSON.stringify(this.serviceItemApi.data["1"][0]) )
      }
    );
  }
}
