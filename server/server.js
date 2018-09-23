const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

var port = process.env.PORT || 3000;
var app = express();
app.use(cors());
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})


app.get('/getTutor', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'public', 'getTutor.html'));
});


app.get('/getStudent', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'public', 'getStudent.html'));
})




app.post('/send', urlencodedParser, (req, res) => {
  console.log(req.body);
  var output = "";
  if (req.body.postType == "studentReg") {
    output = "<h2>Thanks!</h2><p>You are very important to us. <br>We will contact you soon with list of tutors totally tailored according to your requirement at your location.<br>For urgent enquiries please call us on one of the telephone numbers below.</p><h3>Contact Details: </h3><p>+91 62 63 75 4346<br>+91 79 03 45 8801</p>";
  }
  else if (req.body.postType == "tutorReg") {
    output = "<h2>Thanks!</h2><p>You are very important to us. <br>We will contact you soon with list of students totally tailored according to your requirement at your location.<br>For urgent enquiries please call us on one of the telephone numbers below.</p><h3>Contact Details: </h3><p>+91 62 63 75 4346<br>+91 79 03 45 8801</p>";
  }
  else {
      output = "<h2>Thanks!</h2><p>You are very important to us. <br>We will contact you soon as we review your message.<br>For urgent enquiries please call us on one of the telephone numbers below.</p><h3>Contact Details: </h3><p>+91 62 63 75 4346<br>+91 79 03 45 8801</p>";
  }
  let transporter = nodemailer.createTransport({
          host: 'smtpout.asia.secureserver.net',
          port: 80,
          secure: false, // true for 465, false for other ports
          auth: {
              user: 'contact@mytuitionmaster.com', // generated ethereal user
              pass: 'rahulraj#7484' // generated ethereal password
          },
          tls: {
            rejectUnauthorized: false
          }
      });

      // setup email data with unicode symbols
      let mailOptions = {
          from: '"My Tuition Master" <contact@mytuitionmaster.com>', // sender address
          to: req.body.userEmail, // list of receivers
          subject: 'Thank you for getting in touch!', // Subject line
          text: 'Hello world?', // plain text body
          html: output // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
})



app.listen(port, () => {
  console.log(`Started on port ${port}`);
})
