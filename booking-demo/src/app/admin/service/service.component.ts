import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ServicesService } from './services.service';
import { ToastsManager } from 'ng2-toastr';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Service } from '../models/service';
import { EditServiceComponent } from './edit-service/edit-service.component';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services: Service[];
  service: Service;
  // init material
  displayedColumns = ['id', 'service_name', 'description', 'time_service', 'coin_service', 'actions'];
  dataSource = new MatTableDataSource<Service>(this.services);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // end init material
  constructor(
    private servicesService: ServicesService,
    public toastr: ToastsManager,
    _vcr: ViewContainerRef,
    public dialog: MatDialog
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.getServicesFromService();
  }
  // CRUD function
  getServicesFromService() {
    this.servicesService.getServices().subscribe(
      api => {
        this.services = api.data;
        this.dataSource = new MatTableDataSource<Service>(this.services);
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  EditItem(id: number, service_name: string, description: string, time_service: string, coin_service: string) {
    const dialogRef = this.dialog.open(EditServiceComponent,
      {
        width: '500px',
        data: {
          id: id,
          service_name: service_name,
          description: description,
          time_service: time_service,
          coin_service: coin_service
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.servicesService.editService(result.id, result.service_name, result.description,
          result.time_service, result.coin_service).subscribe(
            api => {
              if (api.data === null) {
                this.getServicesFromService();
                this.toastr.error(api.message);
              } else {
                this.getServicesFromService();
                this.toastr.success('Chỉnh sửa dịch vụ thành công');
              }
            },
            error => {
              this.toastr.error(error);
              return;
            }
          );
      }
    });
  }
}
