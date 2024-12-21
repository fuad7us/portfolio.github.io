/*
* Template Name: MyPortfolio
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* License: https://bootstrapmade.com/license/
*/

(function ($) {
  "use strict";

  var fancyBox = function(){
  	$(".various").fancybox({
			maxWidth	: 300,
			maxHeight	: 600,
			width       : 300,
			height      : 600,
			fitToView	: true,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});

		$(".various1").fancybox({
			maxWidth	: 300,
			maxHeight	: 250,
			width       : 300,
			height      : 250,
			fitToView	: true,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});

		$(".various2").fancybox({
			maxWidth	: 970,
			maxHeight	: 250,
			width       : 970,
			height      : 250,
			fitToView	: true,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});

		$(".various3").fancybox({
			maxWidth	: 320,
			maxHeight	: 480,
			width       : 320,
			height      : 480,
			fitToView	: true,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});

		$(".various4").fancybox({
			maxWidth	: 980,
			maxHeight	: 300,
			width       : 980,
			height      : 300,
			fitToView	: true,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});

		$(".various5").fancybox({
			maxWidth	: 750,
			maxHeight	: 430,
			width       : 750,
			height      : 430,
			fitToView	: true,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
  }
  

  var burgerMenu = function() {
	  $('.burger').click(function(e) {
	  	$(window).scrollTop(0);
	    if(!$('.burger').hasClass('active'))
	      $('.burger').addClass('active');
	    else
	      $('.burger').removeClass('active');
	  });
  }
  burgerMenu();

  var siteIstotope = function() {
	  var $container = $('#portfolio-grid').isotope({
	    itemSelector : '.item',
	    isFitWidth: true
	  });

	  $(window).resize(function(){
	    $container.isotope({
	      columnWidth: '.col-sm-3'
	    });
	  });
	  
	  $container.isotope({ filter: '*' });

	  $('#filters').on( 'click', 'a', function(e) {
	  	e.preventDefault();
	    var filterValue = $(this).attr('data-filter');
	    $container.isotope({ filter: filterValue });
	    $('#filters a').removeClass('active');
	    $(this).addClass('active');
	  });
  }
  $(window).on('load', function () {
    siteIstotope();
    fancyBox();
  });


  var siteOwlCarousel = function() {
  	$('.testimonial-carousel').owlCarousel({
		  center: true,
	    items: 1,
	    loop: true,
	    margin: 0,
	    autoplay: true,
	    smartSpeed: 1000,
		});
  };
  siteOwlCarousel();


})(jQuery);

AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});
