$(document).ready(function() {
  $('.mobileNavRoot .topNavEl').on('click', function() {
    $('.mobileNavRoot .topNavEl').removeClass('nav-active');
    $(this).addClass('nav-active');
  });
});
