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
  // constructor(private bookingService: BookingService) {

  // }
  // ngOnInit() {

  // }
  gridApi;
  gridColumnApi;
  rowSelection;
  selectedBooking: Booking;
  customer: Customer;
  columnDefs;
  components;
  @ViewChild('agGrid') agGrid: AgGridNg2;

  paginationPageSize = 50;
  bookings: Booking[];
  id: number;
  checkInDisable: boolean;
  checkOutDisbale: boolean;
  deleteDisable: boolean;
  useCoinDisable: boolean;
  customerName: string;
  constructor(private bookingService: BookingService) {
    this.columnDefs = [
      // {headerName: 'ID', field: 'id'},
      {
        headerName: 'Tên KH',
        width: 300,
        field: 'customer_name',
        floatingFilterComponentParams: { suppressFilterButton: true },
        // checkboxSelection: true
      },
      { headerName: 'SDT', field: 'phone_number', floatingFilterComponentParams: { suppressFilterButton: true } },
      {
        headerName: "Dịch vụ",
        field: "service_name",
        width:300,
        floatingFilterComponentParams: { suppressFilterButton: true }
      },
      { headerName: 'Stylist',  width: 300, field: 'stylist_name',floatingFilterComponentParams: { suppressFilterButton: true } },
      {
        headerName: 'Ngày',
        width: 300,
        floatingFilterComponentParams: { suppressFilterButton: true },
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
      { headerName: 'Giờ', field: 'start_time', floatingFilterComponentParams: { suppressFilterButton: true }},
      {
        headerName: 'Coin',
        field: 'coin', floatingFilterComponentParams: { suppressFilterButton: true }
      },
      {
        headerName: 'Trạng thái',
        field: 'status',
        // floatingFilterComponentParams: { suppressFilterButton: true },
        // filterParams: { suppressMiniFilter: true },
        floatingFilterComponentParams: { suppressFilterButton: true }
      },
    ];
    this.rowSelection = "single";
  }

  ngOnInit() {
    // this.getBookingsFromService();
    this.checkInDisable = true;
    this.checkOutDisbale = true;
    this.deleteDisable = true;
    this.useCoinDisable = true;
  }

  clearFilters() {
    this.gridApi.setFilterModel(null);
    this.gridApi.onFilterChanged();
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onSelectionChanged(event) {
    console.log(event)
    var selectedRows = this.gridApi.getSelectedRows();
    console.log(this.gridApi)
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
    var useCoinDisable = "";
    var coin = "";
    selectedRows.forEach(function (selectedRow, index) {
      if (index !== 0) {
        // id += ", ";
      }
      id += selectedRow.id;
      console.log(id);
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
    console.log(this.id)
    this.checkInDisable = (checkInDisable == "true");
    this.checkOutDisbale = (checkOutDisbale == 'true');
    this.deleteDisable = (deleteDisable == 'true');
    this.useCoinDisable = (useCoinDisable == 'true');
    this.customerName = customer_name;
  }

  getBookingsFromService(): void {
    this.bookingService.getBookings().subscribe(
      api => {
        this.bookings = api.data;
        this.checkInDisable = true;
    this.checkOutDisbale = true;
    this.deleteDisable = true;
    this.useCoinDisable = true;
        for (let booking of this.bookings) {
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
          if (booking.coin >= 100 && booking.status == 'pending') {
            booking.useCoinDisable = false;
          } else {
            booking.useCoinDisable = true;
          }
        }
      }
    )
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getBookingsFromService();
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

  useCoin(id: number): void {
    this.bookingService.useCoin(id).subscribe(
      api => {
        if (api.data === null) {
          console.log(api.message);
        } else {
          this.customer = api.data;
          console.log(this.customer);
        }
        this.getBookingsFromService();
      },
      error => {
        console.log(error);
        return;
      }
    )
  }
}
