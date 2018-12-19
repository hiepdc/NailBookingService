webpackJsonp(["core.module"],{

/***/ "./src/app/core/aboutus/aboutus.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ===== content starts  ===== -->\n<div id=\"content\" class=\"col-md-10 split\">\n  <!-- ===== About section starts  ===== -->\n  <div id=\"aboutus\">\n    <div class=\"content-wrapper\">\n      <div class=\"content-box container\">\n        <div class=\"inside-wrapper container\">\n          <!-- section-heading -->\n          <div class=\"section-heading\">\n            <h2>About Us</h2>\n          </div>\n          <!-- /section-heading -->\n          <div class=\"row\">\n            <!-- image -->\n            <div class=\"col-md-6\">\n              <img class=\"img-responsive img-paragraph center-block\" src=\"../../../assets/img/services/service4.jpg\" alt=\"\">\n            </div>\n            <div class=\"col-lg-6\">\n              <h4>Since 1990 with you</h4>\n              <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie,\n                musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li\n                pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On\n                refusa continuar payar custosi traductores.</p>\n              <ul class=\"custom pl-0\">\n                <li>Europan lingues es membres del sam familie</li>\n                <li>Ipuset phas ellus ac sodales Lorem ipsum dolor</li>\n                <li>Aliquam erat volut pat phas ellu</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row margin1\">\n            <!-- featured box 1 -->\n            <div class=\"col-md-4\">\n              <div class=\"serviceBox\">\n                <!-- featured icon -->\n                <div class=\"service-icon\">\n                  <i class=\"flaticon-massage-spa-body-treatment\"></i>\n                </div>\n                <!-- feature content -->\n                <div class=\"service-content\">\n                  <h5>Professional Staff</h5>\n                  <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum malesuada.\n                  </p>\n                </div>\n              </div>\n            </div>\n            <!--/col-md-4  -->\n            <!-- featured box 2 -->\n            <div class=\"col-md-4\">\n              <div class=\"serviceBox\">\n                <!-- featured icon -->\n                <div class=\"service-icon\">\n                  <i class=\"flaticon-spa-cream-pot-of-natural-flowers\"></i>\n                </div>\n                <!-- feature content -->\n                <div class=\"service-content\">\n                  <h5>Quality Products</h5>\n                  <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum malesuada.\n                  </p>\n                </div>\n              </div>\n            </div>\n            <!--/col-md-4  -->\n            <!-- featured box 3 -->\n            <div class=\"col-md-4\">\n              <div class=\"serviceBox\">\n                <!-- featured icon -->\n                <div class=\"service-icon\">\n                  <i class=\"flaticon-relaxing-spa-light-of-burning-candles-couple\"></i>\n                </div>\n                <!-- feature content -->\n                <div class=\"service-content\">\n                  <h5>Relaxing Enviroment</h5>\n                  <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum malesuada.\n                  </p>\n                </div>\n              </div>\n            </div>\n            <!--/col-md-4 -->\n          </div>\n          <!--/row -->\n        </div>\n        <!--/ inside-wrapper  -->\n       \n      </div>\n      <!-- /content-box -->\n    </div>\n    <!-- / content-wrapper -->\n  </div>\n  <!-- /about us ends -->\n</div>\n<!-- /content -->"

/***/ }),

/***/ "./src/app/core/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__("./src/app/core/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("./src/app/core/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/core/booking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_stylistsApi__ = __webpack_require__("./src/app/core/models/stylistsApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_shiftApi__ = __webpack_require__("./src/app/core/models/shiftApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_checkPhoneApi__ = __webpack_require__("./src/app/core/models/checkPhoneApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_customerApi__ = __webpack_require__("./src/app/core/models/customerApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_bookingApi__ = __webpack_require__("./src/app/core/models/bookingApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_stylistApi__ = __webpack_require__("./src/app/core/models/stylistApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_pinApi__ = __webpack_require__("./src/app/core/models/pinApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_serviceApi__ = __webpack_require__("./src/app/core/models/serviceApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_serviceItemApi__ = __webpack_require__("./src/app/core/models/serviceItemApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var httpOptions2 = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
var BookingService = /** @class */ (function () {
    function BookingService(http) {
        this.http = http;
        this.stylistURL = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].api_url + "/stylists";
        this.shiftURL = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].api_url + "/shifts";
        this.bookingURL = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].api_url + "/bookings";
        this.customerURL = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].api_url + "/customers";
        this.serviceURL = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].api_url + "/services";
        this.serviceItemUrl = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].api_url + "/service-items";
    }
    //get all stylist from db
    BookingService.prototype.getServices = function () {
        return this.http.get(this.serviceURL).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (receivedServiceApi) { return console.log(receivedServiceApi); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_11__models_serviceApi__["a" /* ServiceApi */]()); }));
    };
    BookingService.prototype.getServiceItemsByServiceId = function (serviceId) {
        return this.http.get(this.serviceItemUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (receivedServiceItemApi) { return console.log(receivedServiceItemApi); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_12__models_serviceItemApi__["a" /* ServiceItemApi */]()); }));
    };
    //get all service item
    BookingService.prototype.getAllServiceItems = function () {
        return this.http.get(this.serviceURL).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (receivedServiceApi) { return console.log(receivedServiceApi); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_11__models_serviceApi__["a" /* ServiceApi */]()); }));
    };
    //get all stylist from db
    BookingService.prototype.getStylists = function () {
        return this.http.get(this.stylistURL).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (receivedStylists) { return console.log(receivedStylists); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_4__models_stylistsApi__["a" /* StylistsApi */]()); })
        //thêm property vào new StylistApi để biết lỗi
        );
    };
    BookingService.prototype.getStylistById = function (stylistId) {
        var url = this.stylistURL + "/" + stylistId;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (receivedStylist) {
            console.log(receivedStylist);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_9__models_stylistApi__["a" /* StylistApi */]()); }));
    };
    //#region get shift by stylist
    BookingService.prototype.getShiftByStylist = function (serviceId, stylistId, date) {
        var url = this.shiftURL + "/stylist/" + serviceId + "/" + stylistId + "/" + date;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (receivedShifts) { return console.log(receivedShifts); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__models_shiftApi__["a" /* ShiftApi */]()); }));
    };
    //#endregion
    //check phone number of customer
    BookingService.prototype.checkPhoneOfCustomer = function (body) {
        var url = this.bookingURL + "/create-pin";
        return this.http.post(url, body, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (checkPhoneApi) { return console.log(checkPhoneApi); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_6__models_checkPhoneApi__["a" /* CheckPhoneApi */]()); }));
    };
    BookingService.prototype.checkPinCode = function (phoneNumber, pin_code) {
        var url = this.bookingURL + "/verify-pin";
        var body = {
            phone_number: phoneNumber,
            pin_code: pin_code
        };
        return this.http.post(url, body, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (pinApi) { return console.log(pinApi); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_10__models_pinApi__["a" /* PinApi */]()); }));
    };
    //kiem tra xem khach hang da co lich dat nao chua
    BookingService.prototype.checkExistBooking = function (phoneNumber) {
        var url = this.bookingURL + "/check-exist-booking";
        var body = {
            phone_number: phoneNumber,
        };
        return this.http.post(url, body, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (bookingApi) { return console.log(bookingApi); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_8__models_bookingApi__["a" /* BookingApi */]()); }));
    };
    BookingService.prototype.addNewBooking = function (phoneNumber, stylist_id, date, start_time, service_id, customerName) {
        var url = this.bookingURL + "/add-new-booking";
        var body = {
            phone_number: phoneNumber,
            stylist_id: stylist_id,
            date: date,
            start_time: start_time,
            service_id: service_id,
            customer_name: customerName,
        };
        return this.http.post(url, body, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (bookingApi) { return console.log(bookingApi); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_8__models_bookingApi__["a" /* BookingApi */]()); }));
    };
    BookingService.prototype.editBooking = function (phoneNumber, stylist_id, date, start_time, service_id) {
        var url = this.bookingURL + "/edit-booking";
        var body = {
            phone_number: phoneNumber,
            stylist_id: stylist_id,
            date: date,
            start_time: start_time,
            service_id: service_id
        };
        return this.http.post(url, body, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (bookingApi) { return console.log(bookingApi); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_8__models_bookingApi__["a" /* BookingApi */]()); }));
    };
    BookingService.prototype.deleteBooking = function (phoneNumber) {
        var url = this.bookingURL + "/delete-booking/0" + phoneNumber;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (bookingApi) {
            console.log("message = " + bookingApi.message);
            console.log("Deleted movie with phone number = " + phoneNumber);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_8__models_bookingApi__["a" /* BookingApi */]()); }));
    };
    BookingService.prototype.addNewCustomer = function (customerName, phoneNumber) {
        var body = {
            customer_name: customerName,
            phone_number: phoneNumber
        };
        return this.http.post(this.customerURL, body, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (customerApi) { return console.log("customerApi: " + JSON.stringify(customerApi)); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_7__models_customerApi__["a" /* CustomerApi */]()); }));
    };
    BookingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], BookingService);
    return BookingService;
}());



/***/ }),

/***/ "./src/app/core/booking/booking.component.css":
/***/ (function(module, exports) {

module.exports = " /*=========================== Services ============================ */\r\n .serviceBox {\r\n    margin-bottom: 6px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n   }\r\n .service-icon img {\r\n   /*  border: 5px solid; */\r\n    max-width: 80%;\r\n    margin: 0 auto;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    transition: all 0.3s ease-in-out;\r\n   }\r\n .service-icon i {\r\n    font-size: 90px;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    transition: all 0.3s ease-in-out;\r\n   }\r\n .serviceBox .service-content {\r\n    margin-top: 0px;\r\n   }\r\n .service-hover-box img {\r\n    -webkit-transition: all 0.8s;\r\n    transition: all 0.8s;\r\n   }\r\n /*=========================== Booking ============================ */\r\n #inside-wrapper-bookings{\r\n  padding: 50px 200px 70px 145px;\r\n}\r\n .choose-service, .choose-stylist, .choose-time{\r\n    margin: auto;\r\n    padding: 0px 50px 0 50px;\r\n  }\r\n .category-faq {\r\n      background-color: #343434;\r\n      font-weight: bold;\r\n      color: #fff;\r\n      font-size: 16px;\r\n      padding: 0 20px;\r\n      margin: 40px 0 30px;\r\n      height: 50px;\r\n      line-height: 50px;\r\n   }\r\n .panel{\r\n      border: 0;\r\n      -webkit-box-shadow: none;\r\n              box-shadow: none;\r\n   }\r\n .panel-title{\r\n    color: #000;\r\n   }\r\n .item-question{\r\n      border: 1px solid #ececec;\r\n      display: block;\r\n      line-height: 11px;\r\n      padding: 9px 50px 13px 70px;\r\n      font-weight: bold;\r\n      font-size: 18px;\r\n      position: relative;\r\n      color: #111;\r\n  }\r\n .panel-title > a:hover, \r\n  .panel-title > a:active, \r\n  .panel-title > a:focus  {\r\n      text-decoration:none;\r\n    color: #000;\r\n  }\r\n .panel-number {\r\n        width: 35px;\r\n        height: 35px;\r\n        line-height: 32px;\r\n        text-align: center;\r\n        border-radius: 100%;\r\n        background-color: #ececec;\r\n        display: inline-block;\r\n        position: absolute;\r\n        left: 17px;\r\n        top: 50%;\r\n        -webkit-transform: translateY(-50%);\r\n                transform: translateY(-50%);\r\n   }\r\n .panel-body {\r\n      padding: 20px 20px 20px 96px;\r\n      /* font-size: 20px; */\r\n      /* line-height: 0px; */\r\n   }\r\n #collapse1 .form-group{\r\n     margin-bottom: 0;\r\n   }\r\n #collapse2 label{\r\n     font: 20px normal;\r\n   }\r\n #choose-stylist{\r\n    font-size: 10px;\r\n    padding: 12px 24px 0px 100px;\r\n   }\r\n #choose-service{\r\n    padding: 10px 20px 3px 96px;  \r\n   }\r\n #choose-stylist img{\r\n    width: 50%;\r\n   }\r\n #choose-stylist h5{\r\n    margin-bottom: 4px;\r\n    font: 20px normal;\r\n    color: #000;\r\n   }\r\n #choose-stylist .owl-dots{\r\n  margin-top: 0px;\r\n  }\r\n #choose-hours{\r\n      padding: 12px 20px 20px 96px;\r\n  }\r\n #enter-phone{\r\n    padding: 6px 20px 2px 93px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n #enter-phone .form-control{\r\n    font: 24px normal;\r\n    width: 100%;\r\n    /* height: 34px; */\r\n    color: #000;\r\n  }\r\n .days{\r\n      background-color: /* #72b8ff */ white;\r\n      color: black;\r\n      font: 22px normal;\r\n      text-align:center;\r\n      padding-bottom: 0px;\r\n  }\r\n .days .calendar-7-day{\r\n      display:inline-block;\r\n      cursor:pointer;\r\n      width: 33.13%;\r\n      padding-top: 5px;\r\n      padding-bottom: 5px;\r\n      border: 1px solid #ccc!important;\r\n  }\r\n .days .calendar-7-day:hover,.days .calendar-7-day.active{\r\n      background-color: /* #2874c6 */ #000;\r\n      color: white;\r\n  }\r\n .calendar-7-hour{\r\n      display:inline-block;\r\n      -webkit-box-sizing:border-box;\r\n              box-sizing:border-box;\r\n      width: 93%;\r\n      height: 100%;\r\n      font: 32px normal;\r\n      padding: 14px 10px 14px 10px;\r\n      color:#4a4a4a;\r\n      text-align:center;\r\n      cursor:pointer;\r\n      margin: 4px 5px 5px 2px;\r\n      border: 2px solid #ececec;\r\n \r\n  }\r\n .calendar-7-hour:hover{\r\n      background-color:/* #58ACFA #F6D8CE*/ #58ACFA;\r\n      color:white;\r\n      border-radius:3px\r\n  }\r\n .calendar-7-hour.active{\r\n    background-color: /* #FE2E64 */ #000;\r\n    color:white;\r\n    border-radius:3px;\r\n  }\r\n .calendar-7-hour.disabled{\r\n      color:rgb(7, 7, 7);\r\n      background-color:#eee;\r\n      /* cursor:not-allowed; */\r\n      pointer-events: none\r\n  }\r\n #choose-datetime{\r\n    margin: auto;\r\n    width: 100%;\r\n    \r\n  }\r\n .border{\r\n    border: 5px solid #ce6671; \r\n  }\r\n .btn{\r\n    float: right;\r\n    margin: 0px 2px 0 2px;\r\n  }\r\n .col-3{\r\n    height: 70px;\r\n  }\r\n .text-date-1{\r\n    display:block;\r\n  }\r\n .text-date-2{\r\n    display:block;\r\n        margin-top: 8px;\r\n  }\r\n .timeline{margin-top: -4px;}\r\n .ng-valid[required], .ng-valid.required  {\r\n   border-bottom: 3px solid #42A948; /* green */\r\n }\r\n .ng-invalid:not(form)  {\r\n   border-bottom: 2px solid /*#af2624*/ #87314e; \r\n }\r\n /* For Firefox */\r\n input[type='number'] {\r\n  -moz-appearance:textfield;\r\n}\r\n /* Webkit browsers like Safari and Chrome */\r\n input[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n .backdrop{\r\n  background-color:rgba(0,0,0,0.6);\r\n  position:fixed;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n  height:100vh;\r\n  z-index: 1;\r\n  }\r\n #modalVerifyPin{\r\n    text-align: center;\r\n  }\r\n .inputPin{\r\n    width: 50%;\r\n    font-size: 25px;\r\n    height: 40px;\r\n    margin-left: 25%;\r\n    margin-right: 25%;\r\n    text-align: center;\r\n  }\r\n #modalChangeBooking{\r\n    text-align: center;\r\n  }\r\n .notification{\r\n    margin-top: 10px;\r\n    margin-bottom: 0;\r\n    color: #af001d;\r\n    font-size: 20px;\r\n  }\r\n h5{\r\n    margin-bottom: 20px;\r\n  }\r\n .form-control{\r\n    font-size: 19px;\r\n  }\r\n .control-label{\r\n    text-align: left;\r\n    padding-top: 11px;\r\n  }\r\n .input-group-addon{\r\n  font-size: 20px;\r\n}\r\n .form-control-static{\r\n  font-size: 19px;\r\n}\r\n .form-group{\r\n  margin-bottom: 5px;\r\n  padding: 0 40px 0 30px;\r\n}\r\n .input-phone{\r\n  width: 50%;\r\n}\r\n .customer-name{\r\n  width: 50%;\r\n  margin-left: 20px;\r\n}\r\n .customer-name p {\r\n  font: 30px normal;\r\n  margin: 0;\r\n}\r\n .verifyPin, .changeBoooking{  \r\n  margin-top: 150px\r\n}\r\n /*=========================== Media queries ============================ */\r\n /* Small devices (landscape phones, 544px) */\r\n @media (max-width: 480px ){\r\n  #inside-wrapper-bookings{\r\n    padding: 0!important;\r\n  }\r\n  .input-phone{\r\n    width: 60%;\r\n  }\r\n  #choose-stylist img{\r\n    width: 58%;\r\n   }\r\n   #choose-stylist h5{\r\n     font: 18px normal;\r\n   }\r\n  #enter-phone{\r\n    padding: 6px 20px 2px 72px;\r\n  }\r\n  #enter-phone .form-control{\r\n    font: 22px normal;\r\n  }\r\n  #choose-service{\r\n    padding: 10px 20px 3px 72px;\r\n  }\r\n  #choose-stylist{\r\n    padding: 12px 24px 0px 15px;\r\n  }\r\n  #choose-hours{\r\n    padding: 12px 20px 0px 22px;\r\n  }\r\n  .calendar-7-hour{\r\n    width: 89%;\r\n    font: 21px normal;\r\n  }\r\n  .days{\r\n    font:16px normal;\r\n  }\r\n  .btn-hour{\r\n    margin-left: -10px;\r\n  }\r\n  .item-question{\r\n    font-size: 16px;\r\n  }\r\n  #collapse2 label {\r\n    font: 20px normal;\r\n  }\r\n  .btn{\r\n    font-size: 14px;\r\n    margin-right: 10px;\r\n  }\r\n  .verifyPin, .changeBoooking{\r\n    margin-top: 195px;\r\n  }\r\n  .bookingForm2{\r\n    margin-top: 95px;\r\n  }\r\n  .form-group{\r\n    padding:  0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-bottom: 0px;\r\n  }\r\n  .control-label{\r\n    width: 20%;\r\n  }\r\n  .modal-dialog{\r\n    overflow-y: initial !important\r\n}\r\n.modal-body{\r\n    /* height: 250px; */\r\n    /* overflow-y: auto; */\r\n}\r\n\r\n.modal-body h5{\r\n  font-size: 18px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.modal-header h4{\r\n  font-size: 19px;\r\n}\r\n\r\n.modal{\r\n  overflow-y: scroll;\r\n}\r\n\r\n}\r\n @media (max-width: 320px ){\r\n  .calendar-7-hour {\r\n    width: 82%;\r\n    font: 17px normal;\r\n    border: 1px solid #ececec;\r\n}\r\n}\r\n /* Medium devices (tablets, 768px) The navbar toggle appears at this breakpoint */\r\n @media (max-width: 768px) {\r\n  .modal-dialog{\r\n    overflow-y: initial !important;\r\n    margin-top: 95px;\r\n}\r\n.modal{\r\n  overflow-y: scroll;\r\n}\r\n}\r\n /* Medium- Large devices (desktops, 992px) */\r\n @media (max-width: 992px) {\r\n  \r\n}\r\n /* Large devices (large desktops, min 1200px ) */\r\n @media (min-width: 1200px) {\r\n\r\n}\r\n /* Large devices (large desktops, max 1200px) */\r\n @media (max-width: 1199px) {\r\n  #inside-wrapper-bookings{\r\n    padding: 0!important;\r\n  }   \r\n}\r\n /* Large devices ( min 1500px) */\r\n @media (min-width: 1500px) {\r\n  \r\n }\r\n .timeline:before{\r\n  width: 0;\r\n }\r\n .timeline{\r\n  padding: 0;\r\n }\r\n"

/***/ }),

/***/ "./src/app/core/booking/booking.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaderService.isLoading | async\">\r\n    <app-pre-loader></app-pre-loader>\r\n  </div>\r\n  <!-- ===== content starts  ===== -->\r\n  <div id=\"content\" class=\"col-md-10 split\" *ngIf=\"!(loaderService.isLoading | async)\">\r\n    <!-- ===== Booking section starts  ===== -->\r\n    <div class=\"content-wrapper\">\r\n      <div class=\"content-box container\">\r\n        <div class=\"\" id=\"inside-wrapper-bookings\">\r\n          <!-- <div class=\"section-heading\">\r\n              <h2>Đặt Lịch</h2>\r\n            </div> -->\r\n  \r\n          <!--Booking-1-->\r\n          <div id=\"booking\" [hidden]=\"submitted\">\r\n            <form (ngSubmit)=\"onSubmitBooking(bookingForm)\" #bookingForm=\"ngForm\">\r\n              <div class=\"panel-group\" id=\"accordion2\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                <div class=\"panel panel-default\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a role=\"button\" class=\"item-question collapsed\" data-toggle=\"collapse\" href=\"#collapse1\"\r\n                      aria-expanded=\"true\" aria-controls=\"collapse1\">\r\n                      <span class=\"panel-number\">1</span>Nhập Số Điện Thoại\r\n                    </a>\r\n                  </h4>\r\n                  <div id=\"collapse1\" class=\"panel-collapse collapse in\" role=\"tabpanel\">\r\n                    <div class=\"panel-body\" id=\"enter-phone\">\r\n                      <!-- <div class=\"form-group\">\r\n                        <input type=\"tel\" placeholder=\"\" class=\"form-control\" maxlength=\"10\" pattern=\"(03|09|07|08|05)+([0-9]{8})\\b\"\r\n                          [(ngModel)]=\"phoneNumber\" name=\"phone_number\" required>\r\n                         <p>{{phoneNumber}}</p> \r\n                      </div> -->\r\n                      <div class=\"input-group input-phone\">\r\n                        <span class=\"input-group-addon\"><i class=\"fas fa-phone\"></i></span>\r\n                        <input type=\"tel\" placeholder=\"\" class=\"form-control\" maxlength=\"10\" pattern=\"(03|09|07|08|05)+([0-9]{8})\\b\"\r\n                          [(ngModel)]=\"phoneNumber\" name=\"phone_number\" required>\r\n                        <!-- <p>{{number}}</p> -->\r\n                      </div>\r\n                      <!-- <div class=\"customer-name\">\r\n                          <p>{{phoneNumber}}</p>\r\n                        </div> -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"panel panel-default\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a role=\"button\" class=\"item-question collapsed\" data-toggle=\"collapse\" href=\"#collapse2\"\r\n                      aria-expanded=\"false\" aria-controls=\"collapse2\"> <span class=\"panel-number\">2</span> Chọn\r\n                      Services\r\n                    </a>\r\n                  </h4>\r\n                  <div id=\"collapse2\" class=\"panel-collapse collapse in\" role=\"tabpanel\">\r\n                    <div class=\"panel-body\" id=\"choose-service\">\r\n                      <label class=\"radio-inline\"><input type=\"radio\" name=\"service\" value=\"1\" (click)=\"clickService($event)\"\r\n                          [ngModel]=\"selectedService\">Cơ Bản</label>\r\n                      <label class=\"radio-inline\"><input type=\"radio\" name=\"service\" value=\"2\" (click)=\"clickService($event)\"\r\n                          [ngModel]=\"selectedService\">Nâng Cao</label>\r\n                      <!-- <p>Selected: {{selectedService}}</p> -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"panel panel-default\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a class=\"item-question collapsed\" role=\"button\" data-toggle=\"collapse\" href=\"#collapse3\"\r\n                      aria-expanded=\"true\" aria-controls=\"collapse3\"> <span class=\"panel-number\">3</span>\r\n                      Chọn Stylist\r\n                    </a>\r\n                  </h4>\r\n                  <div id=\"collapse3\" class=\"panel-collapse collapse in\" role=\"tabpanel\">\r\n                    <div class=\"panel-body\" id=\"choose-stylist\">\r\n  \r\n                      <swiper [config]=\"config2\" [(index)]=\"index\">\r\n  \r\n                        <div class=\"serviceBox\" (click)=\"getShiftByStylist(selectedService,-1,selectedDate,'Châm Trâm Nail đã xếp stylist tốt nhất cho anh/chị')\">\r\n                          <div class=\"service-icon\">\r\n                            <img class=\"img-responsive img-circle\" [ngClass]=\"{'border': stylistId == -1}\" src=\"../../assets/img/services/service1.jpg\"\r\n                              alt=\"\">\r\n                          </div>\r\n                          <div class=\"service-content\">\r\n                            <h5>Châm trâm chọn cho bạn</h5>\r\n                          </div>\r\n                        </div>\r\n  \r\n                        <div class=\"serviceBox\" (click)=\"getShiftByStylist(selectedService,eachStylist.id,selectedDate,eachStylist.stylist_name)\"\r\n                          *ngFor=\"let eachStylist of stylists\">\r\n                          <div class=\"service-icon\">\r\n                            <img class=\"img-responsive img-circle\" [ngClass]=\"{'border': stylistId==eachStylist.id}\"\r\n                              [src]=\"eachStylist.image_link\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"service-content\">\r\n                            <h5>{{eachStylist.stylist_name}}</h5>\r\n                          </div>\r\n                        </div>\r\n                      </swiper>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"panel panel-default\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a class=\"item-question collapsed\" role=\"button\" data-toggle=\"collapse\" href=\"#collapse4\"\r\n                      aria-expanded=\"true\" aria-controls=\"collapse4\"> <span class=\"panel-number\">4</span>\r\n                      Chọn ngày, giờ\r\n                    </a>\r\n                  </h4>\r\n                  <div id=\"collapse4\" class=\"panel-collapse collapse in\" role=\"tabpanel\">\r\n                    <div class=\"panel-body\" id=\"choose-hours\">\r\n  \r\n                      <div class=\"days\">\r\n                        <div *ngFor=\"let date of threeDate\" class=\"calendar-7-day\" [ngClass]=\"{active: formatDateYYYYmmdd(date.date)==selectedDate}\"\r\n                          (click)=\"selectDate(date)\">\r\n                          <span class=\"text-date-1\">{{date.label}}</span>\r\n                          <span class=\"text-date-2\">{{date.day}}, {{date.date|date:'dd'}}/{{date.date|date:'MM'}}</span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"timeline\">\r\n                        <div class=\"swiper-container\" [swiper]=\"config1\">\r\n                          <div class=\"swiper-wrapper\">\r\n                            <div class=\"swiper-slide\" *ngFor=\"let hour of status1; let i=index;\">\r\n                              <div class=\"calendar-7-hour\" (click)=\"click_hour(hour)\" [ngClass]=\"{disabled: hour!=statusSample1[i], active:selectedHour==hour}\">\r\n                                <div class=\"btn-hour\">{{changeStatusToStartTime(statusSample1[i])}}</div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"swiper-scrollbar\"></div>\r\n                          <div class=\"swiper-pagination\"></div>\r\n                          <div class=\"swiper-button-prev\"></div>\r\n                          <div class=\"swiper-button-next\"></div>\r\n                        </div>\r\n                      </div>\r\n                      <input type=\"number\" [(ngModel)]=\"selectedHour\" name=\"flagSelectedHour\" required hidden>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn\" [disabled]=\"bookingForm.form.invalid\">Đặt Lịch</button>\r\n            </form>\r\n          </div>\r\n  \r\n        </div>\r\n        <!-- /inside-wrapper -->\r\n      </div>\r\n      <!-- /content-box -->\r\n    </div>\r\n    <!-- /services ends -->\r\n  </div>\r\n  <!-- /content -->\r\n  \r\n  <!-- Modal Verify Pin-->\r\n  <div class=\"backdrop\" [ngStyle]=\"{'display':displayVerifyPin}\"></div>\r\n  <div id=\"modalVerifyPin\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayVerifyPin}\">\r\n    <div class=\"modal-dialog verifyPin\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <form (ngSubmit)=\"onSubmitCheckPin()\" #checkVerifyPinForm=\"ngForm\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeVerifyPin()\"><span aria-hidden=\"true\">&times;</span></button>\r\n            <h4 class=\"modal-title\">Verify Pin Number</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <input type=\"text\" class=\"inputPin form-control\" maxlength=\"4\" pattern=\"^\\d{4}$\" required [(ngModel)]=\"inputPinNumber\"\r\n              name=\"inputPinNumber\" />\r\n            <p [hidden]=\"!verified\" class=\"notification\">Anh/Chị điền sai pin code quá 3 lần. Vui lòng lấy mã Pin mới sau\r\n              10 phút</p>\r\n            <p [hidden]=\"!flagRemainingAttempts\" class=\"notification\">Anh/Chị còn {{remainingAttempts}} lần nhập sai</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn\" (click)=\"closeVerifyPin()\">Đóng</button>\r\n            <button type=\"submit\" class=\"btn\" [disabled]=\"checkVerifyPinForm.form.invalid\" [style.display]=\"verified ? 'none' : 'block'\">Check\r\n              Pin</button>\r\n            <button type=\"button\" class=\"btn\" (click)=\"getPinCode()\" [style.display]=\"verified ? 'block' : 'none'\">Get\r\n              Pin</button>\r\n          </div>\r\n        </form>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal !-->\r\n  \r\n  <!-- Modal Change Booking-->\r\n  <div class=\"backdrop\" [ngStyle]=\"{'display':displayChangeBooking}\"></div>\r\n  <div id=\"modalChangeBooking\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayChangeBooking}\">\r\n    <div class=\"modal-dialog changeBoooking\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <!-- <form (ngSubmit)=\"onSubmitChangeBooking(changeBookingForm)\" #changeBookingForm=\"ngForm\"> -->\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeChangeBooking()\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <!-- <h4 class=\"modal-title\">Verify Pin Number</h4> -->\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <h5 class=\"modal-title\">Anh/chị đã đặt gói {{bookingServiceName}}, \r\n              stylist {{bookingStylistName}}, ngày {{bookingDate}} \r\n              lúc {{bookingTime}}</h5>\r\n          <h4 class=\"modal-title\">Anh/chị có muốn đổi lịch</h4>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn\" (click)=\"closeChangeBooking()\">Đóng</button>\r\n          <button type=\"button\" class=\"btn\" (click)=\"onSubmitChangeBooking()\">Có</button>\r\n        </div>\r\n        <!-- </form> -->\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal !-->\r\n  \r\n  <!-- Modal Error Message-->\r\n  <div class=\"backdrop\" [ngStyle]=\"{'display':displayErrorMessage}\"></div>\r\n  <div id=\"modalErrorMessage\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayErrorMessage}\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <!-- <form (ngSubmit)=\"onSubmitChangeBooking(changeBookingForm)\" #changeBookingForm=\"ngForm\"> -->\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeErrorMessage()\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <!-- <h4 class=\"modal-title\">Verify Pin Number</h4> -->\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <h4 class=\"modal-title\">Đã xảy ra lỗi. Anh/Chị vui lòng thực hiện lại</h4>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn\" (click)=\"closeErrorMessage()\">Đóng</button>\r\n        </div>\r\n        <!-- </form> -->\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal !-->\r\n  \r\n  <!-- Modal Booking Form-->\r\n  <div class=\"backdrop\" [ngStyle]=\"{'display':displayBookingForm2}\"></div>\r\n  <div id=\"modalBookingForm2\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayBookingForm2}\">\r\n    <div class=\"modal-dialog bookingForm2\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <form #bookingForm2=\"ngForm\" class=\"form-horizontal\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeBookingForm2()\"><span aria-hidden=\"true\">&times;</span></button>\r\n            <h4 class=\"modal-title\" style=\"text-align: center\">Check Pin thành công</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <h5 class=\"modal-title\" style=\"text-align: center\">Thông Tin Đặt Lịch</h5>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label col-sm-3\" for=\"customer_name\">Tên:</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"tel\" placeholder=\"\" class=\"form-control\" maxlength=\"20\" [(ngModel)]=\"customerName\" name=\"name\"\r\n                  required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label col-sm-3\" for=\"phone_number\">SĐT:</label>\r\n              <div class=\"col-sm-9\">\r\n                <p class=\"form-control-static\">{{phoneNumber}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label col-sm-3\" for=\"service\">Dịch vụ:</label>\r\n              <div class=\"col-sm-9\">\r\n                <p class=\"form-control-static\">{{service}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label col-sm-3\" for=\"stylistName\">Stylist:</label>\r\n              <div class=\"col-sm-9\">\r\n                <p class=\"form-control-static\">{{stylistName}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label col-sm-3\" for=\"start_time\">Thời gian:</label>\r\n              <div class=\"col-sm-9\">\r\n                <p class=\"form-control-static\">{{changeStatusToStartTime(selectedHour)}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn\" (click)=\"closeBookingForm2()\">Đóng</button>\r\n            <button type=\"button\" class=\"btn\" [disabled]=\"bookingForm2.form.invalid\" (click)=\"onSubmitBookingForm2()\">Đặt\r\n              Lịch</button>\r\n          </div>\r\n        </form>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal !-->"

/***/ }),

/***/ "./src/app/core/booking/booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_booking_service__ = __webpack_require__("./src/app/core/confirm-booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_service__ = __webpack_require__("./src/app/core/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_handle__ = __webpack_require__("./src/app/core/http-handle/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_checkPhoneApi__ = __webpack_require__("./src/app/core/models/checkPhoneApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_customer__ = __webpack_require__("./src/app/core/models/customer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookingComponent = /** @class */ (function () {
    function BookingComponent(bookingService, loaderService, router, confirmBookingService) {
        this.bookingService = bookingService;
        this.loaderService = loaderService;
        this.router = router;
        this.confirmBookingService = confirmBookingService;
        //#region initialize global variable
        //swiper
        this.config1 = {
            slidesPerView: 6,
            slidesPerColumn: 4,
            spaceBetween: -10,
            scrollbar: true,
            navigation: true,
        };
        this.config2 = {
            slidesPerView: 4,
            spaceBetween: 0,
            navigation: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        //radio button
        this.selectedService = "1";
        this.service = "Cơ Bản";
        this.stylistId = -1;
        this.stylistName = "Châm Trâm Nail đã xếp stylist tốt nhất cho anh/chị";
        this.statusSample1 = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
            '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',
            '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47',
            '48', '49', '50', '51'
        ];
        // date
        this.day_now = new Date();
        this.today = new Date();
        this.tomorrow = new Date(this.day_now.setDate(this.day_now.getDate() + 1));
        this.afterTomorrow = new Date(this.day_now.setDate(this.day_now.getDate() + 1));
        this.weeksOfzhTW = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        this.threeDay = ["Hôm nay", "Ngày mai", "Ngày kia"];
        this.selectedDate = this.formatDateYYYYmmdd(this.today);
        this.threeDate = [
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
        this.checkPhoneApi = new __WEBPACK_IMPORTED_MODULE_5__models_checkPhoneApi__["a" /* CheckPhoneApi */]();
        //hour which choose "1","2","3"
        this.selectedHour = "";
        //modal
        this.displayVerifyPin = 'none';
        //customer
        this.customer = new __WEBPACK_IMPORTED_MODULE_6__models_customer__["a" /* Customer */](0, "", "", 0);
        this.verified = false;
        this.flagRemainingAttempts = false;
        //change booking
        this.displayChangeBooking = 'none';
        //error message
        this.displayErrorMessage = 'none';
        //booking form 2
        this.displayBookingForm2 = 'none';
    }
    ;
    //#endregion
    BookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.confirmBookingService.currentPhoneNumber.subscribe(function (phoneNumber) { return _this.phoneNumber = phoneNumber; });
        this.getStylistFromService();
        this.getShiftByStylist(this.selectedService, this.stylistId, this.selectedDate, this.stylistName);
        //this.openBookingForm2();
        //this.openVerifyPin();
    };
    /*------  Put data to service ---------*/
    BookingComponent.prototype.addDataToConfirmBookingService = function () {
        this.confirmBookingService.changeHour(this.selectedHour);
        this.confirmBookingService.changeDate(this.selectedDate);
        this.confirmBookingService.changeCustomerName(this.customerName);
        this.confirmBookingService.changeStylistName(this.stylistName);
    };
    /*------  Get data from db --------*/
    BookingComponent.prototype.getStylistFromService = function () {
        var _this = this;
        this.bookingService.getStylists().subscribe(function (stylistsApi) { return _this.stylists = stylistsApi.data; });
    };
    BookingComponent.prototype.getShiftByStylist = function (serviceId, stylistId, date, stylistName) {
        var _this = this;
        this.bookingService.getShiftByStylist(serviceId, stylistId, date).subscribe(function (shiftApi) {
            _this.timeline = shiftApi.data;
            _this.stylistId = stylistId;
            _this.stylistName = stylistName;
            console.log("timeline default : " + _this.timeline);
            console.log("stylistId : " + _this.stylistId);
            console.log("stylistName : " + _this.stylistName);
            if (Array.isArray(_this.timeline) && _this.timeline.length) {
                _this.status1 = [];
                var j = 0;
                for (var i = 0; i < 52; i++) {
                    var stringi = i.toString();
                    if (stringi === _this.timeline[j]) {
                        _this.status1[i] = stringi;
                        j++;
                    }
                    else {
                        _this.status1[i] = "-1";
                    }
                }
                console.log("status1: " + _this.status1);
            }
            else {
                _this.status1 = [];
                for (var i = 0; i < 52; i++) {
                    _this.status1[i] = "-1";
                }
                console.log("status1: " + _this.status1);
                console.log("L\u1ECBch \u0111\u00E3 full");
            }
        });
    };
    BookingComponent.prototype.getPinCode = function () {
        var _this = this;
        var body = { phone_number: this.phoneNumber };
        this.bookingService.checkPhoneOfCustomer(body).subscribe(function (checkPhoneApi) {
            console.log("checkPhoneApi message: " + _this.checkPhoneApi.message);
            _this.verified = false;
            _this.flagRemainingAttempts = false;
        });
    };
    BookingComponent.prototype.onSubmitBooking = function (form) {
        var _this = this;
        console.log(form.value);
        this.bookingService.checkPhoneOfCustomer(form.value).subscribe(function (checkPhoneApi) {
            _this.checkPhoneApi = checkPhoneApi;
            console.log("checkPhoneApi message" + _this.checkPhoneApi.message);
            if (_this.checkPhoneApi.data.check == false) {
                //khách hàng đã có trong hệ thống
                _this.customerName = _this.checkPhoneApi.data.customer.customer_name;
                _this.customerId = _this.checkPhoneApi.data.customer.id;
                //0. kiểm tra khách hàng đã có lịch chưa
                _this.bookingService.checkExistBooking(_this.phoneNumber).subscribe(function (bookingApi) {
                    _this.bookingApi = bookingApi;
                    if (_this.bookingApi.data === null) {
                        //1.thực hiện add booking với khách hàng đã có trong hệ thống
                        _this.bookingService.addNewBooking(_this.phoneNumber, _this.stylistId, _this.selectedDate, +_this.selectedHour, +_this.selectedService, _this.customerName).subscribe(function (bookingApi) {
                            _this.bookingApi = bookingApi;
                            //1.close modal change booking
                            _this.closeChangeBooking();
                            //2.send data to service
                            _this.addDataToConfirmBookingService();
                            var hour = _this.changeStatusToStartTime(_this.selectedHour);
                            var date = _this.formatDateToDDMMYYYY(_this.selectedDate);
                            _this.router.navigate(['booking', _this.phoneNumber, _this.customerName, hour, date, _this.stylistName]);
                        }, function (error) { console.log(error); return; });
                    }
                    else {
                        //hiển thị dialog thông báo Anh/chị có chắc chắn muốn đổi lịch không
                        _this.bookingServiceName = _this.bookingApi.data.service_name;
                        _this.bookingStylistName = _this.bookingApi.data.stylist_name;
                        _this.bookingDate = _this.formatDateToDDMMYYYY(_this.bookingApi.data.date);
                        _this.bookingTime = _this.changeStatusToStartTime(_this.bookingApi.data.start_time + "");
                        _this.openChangeBooking();
                    }
                }, function (error) { console.log(error); return; });
                //1.thực hiện add booking với khách hàng đã có trong hệ thống
                // this.bookingService.addNewBooking(this.phoneNumber,
                //   this.stylistId, this.selectedDate, +this.selectedHour,
                //   +this.selectedService, this.customerName).subscribe(
                //     (bookingApi: BookingApi) => {
                //       this.bookingApi = bookingApi;
                //       if (this.bookingApi.data === null) {
                //         //hiển thị dialog thông báo Anh/chị có chắc chắn muốn đổi lịch không
                //         this.openChangeBooking();
                //       } else {
                //         //1.close modal change booking
                //         this.closeChangeBooking();
                //         //2.send data to service
                //         this.addDataToConfirmBookingService();
                //         var hour = this.changeStatusToStartTime(this.selectedHour);
                //         var date = this.formatDateToDDMMYYYY(this.selectedDate);
                //         this.router.navigate(['booking', this.phoneNumber, this.customerName, hour, date, this.stylistName]);
                //       }
                //     },
                //     error => { console.log(error); return }
                //   );
            }
            else {
                //khách hàng chưa có trong hệ thống
                //1.hiển thị modal verifyCode
                console.log(_this.displayVerifyPin);
                _this.openVerifyPin();
            }
        }, function (error) { console.log(error); return; });
    };
    BookingComponent.prototype.onSubmitCheckPin = function () {
        var _this = this;
        // console.log(form.value);
        this.bookingService.checkPinCode(this.phoneNumber, +this.inputPinNumber).subscribe(function (pinApi) {
            _this.checkPinApi = pinApi;
            console.log("check pin api: " + JSON.stringify(_this.checkPinApi));
            if (_this.checkPinApi.data === null) {
                console.log("data: " + _this.checkPinApi.data);
            }
            else {
                if (_this.checkPinApi.data.verified === true) {
                    //1. thông báo check thành công
                    //2. hiển thị form booking có thêm tên
                    _this.closeVerifyPin();
                    _this.openBookingForm2();
                }
                else {
                    if (_this.checkPinApi.data.remainingAttempts == 0) {
                        //1. thông báo bạn đã điền sai pin code quá nhiều làn. vui lòng đợi sau 10phut
                        _this.flagRemainingAttempts = false;
                        _this.verified = true;
                        console.log("current verified: " + _this.verified);
                        //thông báo thử bằng snackbar xem
                    }
                    else {
                        //1. thông báo số lần có thể điền sai còn lại
                        _this.verified = false;
                        _this.flagRemainingAttempts = true;
                        _this.remainingAttempts = _this.checkPinApi.data.remainingAttempts;
                        console.log("current remainingAttempts: " + _this.remainingAttempts);
                    }
                }
            }
        }, function (error) { console.log(error); return; });
    };
    BookingComponent.prototype.onSubmitChangeBooking = function () {
        var _this = this;
        //edit booking rồi chuyển sang confirm booking
        this.bookingService.editBooking(this.phoneNumber, this.stylistId, this.selectedDate, +this.selectedHour, +this.selectedService).subscribe(function (bookingApi) {
            _this.bookingApi = bookingApi;
            if (_this.bookingApi.success == true) {
                //2.send data to service
                _this.addDataToConfirmBookingService();
                var hour = _this.changeStatusToStartTime(_this.selectedHour);
                var date = _this.formatDateToDDMMYYYY(_this.selectedDate);
                _this.router.navigate(['booking', _this.phoneNumber, _this.customerName, hour, date, _this.stylistName]);
            }
            else {
                _this.openErrorMessage();
            }
        }, function (error) { console.log(error); return; });
    };
    BookingComponent.prototype.onSubmitBookingForm2 = function () {
        //1. tạo customer mới
        // this.bookingService.addNewCustomer(this.customerName, this.phoneNumber).subscribe(
        //   (customerApi: CustomerApi) => {
        //     console.log(customerApi.data);
        //   },
        //   error => { console.log(error); return }
        // );
        var _this = this;
        this.bookingService.addNewBooking(this.phoneNumber, this.stylistId, this.selectedDate, +this.selectedHour, +this.selectedService, this.customerName).subscribe(function (bookingApi) {
            _this.bookingApi = bookingApi;
            if (_this.bookingApi.data === null) {
                //hiển thị dialog thông báo Anh/chị có chắc chắn muốn đổi lịch không
                _this.openChangeBooking();
            }
            else {
                //1.close BookingForm2
                _this.closeBookingForm2();
                //2.send data to service
                _this.addDataToConfirmBookingService();
                var hour = _this.changeStatusToStartTime(_this.selectedHour);
                var date = _this.formatDateToDDMMYYYY(_this.selectedDate);
                _this.router.navigate(['booking', _this.phoneNumber, _this.customerName, hour, date, _this.stylistName]);
            }
        }, function (error) { console.log(error); return; });
    };
    BookingComponent.prototype.selectDate = function (dateTime) {
        //this.dateTime = dateTime;
        this.selectedDate = this.formatDateYYYYmmdd(dateTime.date);
        this.getShiftByStylist(this.selectedService, this.stylistId, this.selectedDate, this.stylistName);
        console.log("selectedDate" + this.selectedDate);
        this.selectedHour = "";
    };
    BookingComponent.prototype.click_hour = function (hour) {
        this.selectedHour = hour;
        console.log("selected hour: " + this.selectedHour);
    };
    BookingComponent.prototype.clickService = function (event) {
        this.selectedService = event.target.value;
        this.service = this.changeSelectedServiceToServiceName(this.selectedService);
        console.log("selectedService: " + this.selectedService);
        this.getShiftByStylist(this.selectedService, this.stylistId, this.selectedDate, this.stylistName);
    };
    BookingComponent.prototype.openVerifyPin = function () {
        this.displayVerifyPin = 'block';
    };
    BookingComponent.prototype.closeVerifyPin = function () {
        this.displayVerifyPin = 'none';
    };
    BookingComponent.prototype.openChangeBooking = function () {
        this.displayChangeBooking = 'block';
    };
    BookingComponent.prototype.closeChangeBooking = function () {
        this.displayChangeBooking = 'none';
    };
    BookingComponent.prototype.openErrorMessage = function () {
        this.displayErrorMessage = 'block';
    };
    BookingComponent.prototype.closeErrorMessage = function () {
        this.displayErrorMessage = 'none';
    };
    BookingComponent.prototype.openBookingForm2 = function () {
        this.displayBookingForm2 = 'block';
    };
    BookingComponent.prototype.closeBookingForm2 = function () {
        this.displayBookingForm2 = 'none';
    };
    //#region function support
    BookingComponent.prototype.changeStatusToStartTime = function (status) {
        //case bắt đâu từ 1 có thể thêm 1 ô trống nữa
        switch (status) {
            case '0': return "9:00";
            case '1': return "9:15";
            case '2': return "9:30";
            case '3': return "9:45";
            case '4': return "10:00";
            case '5': return "10:15";
            case '6': return "10:30";
            case '7': return "10:45";
            case '8': return "11:00";
            case '9': return "11:15";
            case '10': return "11:30";
            case '11': return "11:45";
            case '12': return "12:00";
            case '13': return "12:15";
            case '14': return "12:30";
            case '15': return "12:45";
            case '16': return "13:00";
            case '17': return "13:15";
            case '18': return "13:30";
            case '19': return "13:45";
            case '20': return "14:00";
            case '21': return "14:15";
            case '22': return "14:30";
            case '23': return "14:45";
            case '24': return "15:00";
            case '25': return "15:15";
            case '26': return "15:30";
            case '27': return "15:45";
            case '28': return "16:00";
            case '29': return "16:15";
            case '30': return "16:30";
            case '31': return "16:45";
            case '32': return "17:00";
            case '33': return "17:15";
            case '34': return "17:30";
            case '35': return "17:45";
            case '36': return "18:00";
            case '37': return "18:15";
            case '38': return "18:30";
            case '39': return "18:45";
            case '40': return "19:00";
            case '41': return "19:15";
            case '42': return "19:30";
            case '43': return "19:45";
            case '44': return "20:00";
            case '45': return "20:15";
            case '46': return "20:30";
            case '47': return "20:45";
            case '48': return "21:00";
            case '49': return "21:15";
            case '50': return "21:30";
            case '51': return "21:45";
        }
    };
    //transform date by format yyyy-MM-dd
    BookingComponent.prototype.formatDateYYYYmmdd = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    BookingComponent.prototype.formatDateToDDMMYYYY = function (date) {
        var split = date.split('-');
        return [split[2], split[1], split[0]].join('-');
    };
    BookingComponent.prototype.changeSelectedServiceToServiceName = function (selectedService) {
        switch (selectedService) {
            case "1": return "Cơ Bản";
            case "2": return "Nâng Cao";
        }
    };
    BookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__("./src/app/core/booking/booking.component.html"),
            styles: [__webpack_require__("./src/app/core/booking/booking.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__booking_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_4__http_handle__["b" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__confirm_booking_service__["a" /* ConfirmBookingService */]])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/core/collection/collection.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n.img-row {\n    display: inline-block;\n    border: 1px solid #a9a9a9;\n    margin: 5px;\n  }\n  \n  .img-frame {\n    border: 5px solid #fff;\n    cursor: pointer;\n    -webkit-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n  }\n  \n  /* .img-frame:hover, .img-frame:focus, .img-frame:active {\n    -webkit-transform: translateY(-5px);\n    transform: translateY(-5px);\n  } */\n  \n  /*=========================== Media queries ============================ */\n  \n  /* Small devices (landscape phones, 480px) */\n  \n  @media (max-width:320px){\n    .lightbox{\n      margin-top: 80px;\n    }\n  }\n\n\n  "

/***/ }),

/***/ "./src/app/core/collection/collection.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ===== content starts  ===== -->\n<div id=\"content\" class=\"col-md-10 split\">\n  <!-- ===== Gallery section starts  ===== -->\n  <div id=\"collection\">\n    <div class=\"content-wrapper\">\n      <div class=\"content-box container\">\n        <div class=\"inside-wrapper container\">\n          <!-- section-heading -->\n          <div class=\"section-heading\">\n            <h2>{{collectionName}}</h2>\n          </div> \n\n          <div class=\"column has-text-centered\">\n            <div class=\"img-row\" *ngFor=\"let image of albums; let i=index\">\n              <img class=\"img-frame\" [src]=\"image.thumb\" (click)=\"open(i)\" />\n            </div>\n          </div>\n\n\n        </div>\n        <!-- /inside-wrapper -->\n      </div>\n      <!-- /content-box -->\n    </div>\n    <!-- / content-wrapper -->\n  </div>\n  <!-- /gallery ends -->\n</div>\n<!-- /content -->"

/***/ }),

/***/ "./src/app/core/collection/collection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_lightbox__ = __webpack_require__("./node_modules/ngx-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_service__ = __webpack_require__("./src/app/core/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CollectionComponent = /** @class */ (function () {
    function CollectionComponent(_lightbox, _lightboxEvent, 
        //private _lighboxConfig: LightboxConfig,
        route, galleryService) {
        this._lightbox = _lightbox;
        this._lightboxEvent = _lightboxEvent;
        this.route = route;
        this.galleryService = galleryService;
        this.lightBoxConfig = {
            fadeDuration: 0,
            resizeDuration: 0.4,
            wrapAround: true, showImageNumberLabel: true
        };
    }
    CollectionComponent.prototype.open = function (index) {
        var _this = this;
        this._subscription = this._lightboxEvent.lightboxEvent$.subscribe(function (event) { return _this._onReceivedEvent(event); });
        // override the default config cách 2
        this._lightbox.open(this.albums, index, this.lightBoxConfig);
    };
    CollectionComponent.prototype._onReceivedEvent = function (event) {
        if (event.id === __WEBPACK_IMPORTED_MODULE_1_ngx_lightbox__["LIGHTBOX_EVENT"].CLOSE) {
            this._subscription.unsubscribe();
        }
    };
    CollectionComponent.prototype.getDataFromUrl = function () {
        this.collectionId = +this.route.snapshot.paramMap.get('collectionId');
        this.collectionName = this.route.snapshot.paramMap.get('collectionName');
        console.log("this.route.snapshot.paramMap:collectionName:  " + this.collectionName);
        console.log("this.route.snapshot.paramMap:collectionId:  " + this.collectionId);
    };
    CollectionComponent.prototype.getGalleryByByIdFromService = function () {
        var _this = this;
        this.galleryService.getGalleryById(this.collectionId).subscribe(function (collectionApi) {
            _this.collections = collectionApi.data;
            _this.albums = [];
            if (_this.collections.length) {
                for (var i = 0; i < _this.collections.length; i++) {
                    var src = _this.collections[i].image_link;
                    var caption = _this.collections[i].caption;
                    var thumb = _this.collections[i].thumb_link;
                    var album = {
                        src: src,
                        caption: caption,
                        thumb: thumb
                    };
                    _this.albums.push(album);
                }
            }
            else {
                console.log("collection don't have any item");
            }
        });
    };
    CollectionComponent.prototype.ngOnInit = function () {
        this.getDataFromUrl();
        this.getGalleryByByIdFromService();
    };
    CollectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collection',
            template: __webpack_require__("./src/app/core/collection/collection.component.html"),
            styles: [__webpack_require__("./src/app/core/collection/collection.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_lightbox__["Lightbox"],
            __WEBPACK_IMPORTED_MODULE_1_ngx_lightbox__["LightboxEvent"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__gallery_service__["a" /* GalleryService */]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/core/confirm-booking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmBookingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmBookingService = /** @class */ (function () {
    function ConfirmBookingService() {
        //private messageSource = new BehaviorSubject('default message');
        this.selectedHour = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        this.selectedDate = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        this.stylistName = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        this.phoneNumber = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        this.customerName = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        this.notifiDeleteBooking = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        //currentMessage = this.messageSource.asObservable();
        this.currentHour = this.selectedHour.asObservable();
        this.currentDate = this.selectedDate.asObservable();
        this.currentStylistName = this.stylistName.asObservable();
        this.currentPhoneNumber = this.phoneNumber.asObservable();
        this.currentCustomerName = this.customerName.asObservable();
        this.currentNotifiDeleteBooking = this.notifiDeleteBooking.asObservable();
    }
    ConfirmBookingService.prototype.changeHour = function (hour) {
        this.selectedHour.next(hour);
    };
    ConfirmBookingService.prototype.changeDate = function (date) {
        this.selectedDate.next(date);
    };
    ConfirmBookingService.prototype.changeStylistName = function (stylistName) {
        this.stylistName.next(stylistName);
    };
    ConfirmBookingService.prototype.changePhoneNumber = function (phoneNumber) {
        this.phoneNumber.next(phoneNumber);
    };
    ConfirmBookingService.prototype.changeCustomerName = function (customerName) {
        this.customerName.next(customerName);
    };
    ConfirmBookingService.prototype.changeNotifiDeleteBooking = function (notifiDeleteBooking) {
        this.notifiDeleteBooking.next(notifiDeleteBooking);
    };
    ConfirmBookingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfirmBookingService);
    return ConfirmBookingService;
}());



/***/ }),

/***/ "./src/app/core/confirmed-booking/confirmed-booking.component.css":
/***/ (function(module, exports) {

module.exports = ".btn{\n  float: right;\n  margin: 0px 2px 0 2px;\n}\n\n  #inside-wrapper-confirmBooking{\n    padding: 70px 70px 70px 70px;\n  }\n\n  .choose-service, .choose-stylist, .choose-time{\n      margin: auto;\n      padding: 0px 50px 0 50px;\n  }\n\n  #modalChangeBooking{\n      text-align: center;\n  }\n\n  #modalConfirmDeleteBooking{\n      text-align: center;\n  }\n\n  .backdrop{\n      background-color:rgba(0,0,0,0.6);\n      position:fixed;\n      top:0;\n      left:0;\n      width:100%;\n      height:100vh;\n      z-index: 1;\n   }\n\n  /* Medium devices (tablets, 768px) The navbar toggle appears at this breakpoint */\n\n  @media (max-width: 768px) {\n  .modal-dialog{\n    overflow-y: initial !important;\n    margin-top: 95px;\n}\n.modal{\n  overflow-y: scroll;\n}\n}\n\n  /* Small devices (landscape phones, 544px) */\n\n  @media (max-width: 480px ){\n  .modal-dialog{\n    overflow-y: initial !important\n  }\n\n  .modal-body h5{\n    font-size: 18px;\n    margin-bottom: 12px;\n  }\n  \n  .modal-header h4{\n    font-size: 19px;\n  }\n  \n  .modal{\n    overflow-y: scroll;\n  }\n\n  .btn{\n    font-size: 14px;\n    margin-right: 10px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/core/confirmed-booking/confirmed-booking.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"loaderService.isLoading | async\">\n    <app-pre-loader></app-pre-loader>\n  </div> -->\n<div id=\"content\" class=\"col-md-10 split\">   <!--*ngIf=\"!(loaderService.isLoading | async)\"-->\n  <!-- ===== Booking section starts  ===== -->\n  <div class=\"content-wrapper\">\n    <div class=\"content-box container\"> \n      <div class=\"\" id=\"inside-wrapper-confirmBooking\">\n\n        <div id=\"confirmBookingForm\">\n          <form #confirmBookingForm=\"ngForm\">\n            <div class=\"section-heading\">\n              <h2>Đặt Lịch Thành Công</h2>\n            </div>\n            <h4>Cảm ơn Anh/Chị {{customerName}} ({{phoneNumber}}) đã cho Châm trâm Nail được phục\n              vụ.</h4>\n              <h4>Thông tin đặt lịch của anh/chị:</h4>\n            <h4><i class=\"fas fa-map-marker-alt margin-icon\"></i> 35 Ngô Sĩ Liên - Hà Nội</h4>\n            <h4><i class=\"far fa-clock margin-icon\"></i> {{selectedHour}} Ngày\n              {{selectedDate}}\n              (Mong anh/chị đến sớm hơn 10 phút để chúng em phục vụ tốt nhất)\n            </h4>\n            <h4><i class=\"fas fa-female margin-icon\"></i>  {{stylistName}}</h4>\n            <h4>MỖI SĐT ĐẶT CHỈ DÀNH CHO 1 NGƯỜI</h4>\n            <p>(*) Nếu làm nail cho nhiều người, anh/chị vui lòng dùng SĐT khác để đặt thêm 1 lần nữa hoặc gọi tới\n              hotline để được sắp xếp giúp em!</p>\n            <button type=\"button\" class=\"btn\" (click)=\"openChangeBooking()\">Đổi Lịch</button>\n            <!-- <button type=\"button\" [routerLink]=\"['/home']\" (click)=\"backToHome()\" class=\"btn\">Hủy Lịch</button> -->\n            <button type=\"button\" (click)=\"openConfirmDeleteBooking()\" class=\"btn\">Hủy Lịch</button>\n          </form>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n  <!-- Modal Confirm Change Booking-->\n  <div class=\"backdrop\" [ngStyle]=\"{'display':displayChangeBooking}\"></div>\n  <div id=\"modalChangeBooking\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayChangeBooking}\">\n    <div class=\"modal-dialog changeBoooking\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeChangeBooking()\"><span aria-hidden=\"true\">&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n          <h4 class=\"modal-title\">Anh/chị có muốn đổi lịch</h4>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn\" (click)=\"closeChangeBooking()\">Đóng</button>\n          <button type=\"button\" class=\"btn\" (click)=\"goBack()\">Có</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal !-->\n\n    <!-- Modal Confirm Delete Booking-->\n    <div class=\"backdrop\" [ngStyle]=\"{'display':displayConfirmDeleteBooking}\"></div>\n    <div id=\"modalConfirmDeleteBooking\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayConfirmDeleteBooking}\">\n      <div class=\"modal-dialog confirmDeleteBoooking\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeConfirmDeleteBooking()\"><span aria-hidden=\"true\">&times;</span></button>\n          </div>\n          <div class=\"modal-body\">\n            <h4 class=\"modal-title\">Anh/chị có muốn hủy lịch</h4>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn\" (click)=\"closeConfirmDeleteBooking()\">Đóng</button>\n            <button type=\"button\" class=\"btn\" (click)=\"backToHome()\">Có</button>\n          </div>\n        </div><!-- /.modal-content -->\n      </div><!-- /.modal-dialog -->\n    </div><!-- /.modal !-->"

/***/ }),

/***/ "./src/app/core/confirmed-booking/confirmed-booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmedBookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_service__ = __webpack_require__("./src/app/core/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_booking_service__ = __webpack_require__("./src/app/core/confirm-booking.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfirmedBookingComponent = /** @class */ (function () {
    function ConfirmedBookingComponent(activatedRoute, location, bookingService, 
        //private loaderService:LoaderService,
        confirmBookingService, router) {
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.bookingService = bookingService;
        this.confirmBookingService = confirmBookingService;
        this.router = router;
        this.displayChangeBooking = 'none';
        this.displayConfirmDeleteBooking = 'none';
    }
    ConfirmedBookingComponent.prototype.ngOnInit = function () {
        // this.confirmBookingService.currentDate.subscribe(date => this.selectedDate = date);
        // this.confirmBookingService.currentHour.subscribe(hour => this.selectedHour = hour);
        // this.confirmBookingService.currentCustomerName.subscribe(customerName => this.customerName = customerName);
        // this.confirmBookingService.currentStylistName.subscribe(stylistName => this.stylistName = stylistName);
        this.getDataFromRoute();
    };
    ConfirmedBookingComponent.prototype.getDataFromRoute = function () {
        this.phoneNumber = this.activatedRoute.snapshot.paramMap.get('phone');
        this.customerName = this.activatedRoute.snapshot.paramMap.get('customerName');
        this.selectedHour = this.activatedRoute.snapshot.paramMap.get('hour');
        this.stylistName = this.activatedRoute.snapshot.paramMap.get('stylistName');
        this.selectedDate = this.activatedRoute.snapshot.paramMap.get('date');
        console.log("this.route.snapshot.paramMap: " + JSON.stringify(this.activatedRoute.snapshot.paramMap));
        console.log("this.route.snapshot.paramMap:phone " + this.phoneNumber);
        // this.route.queryParams.subscribe(params => {
        //   this.phoneNumber = params['startdate'];
        //   console.log(this.phoneNumber); // Print the parameter to the console. 
        // });
    };
    ConfirmedBookingComponent.prototype.backToHome = function () {
        //1. delete booking 
        this.bookingService.deleteBooking(+this.phoneNumber).subscribe(function (bookingApi) {
        }, function (error) { console.log(error); return; });
        //2. set variable 
        this.confirmBookingService.changePhoneNumber("");
        this.confirmBookingService.changeDate("");
        this.confirmBookingService.changeHour("");
        this.confirmBookingService.changeStylistName("");
        this.confirmBookingService.changeCustomerName("");
        this.confirmBookingService.changeNotifiDeleteBooking("block");
        //bcak to home
        this.router.navigate(['/home']);
    };
    ConfirmedBookingComponent.prototype.goBack = function () {
        this.addPhoneNumberToConfirmBookingService();
        this.location.back();
    };
    ConfirmedBookingComponent.prototype.addPhoneNumberToConfirmBookingService = function () {
        this.confirmBookingService.changePhoneNumber(this.phoneNumber);
    };
    ConfirmedBookingComponent.prototype.openChangeBooking = function () {
        this.displayChangeBooking = 'block';
    };
    ConfirmedBookingComponent.prototype.closeChangeBooking = function () {
        this.displayChangeBooking = 'none';
    };
    ConfirmedBookingComponent.prototype.openConfirmDeleteBooking = function () {
        this.displayConfirmDeleteBooking = 'block';
    };
    ConfirmedBookingComponent.prototype.closeConfirmDeleteBooking = function () {
        this.displayConfirmDeleteBooking = 'none';
    };
    //#region function support
    ConfirmedBookingComponent.prototype.changeStatusToString = function (status) {
        //case bắt đâu từ 1 có thể thêm 1 ô trống nữa
        switch (status) {
            case '0': return "9:00";
            case '1': return "9:15";
            case '2': return "9:30";
            case '3': return "9:45";
            case '4': return "10:00";
            case '5': return "10:15";
            case '6': return "10:30";
            case '7': return "10:45";
            case '8': return "11:00";
            case '9': return "11:15";
            case '10': return "11:30";
            case '11': return "11:45";
            case '12': return "12:00";
            case '13': return "12:15";
            case '14': return "12:30";
            case '15': return "12:45";
            case '16': return "13:00";
            case '17': return "13:15";
            case '18': return "13:30";
            case '19': return "13:45";
            case '20': return "14:00";
            case '21': return "14:15";
            case '22': return "14:30";
            case '23': return "14:45";
            case '24': return "15:00";
            case '25': return "15:15";
            case '26': return "15:30";
            case '27': return "15:45";
            case '28': return "16:00";
            case '29': return "16:15";
            case '30': return "16:30";
            case '31': return "16:45";
            case '32': return "17:00";
            case '33': return "17:15";
            case '34': return "17:30";
            case '35': return "17:45";
            case '36': return "18:00";
            case '37': return "18:15";
            case '38': return "18:30";
            case '39': return "18:45";
            case '40': return "19:00";
            case '41': return "19:15";
            case '42': return "19:30";
            case '43': return "19:45";
            case '44': return "20:00";
            case '45': return "20:15";
            case '46': return "20:30";
            case '47': return "20:45";
            case '48': return "21:00";
            case '49': return "21:15";
            case '50': return "21:30";
            case '51': return "21:45";
        }
    };
    ConfirmedBookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmed-booking',
            template: __webpack_require__("./src/app/core/confirmed-booking/confirmed-booking.component.html"),
            styles: [__webpack_require__("./src/app/core/confirmed-booking/confirmed-booking.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__booking_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_4__confirm_booking_service__["a" /* ConfirmBookingService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ConfirmedBookingComponent);
    return ConfirmedBookingComponent;
}());



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking_component__ = __webpack_require__("./src/app/core/booking/booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services_component__ = __webpack_require__("./src/app/core/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_component__ = __webpack_require__("./src/app/core/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__prices_prices_component__ = __webpack_require__("./src/app/core/prices/prices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aboutus_aboutus_component__ = __webpack_require__("./src/app/core/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__confirmed_booking_confirmed_booking_component__ = __webpack_require__("./src/app/core/confirmed-booking/confirmed-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collection_collection_component__ = __webpack_require__("./src/app/core/collection/collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_component__ = __webpack_require__("./src/app/core/core.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_10__core_component__["a" /* CoreComponent */],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
            { path: 'services', component: __WEBPACK_IMPORTED_MODULE_4__services_services_component__["a" /* ServicesComponent */] },
            { path: 'booking', component: __WEBPACK_IMPORTED_MODULE_2__booking_booking_component__["a" /* BookingComponent */] },
            { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_component__["a" /* GalleryComponent */] },
            { path: 'prices', component: __WEBPACK_IMPORTED_MODULE_6__prices_prices_component__["a" /* PricesComponent */] },
            { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_7__aboutus_aboutus_component__["a" /* AboutusComponent */] },
            { path: 'booking/:phone/:customerName/:hour/:date/:stylistName', component: __WEBPACK_IMPORTED_MODULE_8__confirmed_booking_confirmed_booking_component__["a" /* ConfirmedBookingComponent */] },
            { path: 'gallery/:collectionId/:collectionName', component: __WEBPACK_IMPORTED_MODULE_9__collection_collection_component__["a" /* CollectionComponent */] }
        ]
    },
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/core.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <app-side-nav></app-side-nav>\n    <router-outlet></router-outlet>\n</div>  "

/***/ }),

/***/ "./src/app/core/core.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoreComponent = /** @class */ (function () {
    function CoreComponent(compiler) {
        this.compiler = compiler;
        this.compiler.clearCache();
    }
    CoreComponent.prototype.ngOnInit = function () {
    };
    CoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-core',
            template: __webpack_require__("./src/app/core/core.component.html"),
            styles: [__webpack_require__("./src/app/core/core.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"]])
    ], CoreComponent);
    return CoreComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_handle__ = __webpack_require__("./src/app/core/http-handle/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_swiper_wrapper__ = __webpack_require__("./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_module__ = __webpack_require__("./src/app/core/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_lightbox__ = __webpack_require__("./node_modules/ngx-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_routing_module__ = __webpack_require__("./src/app/core/core-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_component__ = __webpack_require__("./src/app/core/core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__booking_booking_component__ = __webpack_require__("./src/app/core/booking/booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__side_nav_side_nav_component__ = __webpack_require__("./src/app/core/side-nav/side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pre_loader_pre_loader_component__ = __webpack_require__("./src/app/core/pre-loader/pre-loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("./src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_services_component__ = __webpack_require__("./src/app/core/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gallery_gallery_component__ = __webpack_require__("./src/app/core/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__prices_prices_component__ = __webpack_require__("./src/app/core/prices/prices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__aboutus_aboutus_component__ = __webpack_require__("./src/app/core/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__confirmed_booking_confirmed_booking_component__ = __webpack_require__("./src/app/core/confirmed-booking/confirmed-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__collection_collection_component__ = __webpack_require__("./src/app/core/collection/collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__booking_service__ = __webpack_require__("./src/app/core/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__confirm_booking_service__ = __webpack_require__("./src/app/core/confirm-booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__gallery_service__ = __webpack_require__("./src/app/core/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                // BrowserModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__core_routing_module__["a" /* CoreRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_swiper_wrapper__["b" /* SwiperModule */],
                // BrowserAnimationsModule,
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_lightbox__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_4__http_handle__["a" /* HttpHandleModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__booking_booking_component__["a" /* BookingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_16__prices_prices_component__["a" /* PricesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__aboutus_aboutus_component__["a" /* AboutusComponent */],
                __WEBPACK_IMPORTED_MODULE_9__core_component__["a" /* CoreComponent */],
                __WEBPACK_IMPORTED_MODULE_18__confirmed_booking_confirmed_booking_component__["a" /* ConfirmedBookingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__collection_collection_component__["a" /* CollectionComponent */],
                __WEBPACK_IMPORTED_MODULE_11__side_nav_side_nav_component__["a" /* SideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pre_loader_pre_loader_component__["a" /* PreLoaderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__booking_service__["a" /* BookingService */],
                __WEBPACK_IMPORTED_MODULE_21__confirm_booking_service__["a" /* ConfirmBookingService */],
                __WEBPACK_IMPORTED_MODULE_22__gallery_service__["a" /* GalleryService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5_ngx_swiper_wrapper__["a" /* SWIPER_CONFIG */],
                    useValue: DEFAULT_SWIPER_CONFIG
                },
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/gallery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_galleryApi__ = __webpack_require__("./src/app/core/models/galleryApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_collectionApi__ = __webpack_require__("./src/app/core/models/collectionApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GalleryService = /** @class */ (function () {
    function GalleryService(http) {
        this.http = http;
        this.galleryUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment_prod__["a" /* environment */].api_url + "/galleries";
    }
    //get all stylist from db
    GalleryService.prototype.getAllGalleries = function () {
        return this.http.get(this.galleryUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (receivedGalleries) { return console.log(receivedGalleries); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_4__models_galleryApi__["a" /* GalleryApi */]()); })
        //thêm property vào new StylistApi để biết lỗi
        );
    };
    GalleryService.prototype.getGalleryById = function (galleryId) {
        var url = this.galleryUrl + "/" + galleryId;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (receivedCollection) {
            console.log("receivedCollection: " + receivedCollection);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__models_collectionApi__["a" /* CollectionApi */]()); }));
    };
    GalleryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "./src/app/core/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ".btn{\n    background-color: #ffffff;\n    color: #87314e!important;\n    border: 2px solid #87314e;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-radius: 7px;\n}\n\n.btn:hover{\n    background-color: #87314e;\n    color: #ffffff!important;\n}\n\n.wrap-btn{\n    text-align: center;\n    margin-bottom: 70px\n}\n\n.wrap-img{\n    margin-bottom: 40px;\n    overflow: hidden;\n}\n\n.wrap-img img {\n    max-width: 100%;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n  }\n\n.wrap-img:hover img {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n"

/***/ }),

/***/ "./src/app/core/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaderService.isLoading | async\">\r\n   <app-pre-loader></app-pre-loader>\r\n </div>\r\n<!-- ===== content starts  ===== -->\r\n<div id=\"content\" class=\"col-md-10 split\" *ngIf=\"!(loaderService.isLoading | async)\">\r\n   <!-- ===== Gallery section starts  ===== -->\r\n   <div id=\"gallery\">\r\n      <div class=\"content-wrapper\">\r\n         <div class=\"content-box container\">\r\n            <div class=\"inside-wrapper container\">\r\n               <!-- section-heading -->\r\n               <div class=\"section-heading\">\r\n                  <h2>Album Ảnh</h2>\r\n               </div>\r\n\r\n               <div class=\"row\">\r\n\r\n                  <div class=\"col-sm-12 col-md-6\" *ngFor=\"let gallery of galleries\">\r\n                     <div class=\"block-content\">\r\n                        <div class=\"wrap-img\">\r\n                           <img class=\"img-responsive\" [src]=\"gallery.image_link\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"wrap-btn\">\r\n                           <a class=\"btn\" target=\"_blank\" routerLink=\"{{gallery.id}}/{{gallery.name}}\">{{gallery.name}}</a>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n\r\n            </div>\r\n            <!-- /inside-wrapper -->\r\n         </div>\r\n         <!-- /content-box -->\r\n      </div>\r\n      <!-- / content-wrapper -->\r\n   </div>\r\n   <!-- /gallery ends -->\r\n</div>\r\n<!-- /content -->"

/***/ }),

/***/ "./src/app/core/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_service__ = __webpack_require__("./src/app/core/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_handle__ = __webpack_require__("./src/app/core/http-handle/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(loaderService, galleryService) {
        this.loaderService = loaderService;
        this.galleryService = galleryService;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.getGalleriesFromService();
    };
    GalleryComponent.prototype.getGalleriesFromService = function () {
        var _this = this;
        this.galleryService.getAllGalleries().subscribe(function (galleryApi) { return _this.galleries = galleryApi.data; });
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/core/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/core/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_handle__["b" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_1__gallery_service__["a" /* GalleryService */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".control-label{\r\n  text-align: left;\r\n  padding-top: 11px;\r\n}\r\n.input-group-addon{\r\n  font-size: 28px;\r\n}\r\n.form-control-static{\r\n  font-size: 19px;\r\n}\r\n.form-group{\r\n  margin-bottom: 5px;\r\n  padding: 0 40px 0 30px;\r\n}\r\n.input_sdt{\r\n  width: 100%;\r\n  float: left;\r\n /* background-color: #fff;\r\n  */\r\n  padding: 10px 12px;\r\n  position: relative;\r\n}\r\n.phone{\r\n  height: 50px;\r\n  font-size: 31px;\r\n}\r\n.btn-booking{\r\n  height: 80px;\r\n  background: black;\r\n  margin-bottom: 15px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  font-size: 33px;\r\n  font-family: UTM Cafeta;\r\n  font-weight: normal;\r\n}\r\n.btn-booking img{\r\n  margin-bottom: 8px;\r\n  width: 35px;\r\n}\r\n.inside-wrapper.home {\r\n  padding: 0px 40px 5px 40px!important;\r\n}\r\n.input-phone{\r\n  width: 100%;\r\n}\r\n.btn{\r\n    float: right;\r\n    margin: 0px 2px 0 2px;\r\n  }\r\n.btn-a{\r\n\r\n  }\r\n.backdrop{\r\n    background-color:rgba(0,0,0,0.6);\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100vh;\r\n    z-index: 1;\r\n }\r\n.modal-content{\r\n   text-align: center;\r\n }\r\n/*=========================== Media queries ============================ */\r\n/* Small devices (landscape phones, 544px) */\r\n@media (max-width: 480px){\r\n  .inside-wrapper.home {\r\n      padding: 0!important;\r\n }\r\n  .input_sdt{\r\n      padding: 0!important;\r\n }\r\n  .input-group-addon{\r\n      font-size: 25px;\r\n }\r\n  .btn-booking{\r\n    font-size: 19px;\r\n    height: 70px;\r\n }\r\n  h3{\r\n      font-size: 2em;\r\n }\r\n\r\n .modal-dialog{\r\n    overflow-y: initial !important\r\n  }\r\n\r\n  .modal-body h5{\r\n    font-size: 18px;\r\n    margin-bottom: 12px;\r\n  }\r\n  \r\n  .modal-header h4{\r\n    font-size: 19px;\r\n  }\r\n  \r\n  .modal{\r\n    overflow-y: scroll;\r\n  }\r\n\r\n  .btn{\r\n    font-size: 14px;\r\n    /* margin-right: 10px; */\r\n  }\r\n}\r\n/* Medium devices (tablets, 768px) The navbar toggle appears at this breakpoint */\r\n@media (max-width: 768px) {\r\n    .modal-dialog{\r\n        overflow-y: initial !important;\r\n        margin-top: 95px;\r\n    }\r\n    .modal{\r\n      overflow-y: scroll;\r\n    }\r\n}\r\n/* Medium- Large devices (desktops, 992px) */\r\n@media (max-width: 992px) {\r\n}\r\n/* Large devices (large desktops, min 1200px ) */\r\n@media (min-width: 1200px) {\r\n  .content-box.home {\r\n      padding: 10px!important;\r\n      width: 60%;\r\n }\r\n}\r\n/* Large devices (large desktops, max 1200px) */\r\n@media (max-width: 1199px) {\r\n  .content-box.home {\r\n      padding: 0px 20px 20px 20px!important;\r\n      width: 90%;\r\n      left: 5%;\r\n      margin-top: 0px!important;\r\n      top:15%;\r\n      position: absolute;\r\n }\r\n  h3{\r\n      font-size: 2em;\r\n }\r\n}\r\n/* Large devices ( min 1500px) */\r\n@media (min-width: 1500px) {\r\n  .content-box.home {\r\n      width: 50%!important;\r\n }\r\n}\r\n.slideshow {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n}\r\n.slideshow-image {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: no-repeat 50% 50%;\r\n  background-size: cover;\r\n  -webkit-animation-name: tungclear;\r\n  animation-name: tungclear;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-duration: 26s;\r\n  animation-duration: 26s;\r\n  opacity: 1;\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n.slideshow-image:nth-child(1) {\r\n  background-image: url('slide1.baafdad0039be1bafef9.jpg');\r\n  -webkit-animation-name: tungclear-1;\r\n  animation-name: tungclear-1;\r\n  z-index: 3;\r\n}\r\n.slideshow-image:nth-child(2) {\r\n  background-image: url('slide2.9ac610c655f6fb2c0b6d.jpg');\r\n  -webkit-animation-name: tungclear-2;\r\n  animation-name: tungclear-2;\r\n  z-index: 2;\r\n}\r\n.slideshow-image:nth-child(3) {\r\n  background-image: url('slide3.fb74f1552943bffe6def.jpg');\r\n  -webkit-animation-name: tungclear-3;\r\n  animation-name: tungclear-3;\r\n  z-index: 1;\r\n}\r\n.slideshow-image:nth-child(4) {\r\n  background-image: url('slide4.d2e3160db975581476a2.jpg');\r\n  -webkit-animation-name: tungclear-4;\r\n  animation-name: tungclear-4;\r\n  z-index: 0;\r\n}\r\n@-webkit-keyframes tungclear-1 {\r\n  0% {\r\n      opacity: 1;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n  1.5625% {\r\n      opacity: 1;\r\n }\r\n  23.4375% {\r\n      opacity: 1;\r\n }\r\n  26.5625% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1);\r\n      transform: scale(1);\r\n }\r\n  100% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n  98.4375% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1.21176);\r\n      transform: scale(1.21176);\r\n }\r\n  100% {\r\n      opacity: 1;\r\n }\r\n}\r\n@keyframes tungclear-1 {\r\n  0% {\r\n      opacity: 1;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n  1.5625% {\r\n      opacity: 1;\r\n }\r\n  23.4375% {\r\n      opacity: 1;\r\n }\r\n  26.5625% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1);\r\n      transform: scale(1);\r\n }\r\n  100% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n  98.4375% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1.21176);\r\n      transform: scale(1.21176);\r\n }\r\n  100% {\r\n      opacity: 1;\r\n }\r\n}\r\n@-webkit-keyframes tungclear-2 {\r\n  23.4375% {\r\n      opacity: 1;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n  26.5625% {\r\n      opacity: 1;\r\n }\r\n  48.4375% {\r\n      opacity: 1;\r\n }\r\n  51.5625% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1);\r\n      transform: scale(1);\r\n }\r\n  100% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n}\r\n@keyframes tungclear-2 {\r\n  23.4375% {\r\n      opacity: 1;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n  26.5625% {\r\n      opacity: 1;\r\n }\r\n  48.4375% {\r\n      opacity: 1;\r\n }\r\n  51.5625% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1);\r\n      transform: scale(1);\r\n }\r\n  100% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n}\r\n@-webkit-keyframes tungclear-3 {\r\n  48.4375% {\r\n      opacity: 1;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n  51.5625% {\r\n      opacity: 1;\r\n }\r\n  73.4375% {\r\n      opacity: 1;\r\n }\r\n  76.5625% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1);\r\n      transform: scale(1);\r\n }\r\n  100% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n}\r\n@keyframes tungclear-3 {\r\n  48.4375% {\r\n      opacity: 1;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n  51.5625% {\r\n      opacity: 1;\r\n }\r\n  73.4375% {\r\n      opacity: 1;\r\n }\r\n  76.5625% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1);\r\n      transform: scale(1);\r\n }\r\n  100% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n}\r\n@keyframes tungclear-4 {\r\n  73.4375% {\r\n      opacity: 1;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n  76.5625% {\r\n      opacity: 1;\r\n }\r\n  98.4375% {\r\n      opacity: 1;\r\n }\r\n  100% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1);\r\n      transform: scale(1);\r\n }\r\n}\r\n@-webkit-keyframes tungclear-4 {\r\n  73.4375% {\r\n      opacity: 1;\r\n      -webkit-transform: scale(1.2);\r\n      transform: scale(1.2);\r\n }\r\n  76.5625% {\r\n      opacity: 1;\r\n }\r\n  98.4375% {\r\n      opacity: 1;\r\n }\r\n  100% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(1);\r\n      transform: scale(1);\r\n }\r\n}\r\n"

/***/ }),

/***/ "./src/app/core/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaderService.isLoading | async\">\r\n  <app-pre-loader></app-pre-loader>\r\n</div>\r\n\r\n<!-- ===== content starts  ===== -->\r\n<div id=\"content\" class=\"col-md-10 split\" *ngIf=\"!(loaderService.isLoading | async)\">\r\n  <!-- ===== Home section starts  ===== -->\r\n  <div id=\"home\">\r\n    <div class=\"slideshow\">\r\n      <div class=\"slideshow-image\"></div>\r\n      <div class=\"slideshow-image\"></div>\r\n      <div class=\"slideshow-image\"></div>\r\n      <div class=\"slideshow-image\"></div>\r\n    </div>\r\n    <!-- /slideshow -->\r\n    <div class=\"content-wrapper\">\r\n      <div class=\"content-box home text-center container\">\r\n        <div class=\"inside-wrapper home col-md-12\">\r\n          <h3>Welcome to Châm Trâm</h3>\r\n          <div class=\"input_sdt\">\r\n            <form #bookingForm=\"ngForm\">\r\n              <div class=\"input-phone\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fas fa-phone\"></i></span>\r\n                  <input type=\"tel\" placeholder=\"\" class=\"form-control phone\" maxlength=\"10\" pattern=\"(03|09|07|08|05)+([0-9]{8})\\b\"\r\n                    [(ngModel)]=\"phoneNumber\" name=\"phone_number\" required>\r\n                  <!-- <p>{{phoneNumber}}</p> -->\r\n                </div>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-booking\" [disabled]=\"bookingForm.form.invalid\" (click)=\"checkExistBooking()\">Đặt\r\n                Lịch Giữ Chỗ\r\n                <img src=\"../../../assets/img/home/arrow right.png\">\r\n              </button>\r\n            </form>\r\n            <!-- Buttons -->\r\n            <!-- <a class=\"btn \" routerLink=\"/contact\">Contact us</a>\r\n            <a class=\"btn \" routerLink=\"/aboutus\">More info</a> -->\r\n          </div>\r\n        </div>\r\n        <!-- /inside-wrapper -->\r\n      </div>\r\n      <!-- /content-box -->\r\n    </div>\r\n    <!-- /content-wrapper -->\r\n  </div>\r\n  <!-- /home section ends -->\r\n</div>\r\n<!-- /content -->\r\n\r\n<!-- Modal Confirm Change Booking-->\r\n<div class=\"backdrop\" [ngStyle]=\"{'display':displayChangeBooking}\"></div>\r\n<div id=\"modalChangeBooking\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayChangeBooking}\">\r\n  <div class=\"modal-dialog changeBoooking\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeChangeBooking()\"><span aria-hidden=\"true\">&times;</span></button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <h4 class=\"modal-title\">Anh/chị có muốn đổi lịch hay hủy lịch</h4>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-a\" (click)=\"closeChangeBooking()\">Đóng</button>\r\n        <button type=\"button\" class=\"btn btn-a\" (click)=\"deleteBooking()\">Hủy Lịch</button>\r\n        <button type=\"button\" class=\"btn btn-a\" (click)=\"changeBooking()\">Đổi Lịch</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal !-->\r\n\r\n<!-- Modal Notifi Delete Booking Success-->\r\n<div class=\"backdrop\" [ngStyle]=\"{'display':displayNotifiDeleteBooking}\"></div>\r\n<div id=\"modalNotifiDeleteBooking\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayNotifiDeleteBooking}\">\r\n  <div class=\"modal-dialog notifiDeleteBoooking\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeNotifiDeleteBooking()\"><span aria-hidden=\"true\">&times;</span></button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <h4 class=\"modal-title\">Anh/chị đã hủy lịch thành công</h4>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-a\" (click)=\"closeNotifiDeleteBooking()\">Đóng</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirm_booking_service__ = __webpack_require__("./src/app/core/confirm-booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_service__ = __webpack_require__("./src/app/core/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_handle__ = __webpack_require__("./src/app/core/http-handle/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(confirmBookingService, router, bookingService, loaderService) {
        this.confirmBookingService = confirmBookingService;
        this.router = router;
        this.bookingService = bookingService;
        this.loaderService = loaderService;
        this.phoneNumber = "";
        this.displayChangeBooking = 'none';
        this.displayNotifiDeleteBooking = 'none';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.confirmBookingService.currentNotifiDeleteBooking.subscribe(function (data) {
            if (data === "block") {
                _this.displayNotifiDeleteBooking = "block";
            }
            else {
                _this.displayNotifiDeleteBooking = "none";
            }
        });
    };
    HomeComponent.prototype.checkExistBooking = function () {
        var _this = this;
        this.bookingService.checkExistBooking(this.phoneNumber).subscribe(function (bookingApi) {
            _this.bookingApi = bookingApi;
            if (_this.bookingApi.data === null) {
                //chua co booking chuyen den trang booking
                _this.confirmBookingService.changePhoneNumber(_this.phoneNumber);
                _this.router.navigate(['booking']);
            }
            else {
                //hiển thị dialog thông báo Anh/chị doi lich hay huy lich
                _this.openChangeBooking();
            }
        }, function (error) { console.log(error); return; });
    };
    HomeComponent.prototype.deleteBooking = function () {
        //1. delete booking 
        this.bookingService.deleteBooking(+this.phoneNumber).subscribe(function (bookingApi) {
        }, function (error) { console.log(error); return; });
        //2. set variable 
        this.confirmBookingService.changePhoneNumber("");
        this.confirmBookingService.changeDate("");
        this.confirmBookingService.changeHour("");
        this.confirmBookingService.changeStylistName("");
        this.confirmBookingService.changeCustomerName("");
        //3.display modal notifi
        this.displayChangeBooking = 'none';
        this.displayNotifiDeleteBooking = 'block';
    };
    HomeComponent.prototype.changeBooking = function () {
        this.confirmBookingService.changePhoneNumber(this.phoneNumber);
        this.router.navigate(['booking']);
    };
    HomeComponent.prototype.openChangeBooking = function () {
        this.displayChangeBooking = 'block';
    };
    HomeComponent.prototype.closeChangeBooking = function () {
        this.displayChangeBooking = 'none';
    };
    HomeComponent.prototype.openNotifiDeleteBooking = function () {
        this.displayNotifiDeleteBooking = 'block';
    };
    HomeComponent.prototype.closeNotifiDeleteBooking = function () {
        this.displayNotifiDeleteBooking = 'none';
        this.confirmBookingService.changeNotifiDeleteBooking("none");
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/core/home/home.component.html"),
            styles: [__webpack_require__("./src/app/core/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__confirm_booking_service__["a" /* ConfirmBookingService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__booking_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_4__http_handle__["b" /* LoaderService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/models/bookingApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingApi; });
var BookingApi = /** @class */ (function () {
    function BookingApi() {
    }
    return BookingApi;
}());



/***/ }),

/***/ "./src/app/core/models/checkPhoneApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckPhoneApi; });
var CheckPhoneApi = /** @class */ (function () {
    function CheckPhoneApi() {
    }
    return CheckPhoneApi;
}());



/***/ }),

/***/ "./src/app/core/models/collectionApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionApi; });
var CollectionApi = /** @class */ (function () {
    function CollectionApi() {
    }
    return CollectionApi;
}());



/***/ }),

/***/ "./src/app/core/models/customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(id, customer_name, phone_number, coin) {
        this.id = id;
        this.customer_name = customer_name;
        this.phone_number = phone_number;
        this.coin = coin;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/core/models/customerApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerApi; });
var CustomerApi = /** @class */ (function () {
    function CustomerApi() {
    }
    return CustomerApi;
}());



/***/ }),

/***/ "./src/app/core/models/galleryApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryApi; });
var GalleryApi = /** @class */ (function () {
    function GalleryApi() {
    }
    return GalleryApi;
}());



/***/ }),

/***/ "./src/app/core/models/pinApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinApi; });
var PinApi = /** @class */ (function () {
    function PinApi() {
    }
    return PinApi;
}());



/***/ }),

/***/ "./src/app/core/models/serviceApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceApi; });
var ServiceApi = /** @class */ (function () {
    function ServiceApi() {
    }
    return ServiceApi;
}());



/***/ }),

/***/ "./src/app/core/models/serviceItemApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceItemApi; });
var ServiceItemApi = /** @class */ (function () {
    function ServiceItemApi() {
    }
    return ServiceItemApi;
}());



/***/ }),

/***/ "./src/app/core/models/shiftApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftApi; });
var ShiftApi = /** @class */ (function () {
    function ShiftApi() {
    }
    return ShiftApi;
}());



/***/ }),

/***/ "./src/app/core/models/stylistApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylistApi; });
var StylistApi = /** @class */ (function () {
    function StylistApi() {
    }
    return StylistApi;
}());



/***/ }),

/***/ "./src/app/core/models/stylistsApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylistsApi; });
var StylistsApi = /** @class */ (function () {
    function StylistsApi() {
    }
    return StylistsApi;
}());



/***/ }),

/***/ "./src/app/core/pre-loader/pre-loader.component.css":
/***/ (function(module, exports) {

module.exports = "#loader {\n    position: absolute;\n    left: 60%;\n    top: 50%;\n    z-index: 1;\n    width: 150px;\n    height: 150px;\n    margin: -75px 0 0 -75px;\n    border: 8px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 8px solid #3498db;\n    width: 80px;\n    height: 80px;\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n    background: none ;\n    /* rgba(255, 255, 255, 1.64) */\n  }\n  \n  @-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n  \n  @keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n  \n  /* .backdrop{\n    position: fixed;\n    z-index: 1100;\n    background: rgba(255, 255, 255, 0.64);\n    \n  } */\n  \n  /* .lds-roller {\n    display: inline-block;\n    position: relative;\n    width: 64px;\n    height: 64px;\n  }\n  .lds-roller div {\n    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    transform-origin: 32px 32px;\n  }\n  .lds-roller div:after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background: #fff;\n    margin: -3px 0 0 -3px;\n  }\n  .lds-roller div:nth-child(1) {\n    animation-delay: -0.036s;\n  }\n  .lds-roller div:nth-child(1):after {\n    top: 50px;\n    left: 50px;\n  }\n  .lds-roller div:nth-child(2) {\n    animation-delay: -0.072s;\n  }\n  .lds-roller div:nth-child(2):after {\n    top: 54px;\n    left: 45px;\n  }\n  .lds-roller div:nth-child(3) {\n    animation-delay: -0.108s;\n  }\n  .lds-roller div:nth-child(3):after {\n    top: 57px;\n    left: 39px;\n  }\n  .lds-roller div:nth-child(4) {\n    animation-delay: -0.144s;\n  }\n  .lds-roller div:nth-child(4):after {\n    top: 58px;\n    left: 32px;\n  }\n  .lds-roller div:nth-child(5) {\n    animation-delay: -0.18s;\n  }\n  .lds-roller div:nth-child(5):after {\n    top: 57px;\n    left: 25px;\n  }\n  .lds-roller div:nth-child(6) {\n    animation-delay: -0.216s;\n  }\n  .lds-roller div:nth-child(6):after {\n    top: 54px;\n    left: 19px;\n  }\n  .lds-roller div:nth-child(7) {\n    animation-delay: -0.252s;\n  }\n  .lds-roller div:nth-child(7):after {\n    top: 50px;\n    left: 14px;\n  }\n  .lds-roller div:nth-child(8) {\n    animation-delay: -0.288s;\n  }\n  .lds-roller div:nth-child(8):after {\n    top: 45px;\n    left: 10px;\n  }\n  @keyframes lds-roller {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n   */"

/***/ }),

/***/ "./src/app/core/pre-loader/pre-loader.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div id=\"loader\">\n    \n    </div>\n\n\n"

/***/ }),

/***/ "./src/app/core/pre-loader/pre-loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreLoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreLoaderComponent = /** @class */ (function () {
    function PreLoaderComponent() {
    }
    PreLoaderComponent.prototype.ngOnInit = function () {
    };
    PreLoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pre-loader',
            template: __webpack_require__("./src/app/core/pre-loader/pre-loader.component.html"),
            styles: [__webpack_require__("./src/app/core/pre-loader/pre-loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreLoaderComponent);
    return PreLoaderComponent;
}());



/***/ }),

/***/ "./src/app/core/prices/prices.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat');\r\n\r\n#prices .nav-tabs{\r\n    margin-bottom:30px;\r\n   }\r\n\r\n#prices .img-price {\r\n    -webkit-transition: all 0.35s ease-in-out;\r\n    transition: all 0.35s ease-in-out;\r\n    width: 120px;\r\n    margin-bottom: 20px;\r\n   }\r\n\r\n#prices .nav-tabs li.active .img-price {\r\n    border: 5px solid;\r\n   }\r\n\r\n#prices .nav-tabs li:hover .img-price {\r\n    border: 5px solid;\r\n   }\r\n\r\n#prices .tab-pane {\r\n    text-align: center;\r\n   }\r\n\r\n.prices-main {\r\n    margin-top: 30px;\r\n   }\r\n\r\n/* Menu styling */\r\n\r\n.menu-body {\r\n    margin: 0 auto;\r\n    display: block;\r\n   }\r\n\r\n.menu-item {\r\n    margin: 20px 0px;\r\n    font-size: 20px;\r\n   }\r\n\r\n.menu-item-content{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        border-bottom: 1px dotted rgb(213, 213, 213);\r\n   }\r\n\r\n/* menu Name */\r\n\r\n.menu-item-name {\r\n    text-align: left;\r\n    font-weight: 600;\r\n    font-size: 19px;\r\n    width: 100%;\r\n    color: black;\r\n    margin-right: 10px;\r\n    font-family: 'Montserrat', sans-serif;\r\n   }\r\n\r\n/* menu Description */\r\n\r\n.menu-item-description {\r\n    font-size: .8em;\r\n    line-height: 1.5em;\r\n    margin-top: 10px;\r\n    text-align: left;\r\n   }\r\n\r\n/* menu Price */\r\n\r\n.menu-item-price {\r\n    float: right;\r\n    color: #333;\r\n    /* margin-top: -32px; */\r\n    font-size: 17px;\r\n    /* width: 30%; */\r\n   }\r\n\r\n.margin1 {\r\n    margin-top: 30px;\r\n}"

/***/ }),

/***/ "./src/app/core/prices/prices.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaderService.isLoading | async\">\n  <app-pre-loader></app-pre-loader>\n</div>\n<!-- ===== content starts  ===== -->\n<div id=\"content\" class=\"col-md-10 split\" *ngIf=\"!(loaderService.isLoading | async)\">\n  <!-- ===== Prices section starts  ===== -->\n  <div id=\"prices\">\n    <div class=\"content-wrapper\">\n      <div class=\"content-box container\">\n        <div class=\"inside-wrapper container\">\n          <!-- section-heading -->\n          <div class=\"section-heading\">\n            <h2>Bảng Giá</h2>\n          </div>\n          <!-- /section-heading -->\n          <!-- Navigation -->\n          <ul class=\"nav nav-tabs col-md-12  margin1\" id=\"myTab\">\n\n            <li class=\"\" *ngFor=\"let service of services; let i=index\" [ngClass]=\"{'active': service.id===1}\" (click)=\"selectService(service.id)\">\n              <a href=\"#tab{{i+1}}\" data-toggle=\"tab\">\n                <img class=\"img-responsive img-circle img-price\" src=\"../../../assets/img/gallery/nail1.jpg\" alt=\"\">\n                {{service.service_name}}\n              </a>\n            </li>\n\n          </ul>\n          <!-- Price tabs Start -->\n          <div class=\"tabbable\">\n            <div class=\"tab-content\">\n              <!--Tab Content 1 -->\n              <div class=\"tab-pane fade\" *ngFor=\"let service of services; let i=index\" [ngClass]=\"{'active in': service.id===1}\"\n                id=\"tab{{service.id}}\">\n                <!-- Prices: Hair & Face -->\n                <div class=\"prices-main\">\n                  <!-- First Row -->\n                  <div class=\"row\">\n                    <!-- menu body -->\n                    <div class=\"col-sm-12 col-md-6\" *ngFor='let serviceItem of serviceItemApi.data[service.id]'>\n                      <!-- Item starts -->\n                      <div class=\"menu-item\">\n                        <div class=\"menu-item-content\">\n                          <div class=\"menu-item-name\">\n                            {{serviceItem.name}}\n                          </div>\n                          <div class=\"menu-item-price\">\n                            {{serviceItem.price}}\n                          </div>\n                        </div>\n                        <div class=\"menu-item-description\">\n                        </div>\n                      </div>\n                      <!-- Item ends -->\n                    </div>\n                    <!-- / menu body -->\n\n                  </div>\n\n                </div>\n                <!-- /prices-main -->\n              </div>\n              <!-- /#tab1 -->\n            </div>\n            <!--tab-content-->\n          </div>\n          <!--tababble-->\n        </div>\n        <!-- /inside-wrapper -->\n      </div>\n      <!-- /content-box -->\n    </div>\n    <!-- / content-wrapper -->\n  </div>\n  <!-- /prices ends -->\n</div>\n<!-- /content -->"

/***/ }),

/***/ "./src/app/core/prices/prices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__booking_service__ = __webpack_require__("./src/app/core/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_handle__ = __webpack_require__("./src/app/core/http-handle/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PricesComponent = /** @class */ (function () {
    function PricesComponent(bookingService, loaderService) {
        this.bookingService = bookingService;
        this.loaderService = loaderService;
        this.serviceId = 1;
    }
    PricesComponent.prototype.ngOnInit = function () {
        this.getServices();
        this.getAllServiceItems();
    };
    PricesComponent.prototype.getServices = function () {
        var _this = this;
        this.bookingService.getServices().subscribe(function (serviceApi) { return _this.services = serviceApi.data; });
    };
    PricesComponent.prototype.selectService = function (serviceId) {
        this.serviceId = serviceId;
        //this.getServiceItemsByServiceId();
    };
    PricesComponent.prototype.getAllServiceItems = function () {
        var _this = this;
        this.bookingService.getServiceItemsByServiceId(this.serviceId).subscribe(function (serviceItemApi) {
            _this.serviceItemApi = serviceItemApi;
            console.log("index1: " + JSON.stringify(_this.serviceItemApi.data["1"][0]));
        });
    };
    PricesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-prices',
            template: __webpack_require__("./src/app/core/prices/prices.component.html"),
            styles: [__webpack_require__("./src/app/core/prices/prices.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__booking_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_2__http_handle__["b" /* LoaderService */]])
    ], PricesComponent);
    return PricesComponent;
}());



/***/ }),

/***/ "./src/app/core/services/services.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- ===== content starts  ===== -->\n<div id=\"content\" class=\"col-md-10 split\">\n  <!-- ===== Service section starts  ===== -->\n  <div id=\"services\">\n     <div class=\"content-wrapper\">\n        <div class=\"content-box container\">\n           <div class=\"inside-wrapper container\">\n              <!-- section-heading -->\n              <div class=\"section-heading\">\n                 <h2>Dịch Vụ</h2>\n              </div>\n              <!-- /section-heading -->\n              <div class=\"col-lg-12\">\n                 <h3>Quy trình thực hiện nail</h3>\n                 <p>Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>\n                 <p><strong>Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.</strong></p>\n              </div>\n              \n              <!-- alert box -->\n              <div class=\"alert alert-info col-md-12 margin1 text-center\">\n                 <h4>Thông tin Bảng Giá</h4>\n                 <p> Tùy từng loại dịch vụ sẽ có service và giá khác nhau. Anh/chị nhấn vào nút bên dưới để xem chi tiết\n                 </p>\n                 <!-- button -->\n                 <a class=\"btn btn-primary\" href=\"/prices\">Bảng Giá</a>\n              </div>\n              <!-- /alert -->\n           </div>\n           <!-- /inside-wrapper -->\n        </div>\n        <!-- /content-box -->\n     </div>\n     <!-- / content-wrapper -->\n  </div>\n  <!-- /services ends -->\n</div>\n<!-- /content -->"

/***/ }),

/***/ "./src/app/core/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-services',
            template: __webpack_require__("./src/app/core/services/services.component.html"),
            styles: [__webpack_require__("./src/app/core/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/core/side-nav/side-nav.component.css":
/***/ (function(module, exports) {

module.exports = "/*=========================== Navigation ============================ */\n.navbar-default .navbar-nav>li>a {\n    font-size: 17px;\n    color: #fff;\n    font-weight: 700;\n    border-bottom: 1px solid transparent;\n    display: inline-block;\n    text-decoration: none;\n    padding: 5px;\n    letter-spacing: 0.5px;\n    font-family: 'Open Sans', sans-serif;\n   }\n.navbar-default .navbar-nav>li>a::after {\n    content: '';\n    display: block;\n    width: 0;\n    margin-top: 5px;\n    height: 1px;\n    -webkit-transition: width .8s;\n    transition: width .8s;\n   }\n.navbar-default .navbar-nav>li>a:hover::after {\n    width: 100%;\n    -webkit-transition: width .8s;\n    transition: width .8s;\n   }\n.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {\n    background: transparent;\n   }\n.navbar-header {\n    float: left;\n    width: 100%;\n   }\n.navbar-default {\n    background: transparent;\n   }\n.navbar-default .navbar-toggle {\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n   }\n.navbar-default .navbar-toggle .icon-bar {\n    background-color: #fff;\n   }\n/* Dropdown */\n.dropdown-menu {\n    text-align: center;\n    width: 100%;\n   }\n.dropdown-menu>li>a {\n    -webkit-transition: all 0.8s;\n    transition: all 0.8s;\n    display: block;\n    padding: 5px 20px;\n    clear: both;\n    font-weight: 700;\n    color: #333;\n    white-space: nowrap;\n   }\n.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover {\n    color: #fff;\n   }\n.navbar-nav>li {\n    float: none;\n   }\n.navbar-nav {\n    float: left;\n    margin: 20px 0px;\n    width: 100%;\n   }\n.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover{\n    background:transparent!important;\n    color:#fff;\n   }\n.nav .open>a, .nav .open>a:focus, .nav .open>a:hover{\n     border:0px;\n   }\n/* Brand */\n.brand {\n    margin-bottom: 0px;\n    text-align: center;\n    max-width: 160px;\n    margin: auto;\n   }\n\n   "

/***/ }),

/***/ "./src/app/core/side-nav/side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ===== Sidebar starts ===== -->\r\n<div id=\"sidebar\" class=\"split col-md-2\">\r\n    <div class=\"affix-sidebar col-md-12\">\r\n        <div class=\"sidebar-nav\">\r\n            <div class=\"navbar navbar-default\" role=\"navigation\">\r\n                <div class=\"navbar-header\">\r\n                    <!-- collapse button -->\r\n                    <button type=\"button\" class=\"navbar-toggle\" (click)=\"toggleNavbar()\">\r\n                        <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                    </button>\r\n                    <!-- Logo -->\r\n                    <div class=\"brand\">\r\n                        <a routerLink=\"/home\"> <img src=\"../../../assets/img/logo.png\" alt=\"\" class=\"img-responsive center-block\">\r\n                        </a>\r\n                    </div>\r\n                    <!-- /brand -->\r\n                </div>\r\n                <!-- /navbar-header  -->\r\n                <div class=\"collapse navbar-collapse \" id=\"navbarDiv\" [ngClass]=\"{'in': navbarOpen}\">\r\n                    <ul class=\"nav navbar-nav\" id=\"sidenav01\">\r\n                        <li routerLinkActive=\"active\">\r\n                            <a routerLink=\"/home\" (click)=\"closeNavbar()\" >TRANG CHỦ</a>\r\n                        </li>\r\n                        <li routerLinkActive=\"active\">\r\n                            <a routerLink=\"/services\" (click)=\"closeNavbar()\">DỊCH VỤ</a>\r\n                        </li>\r\n                        <li routerLinkActive=\"active\">\r\n                            <a routerLink=\"/booking\" [routerLinkActive]=\"['active']\"  \r\n                            (click)=\"closeNavbar()\">ĐẶT LỊCH</a>\r\n                            </li>\r\n                        <li [routerLinkActive]=\"['active']\">\r\n                            <a routerLink=\"/gallery\" [routerLinkActive]=\"['active']\" \r\n                            (click)=\"closeNavbar()\">ALBUM\r\n                                ẢNH</a></li>\r\n                        <li [routerLinkActive]=\"['active']\">\r\n                            <a routerLink=\"/prices\" [routerLinkActive]=\"['active']\" (click)=\"closeNavbar()\">BẢNG\r\n                                GIÁ</a></li>\r\n                        <!-- <li [routerLinkActive]=\"['active']\"><a routerLink=\"/blog\" [routerLinkActive]=\"['active']\" (click)=\"closeNavbar()\">BLOG</a></li> -->\r\n                        <li [routerLinkActive]=\"['active']\"><a routerLink=\"/aboutus\" [routerLinkActive]=\"['active']\" (click)=\"closeNavbar()\">GIỚI\r\n                                THIỆU</a></li>\r\n                        <!-- <li [routerLinkActive]=\"['active']\"><a routerLink=\"/contact\" [routerLinkActive]=\"['active']\" (click)=\"closeNavbar()\">LIÊN\r\n                                HỆ</a></li> -->\r\n                    </ul>\r\n                    <!-- navbar-nav -->\r\n                </div>\r\n                <!--/.nav-collapse -->\r\n            </div>\r\n            <!--/navbar -->\r\n        </div>\r\n        <!--/sidebar-nav -->\r\n        <div class=\"navbar-info hidden-sm hidden-xs hidden-md\">\r\n            <p class=\"small-text\">\r\n                <i class=\"fas fa-map-marker-alt margin-icon\"></i> 35 Ngô Sĩ Liên -\r\n                Hà Nội\r\n            </p>\r\n            <p class=\"small-text\">\r\n                <i class=\"far fa-clock margin-icon\"></i>Thứ Hai - Chủ Nhật:\r\n                9am-9pm <br />\r\n            </p>\r\n            <!--Social icons -->\r\n            <!-- <div class=\"social-media \">\r\n                <a href=\"#\" title=\"\"><i class=\"fab fa-twitter\"></i></a>\r\n                <a href=\"#\" title=\"\"><i class=\"fab fa-facebook\"></i></a>\r\n                <a href=\"#\" title=\"\"><i class=\"fab fa-google-plus\"></i></a>\r\n                <a href=\"#\" title=\"\"><i class=\"fab fa-instagram\"></i></a>\r\n            </div> -->\r\n        </div>\r\n        <!-- /navbar-info -->\r\n    </div>\r\n    <!-- /affix-sidebar  -->\r\n</div>\r\n<!-- ===== / sidebar ends ===== -->"

/***/ }),

/***/ "./src/app/core/side-nav/side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavComponent = /** @class */ (function () {
    function SideNavComponent() {
        this.navbarOpen = false;
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    SideNavComponent.prototype.closeNavbar = function () {
        this.navbarOpen = false;
    };
    SideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__("./src/app/core/side-nav/side-nav.component.html"),
            styles: [__webpack_require__("./src/app/core/side-nav/side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    pusher: {
        key: 'b3a0673fc31ffb66e50a',
        cluster: 'ap1',
    },
    api_url: "http://localhost:8000/api"
    // api_url: "http://api.chamtramnail.com/public/api"
};


/***/ })

});
//# sourceMappingURL=core.module.chunk.js.map