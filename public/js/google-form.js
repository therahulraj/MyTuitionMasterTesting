! function(exports) {
  exports.submitGoogleForm = submitGoogleForm;

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

  function submitGoogleForm(form) {

    try {
      $.post("../mail/php1.php", {
        name: "whoo", email: "whoo", comments: "he he he"
      }, function(data) {
        if(data == "true") {
          console.log("whoo... it's a success.")
        } else {
          console.log(data);
        }
      });
      if ($('.chat-row2 input').val().replace(/\s/g, '') == "" && $('.chat-row3 input').val().replace(/\s/g, '') == "" && $('.chat-row4 input').val().replace(/\s/g, '') == "") {
        alertify.error("complete the form.");
      } else if ($('.chat-row2 label').css('display') == 'inline' || $('.chat-row3 label').css('display') == 'inline' || $('.chat-row4 label').css('display') == 'inline' || $('.chat-row5 label').css('display') == 'inline') {
        reset();
        alertify.error("Fill up the form correctly.");
      } else {

        reset();
        alertify.success("your message was sent successfully.");

      }

      var data = [].slice.call(form).map(function(control) {
        return 'value' in control && control.name ?
          control.name + '=' + (control.value === undefined ? '' : 'chat: ' + control.value) :
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
