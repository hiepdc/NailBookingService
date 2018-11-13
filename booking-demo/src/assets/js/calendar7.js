
(function($) {
	'use strict'

	function Calendar(options) {
		var that = this;

		this.trigger = options.trigger
		this.calendarSelector = '#calendar-7'
		this.times = {}

		if (options.allowTimeStart && options.allowTimeEnd) {
			this.times.allowHourStart = parseInt(options.allowTimeStart
					.split(':')[0], 10)
			this.times.allowHourEnd = parseInt(
					options.allowTimeEnd.split(':')[0], 10)

			this.times.allowMinuteStart = parseInt(options.allowTimeStart
					.split(':')[1], 10)
			this.times.allowMinuteEnd = parseInt(options.allowTimeEnd
					.split(':')[1], 10)
		}

		that.init()

	}

	Calendar.prototype.init = function() {
		// 未来七天
		/*
		var weeksOfzhTW = [ 'Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy' ]
		var threeDay = ['Hôm nay', 'Ngày mai', 'Ngày kia']
		var today = new Date();
		this.year = today.getFullYear();
		this.month = Number(today.getMonth()) + 1;
		this.day = today.getDate();

		var html = '';

		for (var i = 0; i < 3; i++) {
			var classNames = i === 0 ? 'calendar-7-day active'
					: 'calendar-7-day';
			var month = today.getMonth() + 1

			html += '<div class="' + classNames + '" data-year="'
					+ today.getFullYear() + '" data-month="' + month
					+ '" data-day="' + today.getDate()
					+ '" onclick=(choose_date())>\
            	<span class="text-date-1">' + threeDay[i] + '</span>\
            		\
            	<span class="text-date-2">'
					+ weeksOfzhTW[today.getDay()]
					+ ', ' + today.getDate() + '/' + month +'</span>\
            	</div>';

			today.setDate(today.getDate() + 1);
		}

		$('.days').append(html);
		*/
	

		/*this.renderHours();*/
		this.dateClickHandler();
	}

	// Calendar.prototype.getHours = function() {
	// 	var today = new Date();
	// 	var currentDay = today.getDate();
	// 	var currentHour = today.getHours();
	// 	var currentMinute = today.getMinutes();
	// 	var hours24 = [];
	// 	var minute24 = [];
	// 	for (var i = this.times.allowHourStart; i <= this.times.allowHourEnd; i++) {

	// 		for (var j = 0, text = ''; j < 60;) {

	// 			text = j < 10 ? '0' + j : j;
	// 			if ((i === currentHour && j < currentMinute && currentDay === this.day)
	// 					|| (i === this.times.allowHourEnd && this.times.allowMinuteEnd < j)
	// 					|| (i === this.times.allowHourStart && this.times.allowMinuteStart > j)
	// 					|| (i < currentHour && this.day === currentDay)
	// 					|| (this.day === currentDay && i === currentHour && currentMinute >= 45)) {

	// 				hours24.push({
	// 					// lấy lịch làm việc của stylist từ db rồi disable giờ
	// 					// không
	// 					// có
	// 					disabled : true,
	// 					hour : i + ':' + text
	// 				})
	// 			} else {
	// 				hours24.push({
	// 					disabled : false,
	// 					hour : i + ':' + text
	// 				})
	// 			}
	// 			j += 15;
	// 		}
	// 	}

	// 	return hours24
	// }

	// Calendar.prototype.renderHours = function() {
	// 	var hours = this.getHours();
	// 	var html = ''
	// 	for (var i = 0; i < hours.length; i++) {
	// 		if (i % 4 === 0) {
	// 			html += '<div class="owl-item"><div class="row">'
	// 		}
	// 		if (hours[i].disabled) {
	// 			html += '<div class="col-3">'
	// 					+ '<span class="calendar-7-hour disabled" data-hour="'
	// 					+ hours[i].hour + '">' + hours[i].hour + '</span>'
	// 					+ '</div>'
	// 		} else {
	// 			html += '<div class="col-3">'
	// 					+ '<span class="calendar-7-hour" data-hour="'
	// 					+ hours[i].hour + '">' + hours[i].hour + '</span>'
	// 					+ '</div>'
	// 		}
	// 		if (i % 4 === 3) {
	// 			html += '</div></div>'
	// 		}

	// 	}

	// 	$('#owl-calendar .owl-stage').append(html);

	// }

	Calendar.prototype.dateClickHandler = function() {
		var that = this

		// 綁定日期的點擊
		$('.calendar-7-day').click(function(event) {
			$('.calendar-7-day').removeClass('active')
			$(this).addClass('active')
			
		});

		// 绑定小时的点击
		$(document).on('click', '.calendar-7-hour', function() {
			$('.calendar-7-hour').removeClass('active')
			$(this).addClass('active')
		});
	}

	$.fn.Calendar7 = function(options) {
		this.each(function(index, el) {
			var settings = {
				trigger : $(this),
				allowTimeStart : '',
				allowTimeEnd : ''
			};
			new Calendar($.extend(true, settings, options));
		});
	}
}(jQuery));