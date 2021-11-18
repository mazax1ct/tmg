$(document).ready(function () {
  if($('.compare__top .compare__container-inner').width() <= $('.compare__top .compare__container').width()) {
    $('.compare__next').css('display', 'none');
  }
});

var translate = 0;

function next() {
  return translate -= 252;
}

function prev() {
  return translate += 252;
}

$(document).on('click', '.compare__next', function () {
  if($('.compare__container-inner').width() > $('.compare__container').width()) {
    var tr = next();
    $('.compare__container-inner').css('transform', 'translateX('+ tr +'px)');
    $('.compare__prev').css('display', 'flex');

    var comp = 0;

    /*if($('body').width() > 1890) {
      comp = -252;
    }*/

    var sum = $('.compare__container-inner').width() + tr + comp;

    if(sum <= $('.compare__container').width()) {
      $('.compare__next').css('display', 'none');
    }

    return false;
  }
});

$(document).on('click', '.compare__prev', function () {
  var tr = prev();
  $('.compare__container-inner').css('transform', 'translateX('+ tr +'px)');
  if(tr == 0) {
    $('.compare__prev').css('display', 'none');
  }
  $('.compare__next').css('display', 'flex');
  return false;
});
