$(document).ready(function() {

	// User Menu Toggler
	function userMenuToggle() {

		var items = $('.user-menu__el');

		items.each(function (index,el) {
			$(el).click(function () {
				if (!$(this).hasClass('is-active')) {
					items.removeClass('is-active');
					$(this).addClass('is-active');
				}
			});

		});

	}


	// Language Menu Toggler
	function langToggle() {

		var items = $('.lang__el');

		items.each(function (index,el) {
			$(el).click(function () {
				if (!$(this).hasClass('is-active')) {
					items.removeClass('is-active');
					$(this).addClass('is-active');
				}
			});

		});

	}


	// Events Menu Toggler
	function eventsMnu() {

		var items = $('.vertical-list__el');

		items.each(function (index,el) {
			$(el).click(function () {
				if (!$(this).hasClass('is-active')) {
					items.removeClass('is-active');
					$(this).addClass('is-active');
				}
			});

		});

	}


	//fancybox
	$(".img-gallery").fancybox({
		padding : 0,
		openEffect	: 'none',
		closeEffect	: 'none',
		helpers: {
	    overlay: {
	      locked: false
    }
	}});


	userMenuToggle();
	langToggle();
	eventsMnu();



});
