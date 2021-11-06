$(document).on('click', '.js-dropdown-toggler', function () {
  var _this = $(this);
  var dropdown = $(this).next('.dropdown');

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
