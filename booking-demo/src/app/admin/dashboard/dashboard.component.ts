import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../models/canvasjs.min';
import { BookingService } from '../booking/booking.service';
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
  years = [2018, 2019];
  showComboboxMonth : any;
  //week
  dataPointsWeekDate = [];
  dataPointsWeekMorning = [];
  dataPointsWeekNoon = [];
  chartWeek : any;
  months = ['2018-12', '2018-11', '2018-05', '2018-04', '2018-03', '2018-02'];
  showComboboxWeek : any;

  //count total
  countBookings: number;
  countStylists: number;
  countCustomers: number;
  constructor(private bookingService: BookingService) { }

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
}
