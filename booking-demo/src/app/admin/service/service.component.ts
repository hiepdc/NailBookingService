import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service';
import { ServiceApi } from '../models/serviceApi';
import {ServicesService} from './services.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
 services: Service[];
  constructor(private adminServices: ServicesService) { }
  
  //get services from api
  getServicesFromService(): void {
    this.adminServices.getServices().subscribe(
      ServiceApi => this.services = ServiceApi.data
    );


  }

  deleteService(id: number): void{
    this.adminServices.deleteServices(id).subscribe(
      api => {this.getServicesFromService();},
      error => {
        console.log(error);
        return;
      }
    )
  }
  ngOnInit() {
    this.getServicesFromService();
  }

}
