//----------------------------------- Document ready -----------------------------------//
function clickNav(This) {
	// var hours = document.querySelectorAll(".calendar-7-hour");
	// hours.removeClass("active");
	// $(This).find(".calendar-7-hour").addClass("active");

	var li = $('#sidenav01').find("li");
	li.removeClass("active");
	$(This).addClass("active");
}

$(document).ready(
	function () {
		"use strict";

		// Scrolling feature

		$('.page-scroll a').on('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});


		$("#owl-calendar").owlCarousel(
			{
				nav: true,
				margin: 20,
				navText: ["<i class='fa fa-chevron-left'></i>",
					"<i class='fa fa-chevron-right'></i>"],
				dots: true,
				loop: false,
				autoplay: false,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 1,
					},
					991: {
						items: 2,
					},
					1200: {
						items: 4,
					}
				}
			});

		$('#owl-testimonial').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: true,
			nav: false,
			autoplayHoverPause: true,
			dots: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				991: {
					items: 1,
				},

			}
		});

		$("#owl-team").owlCarousel(
			{
				nav: true,
				navText: ["<i class='fa fa-chevron-left'></i>",
					"<i class='fa fa-chevron-right'></i>"],
				dots: true,
				margin: 10,
				loop: true,
				autoplay: false,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 2,
					},
					1200: {
						items: 3,
					},

				}
			});

		
			$("#owl-services").owlCarousel(
				{
					nav: true,
					margin: 20,
					navText: ["<i class='fa fa-chevron-left'></i>",
						"<i class='fa fa-chevron-right'></i>"],
					dots: true,
					loop: false,
					autoplay: false,
					responsiveClass: true,
					responsive: {
						0: {
							items: 1,
						},
						600: {
							items: 1,
						},
						991: {
							items: 2,
						},
						1200: {
							items: 3,
						}
					}
				});
	
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 6,
				slidesPerColumn: 4,
				spaceBetween: -10,
				scrollbar: {
					el: '.swiper-scrollbar',
					hide: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});

			$("#owl-one").owlCarousel(
				{
					nav: true,
					margin: 20,
					navText: ["<i class='fa fa-chevron-left'></i>",
						"<i class='fa fa-chevron-right'></i>"],
					dots: true,
					loop: false,
					autoplay: false,
					responsiveClass: true,
					responsive: {
						0: {
							items: 1,
						},
						600: {
							items: 1,
						},
						991: {
							items: 2,
						},
						1200: {
							items: 4,
						}
					}
				});

	}); // end document ready

// ----------------------------------- Window load function
// -----------------------------------//

$(window).load(function () {
	"use strict";

	// Gallery Isotope

	var $container = $('#gallery-isotope');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
			layoutMode: 'masonry'
		}

	});
	$(window).smartresize(function () {
		$container.isotope({
			columnWidth: '.col-sm-3'
		});
	});

	// Magnific Popup

	$('#gallery').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will
		// open
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// Gallery Nav Filter

	$('.cat a').on('click', function () {
		$('.cat .active').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});


	// Page Preloader

	$("#preloader").fadeOut("slow");

}); // end window load function
