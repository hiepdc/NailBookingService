import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../models/canvasjs.min';
import { BookingService } from '../booking/booking.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataPointsMonthMorning = [];
  dataPointsMonthNoon = [];
  // dataPointsMonthDate = [];
  // chart :any;
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    let dataPointsMonthDate = [];
    let dataPointsMonthMorning = [];
    let dataPointsMonthNoon = [];
    this.bookingService.getChartMonth(2018).subscribe(
      api => {
        let date = api.data['date'];
        let morning= api.data['morning'];
        let evening= api.data['evening'];
        const dateArray = Object.keys(date).map(i => date[i]);
        const morningArray = Object.keys(morning).map(i => morning[i]);
        const eveningArray = Object.keys(evening).map(i => evening[i]);
        let i = 1;
        for (let element of dateArray) {
          dataPointsMonthDate.push({ label: `tháng ${i}`, y: element });
          i++;
        }
        let j =1;
        for (let element of morningArray) {
          dataPointsMonthMorning.push({ label: `tháng ${i}`, y: element });
          j++;
        }
        let k =1;
        for (let element of eveningArray) {
          dataPointsMonthNoon.push({ label: `tháng ${i}`, y: element });
          k++;
        }
        chart.render();

      },
      error => {
        console.log(error);
        return;
      }
    )
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      title: {
        text: "Thống kê lịch đặt"
      },
      axisY: {
        includeZero: false,
        title: "Số lượng lịch đặt",
        // suffix: "lượt"
      },
      toolTip: {
        shared: "true"
      },
      legend: {
        cursor: "pointer",
        itemclick: toggleDataSeries
      },
      data: [{
        type: "spline",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##",
        name: "Buối sáng",
        dataPoints: dataPointsMonthMorning
      },
      {
        type: "spline",
        showInLegend: true,
        visible: true,
        yValueFormatString: "##",
        name: "Buổi chiều",
        dataPoints: dataPointsMonthNoon
      },
      {
        type: "spline",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##",
        name: "Cả ngày",
        dataPoints: dataPointsMonthDate
      }]
    });
    function toggleDataSeries(e) {
      if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      chart.render();
    }

  }

}
