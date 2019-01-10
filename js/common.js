$(function() {

	$(window).on("scroll",function() {

        if($(this).scrollTop() > 200) 

            $(".header").addClass("shadow");

        else 

            $(".header").removeClass("shadow");


    })

	$('.hamburger').click(function(){
		$(this).toggleClass('active');
		$('.header .col-auto:nth-child(3)').toggleClass('open');
		$('.logo').toggleClass('mobile');
	})

	$('.main-list a[href*="#"]').on('click', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50 + 'px'
		}, 500, 'linear');
		$('.header .col-auto:nth-child(3)').removeClass('open');
		$('.hamburger').removeClass('active');
		$('body').removeClass('body-hidden');
	});

	$('.footer-list a[href*="#"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50 + 'px'
		}, 500, 'linear');
	});

    $('.main-slider').slick({
    	rows: false, 
    	slidesToShow: 1,
  		slidesToScroll: 1,
  		centerMode: true,
  		responsive: [
	    {
	      breakpoint: 1441,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	  ]
    })

    $('.work--top .work-item__img').magnificPopup({
	  type:'inline',
	  removalDelay: 500, //delay removal by X to allow out-animation
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

    $('.modal-item__close').on( "click", function() {
	  $.magnificPopup.close();
	  $('body').removeClass('body-hidden');
	});

	 $('.work--top .work-item__img').on( "click", function() {
	  $('.header').removeClass('shadow');
	  $('body').toggleClass('body-hidden');
	});

});
