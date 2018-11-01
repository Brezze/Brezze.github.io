$(function() {

	$('.lk__change').click(function(){
  
	  $(this).siblings().find('.contacts-content__bold').prop('readonly', false);
	  $(this).siblings().find('.contacts-content__bold').addClass('active');
	  
	});

	$('.save').click(function(){
	  
	  $('.contacts-content__bold.active').prop('readonly', true).removeClass('active');
	  
	});


	// ZOOM 

	$('.zoom').elevateZoom();

	// COLORS CHOOSE

	$('.catalog-content__colors-block span').click(function(){
    	$('.catalog-content__colors-block span.active').removeClass('active');
    	$(this).addClass('active');
    })

    // SIZES CHOOSE

    $('.catalog-content__sizes-block span').click(function(){
    	$('.catalog-content__sizes-block span.active').removeClass('active');
    	$(this).addClass('active');
    })

	// ACCORDION

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

    // TABLE ACCORDION

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

	if ($(window).width() < 992) {
	   $('#filterToggler').click(function(){
			$('.catalogs-sidebar__wrap').slideToggle();
		})
	}

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

	$('.btn-registr').magnificPopup({
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
		useTransform: false,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: false,
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
		useTransform: false,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: false,
	})

	$('.s-banner__slider').slick({
		rows: false,
		arrows: false,
		dots: true,
		useTransform: false,
		autoplay: true,
		autoplaySpeed: 3000, 
		pauseOnHover: false,
	})

	$('.lookbook-slider-first').slick({
		rows: false,
		arrows: true,
		dots: true,
	})

	$('.lookbook-slider-second').slick({
		rows: false,
		dots: true,
	})

	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  rows: false,
	  dots: true,
	  asNavFor: '.slider-nav'
	});

	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  focusOnSelect: true,
	  vertical: true,
	  arrows: false,
	  rows: false,
	  verticalSwiping: true,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        vertical: false,
	        verticalSwiping: false,
	      }
	    },
	  ]
	});

});

// CART COUNTER

$(".cart-counter input").val("1 шт");

$(".cart-counter .cart-table__count-arrow").click(function() {
  var $input = $(this).siblings().find("input");
  var val = +$input.val().replace("шт", "");
  if ($(this).hasClass('add'))
    $(this).siblings().find("input").val(Math.round((val + 1)*10)/10+' шт');
  else if (val >= 1)
    $(this).siblings().find("input").val(Math.round((val - 1)*10)/10+' шт');
});