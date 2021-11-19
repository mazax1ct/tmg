$(document).on('click', '.js-personal-opener', function () {
  $('body').addClass('overflow');
  $('.lk__left').fadeIn('300', function () {
    $('.lk__left-inner').addClass('is-open');
    document.addEventListener('click', closePersonal);
  });
  return false;
});

$(document).on('click', '.js-personal-closer', function () {
  $('.lk__left-inner').removeClass('is-open');
  setTimeout(function() {
    $('.lk__left').fadeOut();
    $('body').removeClass('overflow');
    document.removeEventListener('click', closePersonal);
  }, 300);
  return false;
});

function closePersonal(evt) {
  if (!$('.lk__left-inner').is(evt.target) && $('.lk__left-inner').has(evt.target).length === 0) {
    $('.lk__left-inner').removeClass('is-open');
    setTimeout(function() {
      $('.lk__left').fadeOut();
      $('body').removeClass('overflow');
      document.removeEventListener('click', closePersonal);
    }, 300);
	}
}
