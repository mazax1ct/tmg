$(document).ready(function() {
  $('.js-input').each(function( index ) {
    if ($(this).val() != 0) {
      $(this).addClass('changed');
    } else {
      $(this).removeClass('changed');
    }

    $(this).blur(function() {
      if ($(this).val() != 0) {
        $(this).addClass('changed');
      } else {
        $(this).removeClass('changed');
      }
    });
  });
});
