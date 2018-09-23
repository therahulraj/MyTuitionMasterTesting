$(function() {
  var num = parseInt($.trim($('.count').html()));
  var num1 = parseInt($.trim($('.count1').html()));
  var num2 = parseInt($.trim($('.count2').html()));
  $(".checkbox1[type='checkbox']").change(function() {
    if (this.checked) {
      $('.count').html(++num);
      console.log(num)
    } else {
      $('.count').html(--num);
    }
  })
  $(".checkbox2[type='checkbox']").change(function() {
    if (this.checked) {
      $('.count1').html(++num1);
      console.log(num)
    } else {
      $('.count1').html(--num1);
    }
  })
  $(".checkbox3[type='checkbox']").change(function() {
    if (this.checked) {
      $('.count2').html(++num2);
      console.log(num)
    } else {
      $('.count2').html(--num2);
    }
  })
    $(".selectBox").on("click", function() {
      $("#checkboxes").toggleClass("showCheckboxes");
    });
    $(document).on("click", function(e) {
      if ($(e.target).is("#checkboxes, .selectBox, #checkboxes label, #checkboxes input") == false) {
        $("#checkboxes").removeClass("showCheckboxes");
      }
      if ($(e.target).is("#checkboxes1, .selectBox1, #checkboxes1 label, #checkboxes1 input") == false) {
        $("#checkboxes1").removeClass("showCheckboxes");
      }
      if ($(e.target).is("#checkboxes2, .selectBox2, #checkboxes2 label, #checkboxes2 input") == false) {
        $("#checkboxes2").removeClass("showCheckboxes");
      }
    });

  $('.selectBox1').on('click', function() {
    $('#checkboxes1').toggleClass('showCheckboxes');
  });
  $('.selectBox2').on('click', function() {
    $('#checkboxes2').toggleClass('showCheckboxes');
  });
  $('.svg-hamburger').on('click', function() {
    $('.navbar-content').toggleClass('navbar-content-slide');
    $('body').toggleClass('stop-scrolling');
  });
  $('.body1-row7 button').on('click', function() {
    $('.body1-row2-row1-row1-row6 button').click();
  });
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
    imageSrc: '../images/getStudent1.jpg'
  });
})
