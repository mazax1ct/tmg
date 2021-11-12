$(document).on('click', '.js-filter-opener', function () {
  $('body').addClass('overflow');
  $('.catalog-section__filter').fadeIn('300', function () {
    $('.filter').addClass('is-open');
    document.addEventListener('click', closeFilter);
  });
  return false;
});

$(document).on('click', '.js-filter-closer', function () {
  $('.filter').removeClass('is-open');
  setTimeout(function() {
    $('.catalog-section__filter').fadeOut();
    $('body').removeClass('overflow');
    document.removeEventListener('click', closeFilter);
  }, 300);
  return false;
});

function closeFilter(evt) {
  if (!$('.filter').is(evt.target) && $('.filter').has(evt.target).length === 0) {
    $('.filter').removeClass('is-open');
    setTimeout(function() {
      $('.catalog-section__filter').fadeOut();
      $('body').removeClass('overflow');
      document.removeEventListener('click', closeFilter);
    }, 300);
	}
}
