$(function() {

	$(window).on('resize', function() {
    if ($(window).width() <= 992) {
        $('.info-first').click(function(){
				  $('.s-features__item-info + .first').toggleClass('open');
				});
				$('.info-second').click(function(){
				  $('.s-features__item-info + .second').toggleClass('open');
				});
    } 
}).trigger('resize');



	// MODAL

	$('.callback-modal').magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	// SLICK SLIDER

	$('.s-plan-slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
	});

	// ACCORDION JQUERY

	$('.s-document > li:eq(0) a').addClass('active').next().slideDown();

    $('.s-document a').click(function(j) {
        var dropDown = $(this).closest('li').find('.drop');

        $(this).closest('.s-document').find('.drop').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.s-document').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

});

