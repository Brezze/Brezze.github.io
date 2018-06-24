$(function() {

	$('.client').slick({
		dots: true,
		arrows: false,
		slidesToShow: 2,
    centerMode: true,
    centerPadding: '370px',
		responsive: [
    {
      breakpoint: 1480,
      settings: {
        slidesToShow: 2,
        centerPadding: '170px',
        centerMode: true,
      }
    },
		{
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        centerPadding: '70px',
        centerMode: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }
    }
  ]
	});

	$('.hamburger').click(function() {
      $(this).toggleClass('is-active');
      $('.main-nav').toggleClass('open');
  });

  $('.open-modal').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  $("#phone").mask("+7 (999) 999-9999");
  $("#phone1").mask("+7 (999) 999-9999");
  $("#phone2").mask("+7 (999) 999-9999");

  $('.scroll-down').click(function(e) { // без мерцания
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#problem').position().top
    }, 500);
  });

  $(".main-list").on("click", "a", function(event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top - 50 }, 1000);

          if($(window).width() <= 767) {
            $('.page-header-contact').slideToggle(function() {
          if ($(this).css('display') === 'none') {
              $(this).removeAttr('style');
              }
          });
            $('.hamburger').toggleClass('is-active');
          }
  });

});
