var sticky_nav_scrolled;

$(document).ready(function() {
	sticky_nav_scrolled = $(window).scrollTop();
	if (sticky_nav_scrolled > $('.sticky-nav').height()) {
		$('.sticky-nav').addClass('is-active');
	} else {
		$('.sticky-nav').removeClass('is-active');
	}
});

$(window).scroll(function() {
	sticky_nav_scrolled = $(window).scrollTop();
  if (sticky_nav_scrolled > $('.sticky-nav').height()) {
		$('.sticky-nav').addClass('is-active');
	} else {
		$('.sticky-nav').removeClass('is-active');
	}
});

$(document).on('click', '.js-scroll-top', function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});
