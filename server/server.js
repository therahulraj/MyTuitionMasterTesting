const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


var port = process.env.PORT || 3000;
var app = express();
app.use(cors());
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({extended: false});
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



app.listen(port, () => {
  console.log(`Started on port ${port}`);
})
