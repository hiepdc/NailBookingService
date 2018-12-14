import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from '../models/booking';
import { AgGridNg2 } from 'ag-grid-angular';
import { Customer } from '../models/customer';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private rowSelection;
  selectedBooking: Booking;
  customer: Customer;
  @ViewChild('agGrid') agGrid: AgGridNg2;

  columnDefs = [
    // {headerName: 'ID', field: 'id'},
    { headerName: 'Tên KH',  width: 300, field: 'customer_name' },
    { headerName: 'SDT', field: 'phone_number' },
    { headerName: 'Dịch vụ', field: 'service_name' },
    { headerName: 'Stylist', field: 'stylist_name' },
    {
      headerName: 'Ngày',
      width: 300,
      field: 'date',
      filter: 'agDateColumnFilter',
      filterParams: {
        comparator: function (filterLocalDateAtMidnight, cellValue) {
          var dateAsString = cellValue;
          if (dateAsString == null) return -1;
          var dateParts = dateAsString.split("-");
          var cellDate = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2]));
          if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
            return 0;
          }
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }
          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
        },
        browserDatePicker: true
      },
      suppressMenu: true
    },
    { headerName: 'Giờ', field: 'start_time' },
    { headerName: 'Coin', field: 'coin' },
    { headerName: 'Trạng thái', field: 'status' },
  ]
  paginationPageSize = 50;
  bookings: Booking[];
  id: number;
  checkInDisable: boolean;
  checkOutDisbale: boolean;
  deleteDisable: boolean;
  useCoinDisable: boolean;
  customerName: string;
  constructor(private bookingService: BookingService) {
    this.rowSelection = "single";
  }

  ngOnInit() {
    this.getBookingsFromService();
  }

  clearFilters() {
    this.gridApi.setFilterModel(null);
    this.gridApi.onFilterChanged();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.getBookingsFromService();
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onSelectionChanged() {
    var selectedRows = this.gridApi.getSelectedRows();
    var id = "";
    var customer_name = "";
    var phone_number = "";
    var stylist_name = "";
    var service_name = "";
    var date = "";
    var start_time = "";
    var status = "";
    var checkInDisable = "";
    var checkOutDisbale = "";
    var deleteDisable = "";
    var useCoinDisable ="";
    var coin = "";
    selectedRows.forEach(function (selectedRow, index) {
      if (index !== 0) {
        // id += ", ";
      }
      id += selectedRow.id;
      customer_name += selectedRow.customer_name;
      phone_number += selectedRow.phone_number;
      stylist_name += selectedRow.stylist_name;
      service_name += selectedRow.service_name;
      date += selectedRow.date;
      start_time += selectedRow.start_time;
      status += selectedRow.status;
      checkInDisable += selectedRow.checkInDisable;
      checkOutDisbale += selectedRow.checkOutDisbale;
      deleteDisable += selectedRow.deleteDisable;
      useCoinDisable += selectedRow.useCoinDisable;
      coin += selectedRow.coin;
    });

    this.id = +id;
    this.checkInDisable = (checkInDisable == "true");
    this.checkOutDisbale = (checkOutDisbale == 'true');
    this.deleteDisable = (deleteDisable == 'true');
    this.useCoinDisable =(useCoinDisable == 'true');
    this.customerName = customer_name;
  }

  getBookingsFromService(): void {
    this.bookingService.getBookings().subscribe(
      api => {
        this.bookings = api.data;
        for (let booking of this.bookings) {
          if(booking.coin >= 100){
            booking.useCoinDisable = false;
          }else{
            booking.useCoinDisable = true;
          }
          if (booking.status == 'booked') {
            booking.checkInDisable = false;
            booking.checkOutDisbale = true;
            booking.deleteDisable = false;
          } else if (booking.status == 'pending') {
            booking.checkInDisable = true;
            booking.checkOutDisbale = false;
            booking.deleteDisable = true;
          } else {
            booking.checkInDisable = true;
            booking.checkOutDisbale = true;
            booking.deleteDisable = false;
          }
        }
      }
    )
  }

  deleteBooking(id: number): void {
    this.bookingService.delelteBooking(id).subscribe(
      api => { this.getBookingsFromService(); },
      error => {
        console.log(error);
        return;
      }
    )
  }

  checkIn(id: number): void {
    this.bookingService.checkIn(id).subscribe(
      api => {
        this.getBookingsFromService();
      },
      error => {
        console.log(error);
        return;
      }
    )
  }

  checkOut(id: number): void {
    this.bookingService.checkOut(id).subscribe(
      api => {
        this.getBookingsFromService();
      },
      error => {
        console.log(error);
        return;
      }
    )
  }

  useCoin(id: number): void{
    this.bookingService.useCoin(id).subscribe(
      api => {
        if(api.data === null){
          console.log(api.message);
        }else{
          this.customer = api.data;
          console.log(this.customer);
        }
        this.getBookingsFromService();
      },
      error =>{
        console.log(error);
        return;
      }
    )
  }
}
