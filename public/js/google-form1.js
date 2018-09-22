! function(exports) {
  exports.submitGoogleForm1 = submitGoogleForm1;

  function reset() {
    $("#toggleCSS").attr("href", "../stylesheets/alertify.default.css");
    alertify.set({
      labels: {
        ok: "OK",
        cancel: "Cancel"
      },
      delay: 5000,
      buttonReverse: false,
      buttonFocus: "ok"
    });
  }

  function submitGoogleForm1(form) {

    try {
      var val = [];
      $(':checkbox:checked').each(function(i) {
        val[i] = $(this).val();
      });
      var tryGoogle = 'intro details: \n';
      tryGoogle += 'location: ' + $('.body2-row2-col1-select1').val() + '\n';
      tryGoogle += 'class: ' + $('.body2-row2-col1-select2').val() + '\n';
      tryGoogle += 'subject: ' + val + '\n';
      tryGoogle += 'message: ' + $('.body2-row3-row2 textarea').val() + '\n';

      if ($('.body2-row2-extra-chat-row2 input').val().replace(/\s/g, '') == "" && $('.body2-row2-extra-chat-row3 input').val().replace(/\s/g, '') == "" && $('.body2-row2-extra-chat-row4 input').val().replace(/\s/g, '') == "") {
        alertify.error("complete the form.");
      } else if ($('.body2-row2-extra-chat-row2 label').css('display') == 'inline' || $('.body2-row2-extra-chat-row3 label').css('display') == 'inline' || $('.body2-row2-extra-chat-row4 label').css('display') == 'inline') {
        reset();
        alertify.error("Fill up the form correctly.");
      } else {
        reset();
        alertify.success("your message was sent successfully.");
      }



      var data = [].slice.call(form).map(function(control, i) {

        return 'value' in control && control.name ?
          control.name + '=' + (control.value === undefined ? '' : i != 3 ? 'intro details: ' + control.value : tryGoogle + control.value) :
          '';
      }).join('&');
      var xhr = new XMLHttpRequest();

      xhr.open('POST', form.action + '/formResponse', true);
      xhr.setRequestHeader('Accept',
        'application/xml, text/xml, */*; q=0.01');
      xhr.setRequestHeader('Content-type',
        'application/x-www-form-urlencoded; charset=UTF-8');
      xhr.send(data);
    } catch (e) {}

    form.parentNode.className += ' submitted';

    return false;
  }
}(typeof module === 'undefined' ? window : module.exports);
