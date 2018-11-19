$(function() {

    $('.clients-slider').slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  rows: false,
	  responsive: [
	    {
	      breakpoint: 1025,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

    $('.propose-slider__item-content').first().show().animate({
	    width: '40%',
	  });
	  $('.propose-slider__item-num').click(function() {
	    $(this)
	      .next().show().animate({
	        width: '40%',
	      })
	      .siblings(".propose-slider__item-content").animate({
	        width: 0
	      });

	  });

	$('.scroll[href*="#"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1100, 'linear');
	});

	  $('.callbacks').magnificPopup({
		  type:'inline',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  },
		  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		});

	  $('.map-item').magnificPopup({
		  type:'inline',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  },
		  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		});

	  $('.team-item__img-dots').magnificPopup({
		  type:'inline',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  },
		  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		});

	  $('.main-video__item').magnificPopup({
		  type: 'iframe',
		});

});
