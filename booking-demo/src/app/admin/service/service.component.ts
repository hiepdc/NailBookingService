import { Component, OnInit } from '@angular/core';
import { Service} from '../models/service';
import { ServicesApi } from '../models/servicesApi';
import {ServicesService} from './services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services : Service[];
  constructor(private Services: ServicesService) { }

  getServicesFromService(): void {
    this.Services.getServices().subscribe(
      ServicesApi => this.services = ServicesApi.data.data
    );
  }
  ngOnInit() {
    this.getServicesFromService();
  }

}
