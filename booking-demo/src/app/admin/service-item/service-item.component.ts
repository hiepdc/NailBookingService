import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { ToastsManager } from 'ng2-toastr';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ServiceItem } from '../models/serviceItem';
import { AddServiceItemComponent } from './add-service-item/add-service-item.component';
import { EditServiceItemComponent } from './edit-service-item/edit-service-item.component';
import { DeleteServiceItemComponent } from './delete-service-item/delete-service-item.component';
@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  services: ServiceItem[];
  service: ServiceItem;
  // init material
  displayedColumns = ['id', 'name', 'service_name', 'price', 'actions'];
  dataSource = new MatTableDataSource<ServiceItem>(this.services);
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
    this.getServiceItemsFromService();
  }
  // CRUD function
  getServiceItemsFromService() {
    this.servicesService.getServiceItems().subscribe(
      api => {
        this.services = api.data;
        this.dataSource = new MatTableDataSource<ServiceItem>(this.services);
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  addNew(serviceItem: ServiceItem) {
    const dialogRef = this.dialog.open(AddServiceItemComponent,
      {
        width: '500px',
        data: {serviceItem: serviceItem}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.servicesService.addServiceItem(result.name, result.service_id, result.price).subscribe(
            api => {
              if (api.data === null) {
                this.getServiceItemsFromService();
                this.toastr.error(api.message);
              } else {
                this.getServiceItemsFromService();
                this.toastr.success('Tạo mới dịch vụ thành công');
              }
            },
            error => {
              console.log(error);
              return;
            }
          );
      }
    });
  }

  EditItem(id: number, name: string, service_name: string, price: number) {
    const dialogRef = this.dialog.open(EditServiceItemComponent,
      {
        width: '500px',
        data: {
          id: id,
          name: name,
          service_name: service_name,
          price: price
        }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.servicesService.editServiceItem(result.id, result.name, result.service_id, result.price).subscribe(
            api => {
              if (api.data === null) {
                this.getServiceItemsFromService();
                this.toastr.error(api.message);
              } else {
                this.getServiceItemsFromService();
                this.toastr.success('Thay đổi dịch vụ thành công');
              }
            },
            error => {
              console.log(error);
              return;
            }
          );
      }
    });
  }

  deleteItem(id: number) {
    const dialogRef = this.dialog.open(DeleteServiceItemComponent,
      {
        width: '300px',
        data: {
          id: id
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1 ) {
        console.log(result.id);
        this.servicesService.delelteServiceItem(id).subscribe(
            api => {
              if (api.data === null) {
                this.getServiceItemsFromService();
                this.toastr.error(api.message);
              } else {
                this.getServiceItemsFromService();
                this.toastr.success('Xóa dịch vụ thành công');
              }
            },
            error => {
              console.log(error);
              return;
            }
          );
      }
    });
  }
}
