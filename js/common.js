$(function(){

	$('.s-inner--about-popup').magnificPopup({
	  type: 'iframe',
	});

	$(".clients-modal__content-wrap").mCustomScrollbar({
		callbacks:{
	    onTotalScroll:function(){
	      $('.clients-modal__content').addClass('scolleds')
	    },
	    onTotalScrollBack:function(){
	     $('.clients-modal__content').removeClass('scolleds')
	    }
	}
	});

	$('.s-experience-marker').click(function(){
		$(this).find('.s-experience__popup').toggleClass('open', function(){
			$('.fa-map-marker-alt').css("display", "block");
		})
	});

	// $('.s-experience__popup-close').click(function(){
	// 	$('.s-experience__popup').removeClass('open')
	// })

	$('.s-client-item').magnificPopup({
	  	type:'inline',
	  	callbacks: {
	    open: function() { 
	        $('.clients-modal__close').on('click',function(event){
	          event.preventDefault();
	          $.magnificPopup.close();
	        }); 
	    }
	  }
	 });

	$('.js-lazyYT').lazyYT(); 

	$('.s-video-item__arrow').click(function(){
		$(this).next().slideDown();
	});

	$('.s-video-item__hidden').click(function(){
		$(this).slideUp();
	});

		$('.team-slider').slick({
			arrows: false,
			dots: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			rows: false,
			responsive: [
	    {
	      breakpoint: 1028,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
		});

		var stHeight = $('.team-slider .slick-track').height();
		$('.team-slider-item').css('height',stHeight + 'px' );

		$('.s-reviews-item__doc-link').magnificPopup({
	  	type:'image',
	 });


	$('.inner-search input').focus(function(){

		$('.inner-search__placeholder').fadeOut()

	})

	$('.inner-search input').blur(function(){

		if($('.inner-search input').val().length === 0 ) {
			$('.inner-search__placeholder').fadeIn()
		}

		else {
			$('.inner-search__placeholder').fadeOut()
		}

	})

	// $('.inner-search input').focusout(function(){

	// 	$('.inner-search__placeholder').fadeIn()

	// })

	function load(count) {
  const $items = $('.counters-item');

	  $items.filter(':hidden').slice(0, count).fadeIn();

	  const visible = $items.filter(':visible').length;

	  $('.exist').text(visible);
	  $('.general').text($items.length);

	 //  if ($items.length === visible) {
	 //    $('.loadmore').fadeOut('slow');
		// }
	}

	$('.loadmore').on('click', function(e) {
	  e.preventDefault();
		load(12);
	});

	load(12);

	function loadReview(count) {
  const $itemsReview = $('.counters-10');

	  $itemsReview.filter(':hidden').slice(0, count).fadeIn();

	  const visible = $itemsReview.filter(':visible').length;

	  $('.existReview').text(visible);
	  $('.generalReview').text($itemsReview.length);

	 //  if ($itemsReview.length === visible) {
	 //    $('.loadmoreReview').fadeOut('slow');
		// }
	}

	$('.loadmore').on('click', function(e) {
	  e.preventDefault();
		loadReview(10);
	});

	loadReview(10);

	function loadLinks(count) {
  const $itemsloadLinks = $('.loadlinks');

	  $itemsloadLinks.filter(':hidden').slice(0, count).fadeIn();

	  const visible = $itemsloadLinks.filter(':visible').length;

	  $('.existLinks').text(visible);
	  $('.generalLinks').text($itemsloadLinks.length);

	 //  if ($itemsReview.length === visible) {
	 //    $('.loadmoreReview').fadeOut('slow');
		// }
	}

	$('.loadlink').on('click', function(e) {
	  e.preventDefault();
		loadLinks(10);
	});

	loadLinks(10);

});

// CUSTOM INPUT DOWNLOAD

document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
      
// button.addEventListener( "keydown", function( event ) {  
//     if ( event.keyCode == 13 || event.keyCode == 32 ) {  
//         fileInput.focus();  
//     }  
// });
// button.addEventListener( "click", function( event ) {
//    fileInput.focus();
//    return false;
// });  
