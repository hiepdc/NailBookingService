import { Component, OnInit } from '@angular/core';
import { Stylist } from '../models/stylist';
import { HttpClient } from '@angular/common/http';
import { StylistService } from '../stylist.service';
import { LoaderService } from '../core';
import { NgForm }   from '@angular/forms';

import { ShiftApi } from '../models/shiftApi';
import { DateTime } from '../models/dateTime';
import { PinApi } from '../models/pinApi';
import { Customer } from '../models/customer';
import { BookingApi } from '../models/bookingApi';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css','../../assets/css/swiper.min.css'
  ]
})
export class PageContentComponent implements OnInit {

  constructor(private stylistService: StylistService, public loaderService: LoaderService) {
  }

  //handle swiper
  public config1: SwiperConfigInterface = {
    slidesPerView: 6,
    slidesPerColumn: 4,
    spaceBetween: -10,
    mousewheel: true,
    scrollbar: true,
    navigation: true,
  };

  public config2: SwiperConfigInterface = {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  //handle radio button
  selectedService: number = 1;
  radioChangeHandler(event: any) {
    this.selectedService = +event.target.value;
  }

  //handle stylist
  stylist: Stylist;
  stylists: Stylist[];
  stylistId: number = -1;

  //handle shift
  shiftApi: ShiftApi;
  timeline: string[];
  status1: string[];
  status2: string[][];//giống statusSample2
  statusSample1: string[] = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',
    '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47',
    '48', '49', '50', '51'
  ];
  statusSample2: string[][] = [
    ['0', '1', '2', '3'], ['4', '5', '6', '7'], ['8', '9', '10', '11'], ['12', '13', '14', '15'],
    ['16', '17', '18', '19'], ['20', '21', '22', '23'], ['24', '25', '26', '27'], ['28', '29', '30', '31'],
    ['32', '33', '34', '35'], ['36', '37', '38', '39'], ['40', '41', '42', '43'], ['44', '45', '46', '47'],
    ['48', '49', '50', '51']
  ];

  //handle date
  day_now = new Date();
  today = new Date();
  tomorrow = new Date(this.day_now.setDate(this.day_now.getDate() + 1));;
  afterTomorrow = new Date(this.day_now.setDate(this.day_now.getDate() + 1));
  weeksOfzhTW = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
  threeDay = ["Hôm nay", "Ngày mai", "Ngày kia"];
  selectedDate: string = this.formatDate(this.today);
  date_
  threeDate = [
    {
      "label": "Hôm nay",
      "day": this.weeksOfzhTW[this.today.getDay()],
      "date": this.today,
      "id": 0
    },
    {
      "label": "Ngày mai",
      "day": this.weeksOfzhTW[this.tomorrow.getDay()],
      "date": this.tomorrow,
      "id": 1
    },
    {
      "label": "Ngày kia",
      "day": this.weeksOfzhTW[this.afterTomorrow.getDay()],
      "date": this.afterTomorrow,
      "id": 2
    }
  ];

  ngOnInit() {
    this.getStylistFromService();
    this.getShiftByDefault(this.selectedService, this.formatDate(this.today));
  }

  selectDate(dateTime: DateTime): void {
    //this.dateTime = dateTime;
    this.selectedDate = this.formatDate(dateTime.date);
    if (this.stylistId == -1) {
      this.getShiftByDefault(this.selectedService, this.selectedDate);
    } else {
      this.getShiftByStylist(this.selectedService, this.stylistId, this.selectedDate);
    }
    console.log(this.selectedDate);
  }

  /*------  Get data from db --------*/
  getStylistFromService(): void {
    this.stylistService.getStylists().subscribe(
      stylistApi => this.stylists = stylistApi.data
    );
  }

  //get shift which combine all stylist nad change to status
  getShiftByDefault(serviceId: number, date: string): void {
    this.stylistService.getShiftByDefault(serviceId, date).subscribe(
      (shiftApi) => {
        this.timeline = shiftApi.data;
        this.stylistId = -1;
        console.log(`timeline default : ${this.timeline}`);
        console.log(`stylistId default : ${this.stylistId}`);
        if (Array.isArray(this.timeline) && this.timeline.length) {
          this.status1 = [];
          var j: number = 0;
          for (var i: number = 0; i < 52; i++) {
            var stringi = i.toString();
            if (stringi === this.timeline[j]) {
              this.status1[i] = stringi;
              j++;
            } else {
              this.status1[i] = "-1";
            }
          }
          console.log(`status1: ${this.status1}`);
        } else {
          console.log(`Không có dữ liệu trả về`);
        }
      }
    );
  }

  getShiftByStylist(serviceId: number, stylistId: number, date: string): void {
    this.stylistService.getShiftByStylist(serviceId, stylistId, date).subscribe(
      (shiftApi) => {
        this.timeline = shiftApi.data;
        this.stylistId = stylistId;
        console.log(`timeline default : ${this.timeline}`);
        console.log(`stylistId : ${this.stylistId}`);
        if (Array.isArray(this.timeline) && this.timeline.length) {
          this.status1 = [];
          var j: number = 0;
          for (var i: number = 0; i < 52; i++) {
            var stringi = i.toString();
            if (stringi === this.timeline[j]) {
              this.status1[i] = stringi;
              j++;
            } else {
              this.status1[i] = "-1";
            }
          }
          console.log(`status1: ${this.status1}`);
        } else {
          console.log(`Không có dữ liệu trả về`);
        }
      }
    );
  }

  //handle form
  submitted = false;
  verifyCode = false;
  phoneNumber: number;
  pinApi: PinApi;
  bookingApi: BookingApi;
  onSubmitBooking(form: NgForm): void {
    console.log(JSON.stringify(form.value));
    this.stylistService.checkPhoneOfCustomer(form.value).subscribe(
      (pinApi: PinApi) => { this.pinApi = pinApi; console.log(this.pinApi.success); },
    );
  }

  //handle hour which choose
  selectedHour: string = "";
  click_hour(hour: string): void {
    this.selectedHour = hour;
    console.log(`selected hour: ${this.selectedHour}`);
  }

  //transform status to string
  changeStatusToString(status: string): string {
    //case bắt đâu từ 1 có thể thêm 1 ô trống nữa
    switch (status) {
      case '0': return "9:00"; case '1': return "9:15"; case '2': return "9:30"; case '3': return "9:45";
      case '4': return "10:00"; case '5': return "10:15"; case '6': return "10:30"; case '7': return "10:45";
      case '8': return "11:00"; case '9': return "11:15"; case '10': return "11:30"; case '11': return "11:45";
      case '12': return "12:00"; case '13': return "12:15"; case '14': return "12:30"; case '15': return "12:45";
      case '16': return "13:00"; case '17': return "13:15"; case '18': return "13:30"; case '19': return "13:45";
      case '20': return "14:00"; case '21': return "14:15"; case '22': return "14:30"; case '23': return "14:45";
      case '24': return "15:00"; case '25': return "15:15"; case '26': return "15:30"; case '27': return "15:45";
      case '28': return "16:00"; case '29': return "16:15"; case '30': return "16:30"; case '31': return "16:45";
      case '32': return "17:00"; case '33': return "17:15"; case '34': return "17:30"; case '35': return "17:45";
      case '36': return "18:00"; case '37': return "18:15"; case '38': return "18:30"; case '39': return "18:45";
      case '40': return "19:00"; case '41': return "19:15"; case '42': return "19:30"; case '43': return "19:45";
      case '44': return "20:00"; case '45': return "20:15"; case '46': return "20:30"; case '47': return "20:45";
      case '48': return "21:00"; case '49': return "21:15"; case '50': return "21:30"; case '51': return "21:45";
    }
  }

  //get stylist id and transform to name
  changeStylistIdToName(): string {
    if (this.stylistId == -1) {
      return "Châm Trâm Nail đã xếp stylist tốt nhất cho chị";
    } else {
      return "Chị đã chọn ......";
    }
  }

  //transform date by format yyyy-MM-dd
  formatDate(date: Date): string {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

}
