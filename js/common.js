$(function() {

	$('.btn-scroll').click(function(e) { // без мерцания
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#tren').position().top
    }, 500);
});
	$('.btn-scroll1').click(function(e) { // без мерцания
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#form').position().top
    }, 500);
});

});
