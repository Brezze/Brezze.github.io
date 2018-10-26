$(function() {

	// ACCORDION

	// $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('.drop');

        $(this).closest('.accordion').find('.drop').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

    // table accordion
	    $(".lk-table tr.view").on("click", function(){
	    if($(this).hasClass("open")) {
	      $(this).removeClass("open").next(".fold").removeClass("open");
	    } else {
	      $(".lk-table tr.view").removeClass("open").next(".fold").removeClass("open");
	      $(this).addClass("open").next(".fold").addClass("open");
	    }
  	});

    // TABS

	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// MENU CODE

	$('.main-list > .has-dropdown > a').click(function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle();
	})

	$('.lvl2 .has-dropdown > a').click(function(){
		$(this).next().slideToggle();
	})

	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('.main-nav').toggleClass('open');
	})

	$('#filterToggler').click(function(){
		$('.catalogs-sidebar__wrap').slideToggle();
	})

	// SEARCH HEADER

    $('.search__icon').click(function(){
    	$('.search input').toggleClass('active');
    })

    $(".search__icon").click(function(){
		$(".search input").toggleClass("search__input--open");
		$(this).replaceWith("<button class=\"search__icon\" form=\"search\"><img src=\"img/search.png\" alt=\"alt\"></button>")
	});

    // POPUP MODALS

    $('.user').magnificPopup({
	  type:'inline',
	  removalDelay: 500,
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true
	});

    $('.sizes').magnificPopup({
	  type:'inline',
	  removalDelay: 500,
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true
	});

	$('.cart').magnificPopup({
	  type:'inline',
	  removalDelay: 500, 
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true
	});

	$('.modal__close').on( "click", function() {
	  $.magnificPopup.close();
	});

	// SLICK SLIDER

	$('.s-main__slider').slick({
		rows: false,
		arrows: false,
		dots: true,
		useTransform: false 
	})

	$('.style-slider').slick({
		rows: false,
		centerMode: true,
		// arrows: false,
		dots: true,
		// centerPadding: '10%',
		slidesToShow: 3,
	})

	$('.s-footer__slider').slick({
		rows: false,
		arrows: false,
		dots: true,
		useTransform: false 
	})

	$('.s-banner__slider').slick({
		rows: false,
		arrows: false,
		dots: true,
		useTransform: false 
	})

	$('.lookbook-slider-first').slick({
		rows: false,
		arrows: false,
		dots: true,
	})

	$('.lookbook-slider-second').slick({
		rows: false,
		dots: true,
	})

});


var skipSlider = document.getElementById('skipstep');

noUiSlider.create(skipSlider, {
	step: 1000,
    range: {
        'min': 0,
        'max': 100000
    },
    start: [0, 100000],
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