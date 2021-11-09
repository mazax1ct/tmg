$(document).on('mouseenter focusin', '.card__image-toggler', function () {
  $(this).parent('.card__image-togglers').find('.card__image-toggler').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.card__link').find('img').attr('src', $(this).attr('data-src'));
  $(this).closest('.card__link').find('img').attr('srcset', $(this).attr('data-srcset'));
  return false;
});
