!function(exports) {
  exports.submitGoogleForm = submitGoogleForm;


    function reset () {
            $("#toggleCSS").attr("href", "../stylesheets/alertify.default.css");
            alertify.set({
              labels : {
                ok     : "OK",
                cancel : "Cancel"
              },
              delay : 5000,
              buttonReverse : false,
              buttonFocus   : "ok"
            });
          }

  function submitGoogleForm(form) {

    try {

      if($('.body1-row2-row1-row1-row2 label').css('display') == 'inline' || $('.body1-row2-row1-row1-row3 label').css('display') == 'inline' || $('.body1-row2-row1-row1-row4 label').css('display') == 'inline' || $('.body1-row2-row1-row1-row5 label').css('display') == 'inline') {
      reset();
       alertify.error("Fill up the form correctly.");
       } else {
       reset();
       alertify.success("your message was sent successfully.");
      }

      var data = [].slice.call(form).map(function(control, i) {

        return 'value' in control && control.name ?
          control.name + '=' + (control.value === undefined ? '' : i != 3 ? 'student details: ' +  control.value : control.value) :
          '';
      }).join('&');
      var xhr = new XMLHttpRequest();
      xhr.open('POST', form.action + '/formResponse', true);
      xhr.setRequestHeader('Accept',
          'application/xml, text/xml, */*; q=0.01');
      xhr.setRequestHeader('Content-type',
          'application/x-www-form-urlencoded; charset=UTF-8');
      xhr.send(data);
    } catch(e) {}

    form.parentNode.className += ' submitted';

    return false;
  }
}(typeof module === 'undefined' ? window : module.exports);
