$(document).on('click', '.section__toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.section').toggleClass('is-open');
  return false;
});
