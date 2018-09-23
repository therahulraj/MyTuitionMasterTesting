$(document).ready(function() {
  var $win = $(window);
  var num2 = parseInt($.trim($('.count2').html()));
  $(".checkbox3[type='checkbox']").change(function() {

    if (this.checked) {
      $('.count2').html(++num2);
    } else {
      $('.count2').html(--num2);
    }
  })
  $('.selectBox2').on('click', function() {
    $('#checkboxes2').toggleClass('showCheckboxes');
  });
  $(document).on("click", function(e) {
    if ($(e.target).is("#checkboxes2, .selectBox2, #checkboxes2 label, #checkboxes2 input") == false) {
      $("#checkboxes2").removeClass("showCheckboxes");
    }
  });
  $('.svg-hamburger').on('click', function() {
    $('.navbar-content').toggleClass('navbar-content-slide');
    $('body').toggleClass('stop-scrolling');
  });
  $('.body1-row5 button').on('click', function() {
    $('.body1-row2-row1-row1-row6 button').click();
  })
  $('.getTutorNav').on('click', function() {
    window.location.href = "/getTutor";
    $('.navbar-content').removeClass('navbar-content-slide');
    $('body').removeClass('stop-scrolling');
  });
  $('.getStudentNav').on('click', function() {
    window.location.href = "/getStudent";
    $('.navbar-content').removeClass('navbar-content-slide');
    $('body').removeClass('stop-scrolling');
  });
  $('.howThisWorksNav').on('click', function() {
    window.location.href = "/#section-1";
    $('.navbar-content').removeClass('navbar-content-slide');
    $('body').removeClass('stop-scrolling');
  });
  $('.contactUsNav').on('click', function() {
    window.location.href = "#section-6";
    $('.navbar-content').removeClass('navbar-content-slide');
    $('body').removeClass('stop-scrolling');
  });
  $('.homeNav').on('click', function() {
    window.location.href = "/";
    $('.navbar-content').removeClass('navbar-content-slide');
  })
  $('.top-head').parallax({
    imageSrc: '../images/getTutor1.jpg'
  });
  if (window.innerWidth < 800) {
    $(document).on("click", function(e) {
      if ($(e.target).is("#checkboxes2 input, #checkboxes2 label")) {
          $('html,body').animate({scrollTop: $(e.target).offset().top -10});
      } else {
          $('html,body').animate({scrollTop: $(e.target).offset().top - 40});
      }

    });
  }
})
