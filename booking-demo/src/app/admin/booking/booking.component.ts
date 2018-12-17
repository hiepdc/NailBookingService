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
  private columnDefs;
  private components;
  @ViewChild('agGrid') agGrid: AgGridNg2;

  paginationPageSize = 50;
  bookings: Booking[];
  id: number;boolean
  checkInDisable: boolean;
  checkOutDisbale: boolean;
  deleteDisable: boolean;
  useCoinDisable: boolean;
  customerName: string;
  constructor(private bookingService: BookingService) {
    this.rowSelection = "single";
    this.columnDefs = [
      // {headerName: 'ID', field: 'id'},
      {
        headerName: 'Tên KH',
        width: 300,
        field: 'customer_name',
        floatingFilterComponentParams: { suppressFilterButton: true },
        checkboxSelection: true
      },
      { headerName: 'SDT', field: 'phone_number', floatingFilterComponentParams: { suppressFilterButton: true } },
      // { headerName: 'Dịch vụ',
      //  field: 'service_name',
      //  width: 140,
      //  filter: "agSetColumnFilter"
      //  },
      {
        headerName: "Dịch vụ",
        field: "service_name",
        width: 140,
        filter: "agSetColumnFilter",
        filterParams: {cellHeight: 20, values: ['A','B','C'], newRowsAction: 'keep' }
      },
      { headerName: 'Stylist', field: 'stylist_name', filter: "agSetColumnFilter" },
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
      { headerName: 'Giờ', field: 'start_time' },
      {
        headerName: 'Coin',
        field: 'coin', floatingFilterComponentParams: { suppressFilterButton: true },
      },
      {
        headerName: 'Trạng thái',
        field: 'status',
        // floatingFilterComponentParams: { suppressFilterButton: true },
        filter: "agSetColumnFilter",
        filterParams: { suppressMiniFilter: true }
      },
    ];
  }

  ngOnInit() {
    this.getBookingsFromService();
    this.checkInDisable = true;
    this.checkOutDisbale = true;
    this.deleteDisable = true;
    this.useCoinDisable = true;
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
    var useCoinDisable = "";
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
          if (booking.coin >= 100) {
            booking.useCoinDisable = false;
          } else {
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
function countryCellRenderer(params) {
  return params.value.name;// + ' (' + params.value.code + ')';
}
function countryKeyCreator(params) {
  var countryObject = params.value;
  var key = countryObject.name;
  return key;
}
function patchData(data) {
  data.forEach(function(row) {
    var countryName = row.country;
    var countryCode = countryName.substring(0, 2).toUpperCase();
    row.country = {
      name: countryName,
      code: countryCode
    };
  });
}