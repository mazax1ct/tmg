//залипание шапки
var scrolled;

$(document).ready(function() {
	scrolled = $(window).scrollTop();
	if (scrolled > $('.header').height()*0.5) {
		$('.header').addClass('scrolled');
	} else {
		$('.header').removeClass('scrolled');
	}
});

$(window).scroll(function() {
	scrolled = $(window).scrollTop();
	if (scrolled > $('.header').height()*0.5) {
		$('.header').addClass('scrolled');
	} else {
		$('.header').removeClass('scrolled');
	}
});

//тоглер геолокации
$(document).on('click', '.js-location-toggler', function () {
  var _this = $(this);
  var dropdown = $('.location__dropdown');

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

//выбор города
$(document).on('click', '.location__dropdown .dropdown-list__item', function () {
  var _this = $(this);
  var _text = _this.text();
	var dropdown = $('.location__dropdown');

  $('.location__dropdown .dropdown-list__item').removeClass('selected');
  _this.addClass('selected');

  $('.location__toggler span').text(_text);

	dropdown.removeClass('is-open');
	setTimeout(function() {
		dropdown.removeClass('is-active');
	}, 300);
	$('.location__toggler').removeClass('is-active');

  return false;
});

//тоглер меню каталога
$(document).on('click', '.js-catalog-toggler', function () {
  var _this = $(this);
  var dropdown = $('.catalog-menu');

	if(_this.hasClass('is-active')) {
		dropdown.removeClass('is-open');
		setTimeout(function() {
			dropdown.removeClass('is-active');
		}, 300);
		_this.find('svg use').attr('xlink:href', '#burger');
		_this.removeClass('is-active');
	} else {
		dropdown.addClass('is-active');
		setTimeout(function() {
			dropdown.addClass('is-open');
		}, 100);
		_this.find('svg use').attr('xlink:href', '#close');
		_this.addClass('is-active');
	}

  return false;
});

//тоглер категорий поиска
$(document).on('click', '.js-search-categories', function () {
  var _this = $(this);
  var dropdown = $('.search-bar__categories-dropdown');

	if(_this.hasClass('clear-category')) {
		_this.find('span').text('Все категории');
	  _this.find('svg').addClass('icon--fill').find('use').attr('xlink:href', '#arrow_down');
		_this.removeClass('clear-category');
	} else {
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
	}

  return false;
});

//выбор категории
$(document).on('click', '.search-bar__categories-dropdown .dropdown-list__item', function () {
  var _this = $(this);
  var _text = _this.text();
	var dropdown = $('.search-bar__categories-dropdown');

  $('.search-bar__categories-dropdown .dropdown-list__item').removeClass('selected');
  _this.addClass('selected');

  $('.search-bar__categories-toggler span').text(_text);
  $('.search-bar__categories-toggler svg').removeClass('icon--fill').find('use').attr('xlink:href', '#close');

	dropdown.removeClass('is-open');
	setTimeout(function() {
		dropdown.removeClass('is-active');
	}, 300);
	$('.js-search-categories').removeClass('is-active').addClass('clear-category');

  return false;
});

//ввод текста в поле поиска
$(document).on('input', '.search-bar__input', function () {
	var _this = $(this);
  var dropdown = $('.search-bar__dropdown');

	if(_this.val().length > 0) {
		$('.search-bar__input-clear').prop('disabled', '');
		$('.search-bar__submit').prop('disabled', '');
	} else {
		$('.search-bar__input-clear').prop('disabled', 'disabled');
		$('.search-bar__submit').prop('disabled', 'disabled');
	}

	if(_this.val().length > 2) {
		dropdown.addClass('is-active');
    setTimeout(function() {
      dropdown.addClass('is-open');
    }, 100);
	} else {
		dropdown.removeClass('is-open');
    setTimeout(function() {
      dropdown.removeClass('is-active');
    }, 100);
	}
});

//очистка поля ввода
$(document).on('click', '.search-bar__input-clear', function () {
	var dropdown = $('.search-bar__dropdown');
	dropdown.removeClass('is-open');
	setTimeout(function() {
		dropdown.removeClass('is-active');
	}, 300);
	$('.search-bar__input').val('');
	$('.search-bar__input-clear').prop('disabled', 'disabled');
	$('.search-bar__submit').prop('disabled', 'disabled');
	$('.search-bar__input').focus();
	return false;
});

//подсказка поиска
$(document).on('click', 'button.search-item__body', function () {
	$('.search-bar__input').val($(this).find('.search-item__title').text());
	return false;
});

//тоглер корзины
$(document).on('click', '.js-cart-toggler', function () {
	var _this = $(this);
  var dropdown = $('.cart-block__dropdown');

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
