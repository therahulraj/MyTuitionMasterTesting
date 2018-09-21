$(document).ready(function() {
  var $win = $(window);
  var _originalSize = $(window).height();
  var num = parseInt($.trim($('.count').html()));
  console.log(num);
$(window).resize(function(){
  if($(window).height() != _originalSize){
    $('.chat-cover').addClass('mobile-keypad');
  }else{
  $('.chat-cover').removeClass('mobile-keypad');
  }
});
$("input[type='checkbox']").change(function () {
    console.log(num)
  if(this.checked) {
      $('.count').html(++num);
      console.log(num)
  } else {
      $('.count').html(--num);
  }

})

  $('.svg-hamburger').on('click', function () {
      $('.navbar-content').toggleClass('navbar-content-slide');
      $('body').toggleClass('stop-scrolling');
    });
    $('.body2-row3-button1 button').on('click', function () {
      $('.body2-row2-extra-chat-row6 button').click();
    });
    $('.body2-row3-button2 button').on('click', function () {
      window.location.href = "/getTutor";
    })
    $('.selectBox').on('click', function () {
      $('#checkboxes').toggleClass('showCheckboxes');
    })
    $('.getTutorNav').on('click', function () {
      window.location.href = "/getTutor";
        $('.navbar-content').removeClass('navbar-content-slide');
        $('body').removeClass('stop-scrolling');
    });
    $('.getStudentNav').on('click', function () {
      window.location.href = "/getStudent";
        $('.navbar-content').removeClass('navbar-content-slide');
        $('body').removeClass('stop-scrolling');
    });
    $('.howThisWorksNav').on('click', function () {
      window.location.href = "#section-1";
        $('.navbar-content').removeClass('navbar-content-slide');
        $('body').removeClass('stop-scrolling');
    });
    $('.contactUsNav').on('click', function () {
      window.location.href = "#section-6";
        $('.navbar-content').removeClass('navbar-content-slide');
        $('body').removeClass('stop-scrolling');
    });
    $('.homeNav').on('click', function () {
      window.location.href = "/";
        $('.navbar-content').removeClass('navbar-content-slide');
    })
  $win.on('scroll', function () {
      var top = $win.scrollTop();
      if(top > $('#section-6').offset().top - 200) {
     $('.chat-cover').css('display', 'none');
   } else {
     $('.chat-cover').css('display', 'block');
   }
  })
  if (window.innerWidth < 800) {

$('.mobile-symbol').on('click', function () {
      $('.chat-cover').addClass('mobile-symbol-slide');
      $('.chat').addClass('chat-mobile-symbol-slide');
      $('.chat-arrow').addClass('rotate-arrow');
          $('body').addClass('stop-scrolling');
    });
    $('.chat-row1').on('click', function () {
      $('.chat-cover').removeClass('mobile-symbol-slide');
        $('.chat').removeClass('chat-mobile-symbol-slide');
        $('.chat-arrow').removeClass('rotate-arrow');
            $('body').removeClass('stop-scrolling');
    });

} else if(window.innerWidth > 800) {
  $('.chat-row1').on('click', function () {
      $('.chat-arrow').toggleClass('rotate-arrow');
      $('.chat-row2, .chat-row3, .chat-row4, .chat-row5, .chat-row6').toggleClass('chat-slideup');
    });
}

})
