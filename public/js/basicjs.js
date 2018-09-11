$(document).ready(function() {
$('.svg-hamburger').on('click', function () {
    $('.navbar-content').toggleClass('navbar-content-slide');
  });
  $('.chat-row1').on('click', function () {
    $('.chat').toggleClass('chat-slideup');
  });
  $('.chat').click(function () {
    $('black-cover').css();
  })

})
