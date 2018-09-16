$(document).ready(function () {
$('.svg-hamburger').on('click', function () {
    $('.navbar-content').toggleClass('navbar-content-slide');
  });
  $('.body1-row7 button').on('click', function () {
    $('.body1-row2-row1-row1-row6 button').click();
  });
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
  $('.top-head').parallax({imageSrc: '../images/getStudent1.jpg'});
})
