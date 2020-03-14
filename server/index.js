const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",  "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

//Create a schedule
app.post('/contact', function (req, res) {
    console.log('SENDING EMAIL....');
    let transport = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        secureConnection: false,
        port: 587,
        auth: {
            user: 'laurel228@hotmail.com',
            pass: 'Lmlen!_702'
        }
    });
    const message = {
        from: 'laurel228@hotmail.com',
        to: 'laurel228@hotmail.com',
        subject: 'TESTING',
        text: 'This is a test email'
    };
    transport.sendMail(message, function(err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
    res.send('email sent');
});

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
   const host = server.address().address;
   console.log('Example app listening at http://%s:%s', host, PORT);
});
