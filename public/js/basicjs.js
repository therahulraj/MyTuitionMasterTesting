$(document).ready(function() {
$('.svg-hamburger').on('click', function () {
    $('.navbar-content').toggleClass('navbar-content-slide');
    $('body').toggleClass('stop-scrolling');
  });
  $('.chat-row1').on('click', function () {
    $('.chat-row2, .chat-row3, .chat-row4, .chat-row5, .chat-row6').toggleClass('chat-slideup');
    $('.chat-row1 div').toggleClass('rotate-arrow');
  });

})
