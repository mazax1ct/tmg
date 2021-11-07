$(document).on('click', '.phone-input__prefix', function () {
  var _this = $(this);
  var dropdown = $(this).closest('.phone-input__input-container').find('.dropdown');

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

//выбор префикса
$(document).on('click', '.phone-input__dropdown .dropdown-list__item', function () {
  var _this = $(this);
  var _text = _this.find('.phone-prefix__code').text();
	var dropdown = $('.phone-input__dropdown');

  $('.phone-input__dropdown .dropdown-list__item').removeClass('selected');
  _this.addClass('selected');

  _this.closest('.phone-input__input-container').find('.phone-input__prefix-text').text(_text);

	dropdown.removeClass('is-open');
	setTimeout(function() {
		dropdown.removeClass('is-active');
	}, 300);
	$('.phone-input__prefix').removeClass('is-active');

  return false;
});
