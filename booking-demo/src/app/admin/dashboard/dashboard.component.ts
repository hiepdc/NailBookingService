import { Component, OnInit ,ViewChild} from '@angular/core';
import * as CanvasJS from '../models/canvasjs.min';
import { BookingService } from '../booking/booking.service';
import { Booking } from '../models/booking';
import { AgGridNg2 } from 'ag-grid-angular';
import { Customer } from '../models/customer';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataPointsMonthDate = [];
  dataPointsMonthMorning = [];
  dataPointsMonthNoon = [];
  chart : any;
  years = [2018];
  showComboboxMonth : any;
  //week
  dataPointsWeekDate = [];
  dataPointsWeekMorning = [];
  dataPointsWeekNoon = [];
  chartWeek : any;
  months = ['2018-12', '2018-11', '2018-10', '2018-09', '2018-08', '2018-07', '2018-06','2018-05', '2018-04', '2018-03', '2018-02'];
  showComboboxWeek : any;

  //count total
  countBookings: number;
  countStylists: number;
  countCustomers: number;

  // for booking <---------------------->
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
  id: number;boolean
  checkInDisable: boolean;
  checkOutDisbale: boolean;
  deleteDisable: boolean;
  useCoinDisable: boolean;
  customerName: string;
  //end booking  <---------------------->
  constructor(private bookingService: BookingService) {
    // for booking <---------------------->
    this.columnDefs = [
      // {headerName: 'ID', field: 'id'},
      {
        headerName: 'Tên KH',
        width: 300,
        field: 'customer_name',
        floatingFilterComponentParams: { suppressFilterButton: true },
        // checkboxSelection: true
      },
      { headerName: 'SDT',width:300, field: 'phone_number', floatingFilterComponentParams: { suppressFilterButton: true } },
      {
        headerName: "Dịch vụ",
        field: "service_name",
        floatingFilterComponentParams: { suppressFilterButton: true }
      },
      { headerName: 'Stylist',  width: 300, field: 'stylist_name',floatingFilterComponentParams: { suppressFilterButton: true } },
      // {
      //   headerName: 'Ngày',
      //   width: 300,
      //   floatingFilterComponentParams: { suppressFilterButton: true },
      //   field: 'date',
      //   filter: 'agDateColumnFilter',
      //   filterParams: {
      //     comparator: function (filterLocalDateAtMidnight, cellValue) {
      //       var dateAsString = cellValue;
      //       if (dateAsString == null) return -1;
      //       var dateParts = dateAsString.split("-");
      //       var cellDate = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2]));
      //       if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
      //         return 0;
      //       }
      //       if (cellDate < filterLocalDateAtMidnight) {
      //         return -1;
      //       }
      //       if (cellDate > filterLocalDateAtMidnight) {
      //         return 1;
      //       }
      //     },
      //     browserDatePicker: true
      //   },
      //   suppressMenu: true
      // },
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
   // chart for month
   this.getTotalCountFromService();
    this.chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      axisY: {
        includeZero: false,
        title: "Số lượng lịch đặt",
        // suffix: "lượt"
      },
      toolTip: {
        shared: "true"
      },
      legend: {
        cursor: "pointer"
        // itemclick: this.toggleDataSeries
      },
      data: [{
        type: "spline",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##",
        name: "Buối sáng",
        dataPoints: this.dataPointsMonthMorning
      },
      {
        type: "spline",
        showInLegend: true,
        visible: true,
        yValueFormatString: "##",
        name: "Buổi chiều",
        dataPoints: this.dataPointsMonthNoon
      },
      {
        type: "spline",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##",
        name: "Cả ngày",
        dataPoints: this.dataPointsMonthDate
      }]
    });
    this.getChartMonthFromService((new Date()).getFullYear());

    //chart for week
    this.chartWeek = new CanvasJS.Chart("chartContainerWeek", {
      theme: "light2",
      animationEnabled: true,
      axisY: {
        includeZero: false,
        title: "Số lượng lịch đặt",
        // suffix: "lượt"
      },
      toolTip: {
        shared: "true"
      },
      legend: {
        cursor: "pointer"
        // itemclick: this.toggleDataSeries
      },
      data: [{
        type: "column",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##",
        name: "Buối sáng",
        dataPoints: this.dataPointsWeekMorning
      },
      {
        type: "column",
        showInLegend: true,
        visible: true,
        yValueFormatString: "##",
        name: "Buổi chiều",
        dataPoints: this.dataPointsWeekNoon
      },
      {
        type: "column",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##",
        name: "Cả ngày",
        dataPoints: this.dataPointsWeekDate
      }]
    });
    this.getChartWeekFromService(`${(new Date()).getFullYear()}-${(new Date()).getMonth()}`);

    // for booking <---------------------->
    this.checkInDisable = true;
    this.checkOutDisbale = true;
    this.deleteDisable = true;
    this.useCoinDisable = true;
  }
  getChartMonthFromService(year: number) {
    this.bookingService.getChartMonth(year).subscribe(
      api => {
        let date = api.data['date'];
        let morning = api.data['morning'];
        let evening = api.data['evening'];
        const dateArray = Object.keys(date).map(i => date[i]);
        const morningArray = Object.keys(morning).map(i => morning[i]);
        const eveningArray = Object.keys(evening).map(i => evening[i]);
        let i = 1;
        this.dataPointsMonthDate.length = 0;
        for (let element of dateArray) {
          this.dataPointsMonthDate.push({ label: `tháng ${i}`, y: element });
          i++;
        }
        let j = 1;
        this.dataPointsMonthMorning.length = 0;
        for (let element of morningArray) {
          this.dataPointsMonthMorning.push({ label: `tháng ${i}`, y: element });
          j++;
        }
        let k = 1;
        this.dataPointsMonthNoon.length = 0;
        for (let element of eveningArray) {
          this.dataPointsMonthNoon.push({ label: `tháng ${i}`, y: element });
          k++;
        }
        this.chart.render();
        this.showComboboxMonth = true;

      },
      error => {
        console.log(error);
        return;
      }
    )
  }
  getChartWeekFromService(month: string) {
    this.bookingService.getChartWeek(month).subscribe(
      api => {
        let date = api.data['date'];
        console.log(date)
        let morning = api.data['morning'];
        let evening = api.data['evening'];
        const dateArray = Object.keys(date).map(i => date[i]);
        const morningArray = Object.keys(morning).map(i => morning[i]);
        const eveningArray = Object.keys(evening).map(i => evening[i]);
        let i = 1;
        this.dataPointsWeekDate.length = 0;
        for (let element of dateArray) {
          this.dataPointsWeekDate.push({ label: `tuần ${i}`, y: element });
          i++;
        }
        let j = 1;
        this.dataPointsWeekMorning.length = 0;
        for (let element of morningArray) {
          this.dataPointsWeekMorning.push({ label: `tuần ${i}`, y: element });
          j++;
        }
        let k = 1;
        this.dataPointsWeekNoon.length = 0;
        for (let element of eveningArray) {
          this.dataPointsWeekNoon.push({ label: `tuần ${i}`, y: element });
          k++;
        }
        this.chartWeek.render();
        this.showComboboxWeek = true;
      },
      error => {
        console.log(error);
        return;
      }
    )
  }

  selectYear(year: number){
    this.getChartMonthFromService(year);
  }

  selectMonth(month: string){
    this.getChartWeekFromService(month);
  }

  toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }

  getTotalCountFromService(){
    this.bookingService.getCountTotal().subscribe(
      api => {
        this.countBookings = api.data['bookings'];
        this.countStylists = api.data['stylists'];
        this.countCustomers = api.data['customers'];
      }
    )
  }

  // for booking <---------------------->
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
    this.bookingService.getBookingsToday().subscribe(
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
