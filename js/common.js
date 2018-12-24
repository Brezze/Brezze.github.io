
$(function() {

    $('.news-block').masonry({
      itemSelector: '.news-item',
      gutter: 18,
      // percentPosition: true, 
      horizontalOrder: true
    })

   

    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $('.selectize').selectize({
        placeholder: 'Иркутск',
    });

    $('.selectize-name').selectize({
        placeholder: '77-1917-58933: Александр Вильченко',
    });

    $('.selectize-company').selectize({
        placeholder: 'Сбербанк Онлайн',
    });

    $('.selectize .selectize-input').before('<span>Город:</span>');

    $('.main-slider').slick({
    	rows: false,
    	arrows: false,
    	dots: true,
    	useTransform: false,
    })

    $('.partners').slick({
        rows: false,
        slidesToShow: 5,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
    })

    $('.arrow').click(function(){
    	$(this).next().toggleClass('open');
    });

    $('.hamburger').click(function() {
      $(this).toggleClass('is-active');
      $('body').toggleClass('hidden');
      $('.header-top__menu').toggleClass('open');
  });

    $('.modal-button').magnificPopup({
	  type:'inline',
	  removalDelay: 500, //delay removal by X to allow out-animation
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

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


});

      

