$(function() {

	$(".search__btn").click(function(){
		$(".search-input").toggleClass("search-input--open");
		$(".search__btn").replaceWith("<button class=\"search__btn\"><img src=\"img/search_icon.png\" alt=\"alt\"></button>")
	});

	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('.main-nav').toggleClass('active');
		$('body').toggleClass('hidden')
	});

    $(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("is-active").eq($(this).index()).addClass("is-active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("is-active");

	$('.groups-list > li').click(function(){
		$(this).find('.dropdown').slideToggle();
		if($(this).hasClass('has-dropdown')) {
			$(this).toggleClass('active');
		}
	})

    const SHOW = 10;
	$('.our-bk li').slice(SHOW).hide().addClass('hidden');
	$('#loadMore').on('click', function(e) {
	  e.preventDefault();
	  $('.our-bk li.hidden').fadeToggle();
	});
	$('.our-bk__btn span').click(function(){
		$('span.active').removeClass('active');
	  	$(this).addClass('active');
	})

	const SHOW2 = 4;
	const count = $('.rating').length;
	var total = count - 4;

	$('.rating__showmore a').text(total);
	$('.rating-block .rating').slice(SHOW2).hide().addClass('hidden');
	$('#loadMore2').on('click', function(e) {
	  e.preventDefault();
	  $('.rating-block .rating.hidden').fadeToggle();
	  $('.rating__showmore').fadeToggle();
	  $('.rating__footer').toggleClass('active')
	});
	$('.rating-more span').click(function(){
		$('span.actives').removeClass('actives');
	  	$(this).addClass('actives');
	})


});


// RANGE SLIDER

var skipSlider = document.getElementById('skipstep');

noUiSlider.create(skipSlider, {
	step: 1,
	tooltips: true,
    range: {
        'min': 0,
        'max': 100
    },
    start: [0, 100],
	format: wNumb({
	    decimals: 0,
	})
});

var skipValues = [
    document.getElementById('skip-value-lower'),
    document.getElementById('skip-value-upper')
];

skipSlider.noUiSlider.on('update', function (values, handle) {
    skipValues[handle].innerHTML = values[handle];
});