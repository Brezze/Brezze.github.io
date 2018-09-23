$(function(){

	$('.inner-nav__toggler').click(function(){

		$('.inner-nav__list').toggleClass('open')

	})

	$('.inner-search input').focusin(function(){

		$('.inner-search__placeholder').fadeOut()

	})

	$('.inner-search input').focusout(function(){

		$('.inner-search__placeholder').fadeIn()

	})

});

document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
      
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
