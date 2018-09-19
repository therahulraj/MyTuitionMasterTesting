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
        var tryGoogle = 'turtor details: \n';
        tryGoogle += 'location: ' + $('.body1-row5-select1').val() +'\n';
        tryGoogle +=  'class: ' + $('.bbody1-row5-select2').val() +'\n';
        tryGoogle += 'subject: ' + $('.body1-row5-select3').val() +'\n';
        tryGoogle += 'experience: ' + $('.body1-row6-col1 input').val() +'\n';
        tryGoogle += 'address: ' + $('.body1-row6-col2 textarea').val() +'\n';
        tryGoogle += 'qualification: ' +  $('.body1-row6-col3 textarea').val() +'\n';
        if($('.body2-row2-extra-chat-row2 input').val().replace(/\s/g, '') == "" && $('.body2-row2-extra-chat-row3 input').val().replace(/\s/g, '') == "" && $('.body2-row2-extra-chat-row4 input').val().replace(/\s/g, '') == "") {
           alertify.error("complete the form.");
        }
           else if($('.body1-row2-row1-row1-row2 label').css('display') == 'inline' || $('.body1-row2-row1-row1-row3 label').css('display') == 'inline' || $('.body1-row2-row1-row1-row4 label').css('display') == 'inline' || $('.body1-row2-row1-row1-row5 label').css('display') == 'inline') {
             reset();
              alertify.error("Fill up the form correctly.");

      } else {
        reset();
        alertify.success("your message was sent successfully.");

       }


  var data = [].slice.call(form).map(function(control, i) {

    return 'value' in control && control.name ?
      control.name + '=' + (control.value === undefined ? '' : i != 3 ? 'tutor details: ' +  control.value : tryGoogle + 'address: ' + control.value) :
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
