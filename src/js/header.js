//тоглер меню каталога
$(document).on('click', '.js-catalog-toggler', function () {
  var _this = $(this);
  //var dropdown = $('.');

  if(_this.hasClass('is-active')) {
    _this.find('svg use').attr('xlink:href', '#burger');
    _this.removeClass('is-active');
  } else {
    _this.find('svg use').attr('xlink:href', '#close');
    _this.addClass('is-active');
  }

  return false;
});

//тоглер категорий поиска
$(document).on('click', '.js-search-categories', function () {
  var _this = $(this);
  var dropdown = $('.search-bar__categories-block .dropdown');

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

//выбор категории
$(document).on('click', '.search-bar__categories-block .dropdown__list-item', function () {
  var _this = $(this);
  var _text = _this.text();
  $('.search-bar__categories-block .dropdown__list-item').removeClass('selected');
  _this.addClass('selected');

  $('.search-bar__categories-toggler span').text(_text);

  $('.search-bar__categories-toggler svg').removeClass('icon--fill').find('use').attr('xlink:href', '#close');
  return false;
});

//ввод текста в поле поиска
$(document).on('input', '.search-bar__input', function () {
	if($(this).val().length > 0) {
		$('.search-bar__input-clear').prop('disabled', '');
		$('.search-bar__submit').prop('disabled', '');
	}else{
		$('.search-bar__input-clear').prop('disabled', 'disabled');
		$('.search-bar__submit').prop('disabled', 'disabled');
	}
});

//очистка поля ввода
$(document).on('click', '.search-bar__input-clear', function () {
	$('.search-bar__input').val('');
	$('.search-bar__input-clear').prop('disabled', 'disabled');
	$('.search-bar__submit').prop('disabled', 'disabled');
	$('.search-bar__input').focus();
	return false;
});
