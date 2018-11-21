$(function() {

    $('.main-list a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass('hid');
        $('.main-nav').removeClass('open');
        $('.hamburger').removeClass('active')
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

	$('.hamburger').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('hid');
		$('.main-nav').toggleClass('open');
	})

    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

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

    $('.main__slider').slick({
    	rows: false,
    	arrows: false,
    	 autoplay: true,
  		autoplaySpeed: 2000,
  		fade: true,
  		cssEase: 'linear',
  		pauseOnHover: false,
    })

});
