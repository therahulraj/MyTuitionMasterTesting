$(document).ready(function() {
$('.svg-hamburger').on('click', function () {
    $('.navbar-content').toggleClass('navbar-content-slide');
    $('body').toggleClass('stop-scrolling');
  });
  $('.body2-row3-button1 button').on('click', function () {
    $('.body2-row2-extra-chat-row6 button').click();
  });
  if (window.innerWidth < 800) {
$('.mobile-symbol').on('click', function () {
      $('.chat-cover').addClass('mobile-symbol-slide');
      $('.chat').addClass('chat-mobile-symbol-slide');
      $('.chat-arrow').addClass('rotate-arrow');
    });
    $('.chat-row1').on('click', function () {
      $('.chat-cover').removeClass('mobile-symbol-slide');
        $('.chat').removeClass('chat-mobile-symbol-slide');
        $('.chat-arrow').removeClass('rotate-arrow');
    });

} else if(window.innerWidth > 800) {
$('.chat-row1').on('click', function () {
      $('.chat-arrow').toggleClass('rotate-arrow');
      $('.chat-row2, .chat-row3, .chat-row4, .chat-row5, .chat-row6').toggleClass('chat-slideup');
    });
}

})
