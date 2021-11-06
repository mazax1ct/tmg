$(document).on('click', '.js-menu-opener', function () {
  if(!$('body').hasClass('compensate-for-scrollbar')) {
    scrollCompensate();
  }

  $('body').addClass('overflow');

  $('.header-menu__outer').fadeIn('300', function () {
    $('.header-menu__inner').addClass('is-open');
    document.addEventListener('click', closeMenu);
  });
  return false;
});

$(document).on('click', '.js-menu-closer', function () {
  $('.header-menu__inner').removeClass('is-open');
  setTimeout(function() {
    $('.header-menu__outer').fadeOut();
    $('body').removeClass('overflow');

    $('body').removeClass('compensate-for-scrollbar');
    $('#scroll-compensate').remove();

    document.removeEventListener('click', closeMenu);
  }, 300);
  return false;
});

function closeMenu(evt) {
  if (!$('.header-menu__inner').is(evt.target) && $('.header-menu__inner').has(evt.target).length === 0) {
    $('.header-menu__inner').removeClass('is-open');

    setTimeout(function() {
      $('.header-menu__outer').fadeOut();
      $('body').removeClass('overflow');

      $('body').removeClass('compensate-for-scrollbar');
			$('#scroll-compensate').remove();

      document.removeEventListener('click', closeMenu);
    }, 300);
	}
}
