$(function() {
    $('div.intro').css('height', $(window).height());


    window.onresize = function(event) {
	    $('div.intro').css('height', $(window).height());
	};

});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(function() {
    window.sr = ScrollReveal();
	sr.reveal('.reveal', {duration: 1000});
	sr.reveal('.reveal-i', { duration: 1500});
	sr.reveal('.reveal-s', { duration: 1500 }, 150);
	sr.reveal('.reveal-t', { duration: 2000 }, 150);
});

