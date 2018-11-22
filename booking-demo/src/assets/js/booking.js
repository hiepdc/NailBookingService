function numberWithCommas(This) {
	var phone = ('"' + This.val() + '"').replace(/[^\d]+/g, '');
	var length = phone.length;
	if (length >= 10 && length <= 12) {
		if (length === 10) {
			This.val(phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1.$2.$3"));
		}
		if (length === 11) {
			This.val(phone.replace(/(\d{4})(\d{3})(\d{4})/, "$1.$2.$3"));
		}
		if (length === 12) {
			This.val(phone.replace(/(\d{4})(\d{4})(\d{4})/, "$1.$2.$3"));
		}
	}
};

function isNumber(evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

// toast notify
function showToast(type, message) {
	var title = "";
	console.log(type + "|" + message);
	switch (type) {
		case "msg":
			title = "Hii!";
			iziToast.success({
				// title: title,
				message: message,
			});
			break;
		case "err":
			title = "Lỗi: ";
			iziToast.error({
				title: title,
				message: message,
			});
			break;
		case "war":
			title = "Oop!";
			iziToast.warning({
				title: title,
				message: message,
			});
			break;
		default:
			title = "Hii!";
			iziToast.message({
				title: title,
				message: message,
			});
	}

}

function clickInputPhone() {
	var inputPhone = document.getElementById('phone').value;
	var phone = inputPhone.replace(/\./g, '');

	// check valid phone
	if (isPhone(phone)) {
		showToast("msg", "Số điện thoại hợp lệ");
	} else {
		showToast("msg", "Anh hãy nhập đúng số điện thoại!");
	}

}

function isPhone(phone) {
	phone = String(phone);
	var x = phone.substring(0, 1);
	var x2 = phone.substring(1, 2);

	if (phone.length < 10 || phone.length > 11 || x !== '0' || x2 === '0'
		|| validatePhone(phone) === false)
		return false;
	else
		return true;
}

function validatePhone(txtPhone) {
	var filter = /^[0-9-+]+$/;
	return filter.test(txtPhone);
}

function click_stylist(This) {
	var imgs = $('.serviceBox').find("img");
	imgs.removeClass("border");
	$(This).find("img").addClass("border");

	// var hours = document.querySelectorAll(".calendar-7-hour");
	// hours.forEach(function(item){
	// 	item.hidden = true;
	// });
}

function click_hour(This) {
	// var hours = document.querySelectorAll(".calendar-7-hour");
	// hours.removeClass("active");
	// $(This).find(".calendar-7-hour").addClass("active");

	$('.calendar-7-hour').removeClass("active");
	$(This).addClass("active");
}


$('#closeVerifyPhoneModal').click(function () {
	$('#modalVerifyPhone').modal('hide');
});
