$(window).load(function() {
    $('#slider').nivoSlider();
});
$(document).ready(function() {
	$(".fancybox").fancybox();
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
	//$(".fancybox-media").trigger('click');
	$('#menu').slicknav({
		prependTo:'#mobilenavigation'
	});

	$('.cclients').slick({
	 	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	asNavFor: '.slider-for',
	  	dots: true,
	  	centerMode: true,
	  	focusOnSelect: true,
	  	autoplay: true,
		autoplaySpeed: 2000,
	});
});
