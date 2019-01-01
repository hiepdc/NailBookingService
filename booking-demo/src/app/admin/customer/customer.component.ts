import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { StylistService } from '../stylist/stylist.service';
import { ToastsManager } from 'ng2-toastr';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Customer } from '../models/customer';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  customer: Customer;
  // init material
  displayedColumns = ['id', 'customer_name', 'phone_number', 'coin', 'actions'];
  dataSource = new MatTableDataSource<Customer>(this.customers);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // end init material
  constructor(
    private stylistService: StylistService,
    public toastr: ToastsManager,
    _vcr: ViewContainerRef,
    public dialog: MatDialog) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.getCustomerFromService();
  }

  // CRUD function
  getCustomerFromService() {
    this.stylistService.getCustomers().subscribe(
      api => {
        this.customers = api.data;
        this.dataSource = new MatTableDataSource<Customer>(this.customers);
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  deleteItem(id: number) {
    const dialogRef = this.dialog.open(DeleteCustomerComponent,
      {
        width: '300px',
        data: {
          id: id
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.stylistService.delelteCustomer(id).subscribe(
          api => {
            console.log(api);
            console.log(api.message);
            if (api.data === null) {
              this.getCustomerFromService();
              this.toastr.error(api.message);
            } else {
              this.getCustomerFromService();
              this.toastr.warning('Xóa khách hàng thành công');
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
