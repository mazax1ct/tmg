$(document).on('mouseenter focusin', '.card__image-toggler', function () {
  $(this).parent('.card__image-togglers').find('.card__image-toggler').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.card__link').find('img').attr('src', $(this).attr('data-src'));
  $(this).closest('.card__link').find('img').attr('srcset', $(this).attr('data-srcset'));
  return false;
});

$(document).on('click', '.js-open-dropdown', function () {
  var _this = $(this);
  var dropdown = $(this).closest('.card').find('.card__dropdown');

  if(_this.hasClass('is-active')) {
    dropdown.removeClass('is-open');
    setTimeout(function() {
      dropdown.removeClass('is-active');
    }, 300);
    _this.removeClass('is-active');
  } else {
    dropdown.addClass('is-active');
    setTimeout(function() {
      dropdown.addClass('is-open');
    }, 100);
    _this.addClass('is-active');
  }

  return false;
});

$(document).on('click', '.js-close-dropdown', function () {
  var dropdown = $(this).closest('.card').find('.card__dropdown');

  dropdown.removeClass('is-open');
  setTimeout(function() {
    dropdown.removeClass('is-active');
  }, 300);
  $(this).closest('.card').find('.js-open-dropdown').removeClass('is-active');

  return false;
});
