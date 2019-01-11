$(function() {

	$(window).on("scroll",function() {

        if($(this).scrollTop() > 200) 

            $(".header").addClass("shadow");

        else 

            $(".header").removeClass("shadow");

    })

	if ($(window).width() < 767) {
	   $('.hamburger').click(function(){
			$(this).toggleClass('active');
			$('.header .col-auto:nth-child(3)').slideToggle();
		})
	   $('.main-list a[href*="#"]').on('click', function (e) {
			$('.header .col-auto:nth-child(3)').slideUp();
		});
	}


	$('.modal-item .btn').click(function(){
		$.magnificPopup.close();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50 + 'px'
		}, 500, 'linear');
		$('body').removeClass('body-hidden');
	})

	// $('.hamburger').click(function(){
	// 	$(this).toggleClass('active');
	// 	$('.header .col-auto:nth-child(3)').slideToggle();
	// })

	$('.main-list a[href*="#"]').on('click', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50 + 'px'
		}, 500, 'linear');
		// $('.header .col-auto:nth-child(3)').slideUp();
		$('.hamburger').removeClass('active');
		$('body').removeClass('body-hidden');
	});

	$('.footer-list a[href*="#"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50 + 'px'
		}, 500, 'linear');
	});

	function setProgress(index) {
	  var calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

	  $progressBar
	    .css('background-size', calc + '% 100%')
	    .attr('aria-valuenow', calc );

	}

	var $slider = $('.main-slider');
	var $progressBar = $('.progress');

	$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
	  setProgress(nextSlide);
	});

	$slider.slick({
	  rows: false, 
    	slidesToShow: 1,
  		slidesToScroll: 1,
  		centerMode: true,
  		autoplay: true,
 	 	autoplaySpeed: 10000,
	});  

	setProgress(0);


    $('.work-item__img').magnificPopup({
	  type:'inline',
	  removalDelay: 500, //delay removal by X to allow out-animation
	  fixedContentPos: false,
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

	 $('.work-item__img').on( "click", function() {
		$('.header').removeClass('shadow');
	 	$('body').addClass('body-hidden');
	});

});
