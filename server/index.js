const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
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
            pass: 'Lmlen!_7024'
        }
    });

    const message = `
        <h3>You have a message from ThomsonRentals.com!</h3>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${req.body.email}">${req.body.email}</a></p>
        <p><strong>Message:</strong> ${req.body.message}</p>
    `;

    const email = {
        from: 'laurel228@hotmail.com',
        to: 'thomsonrentals-donotreply@outlook.com',
        subject: 'A message from Thomson Rentals',
        html: message
    };
    transport.sendMail(email, function(err, info) {
        if (err) {
            console.error(err);
            res.status(500).send({message : 'Something went wrong'});
        }
        else {
            console.log(info);
            res.status(200).send({message : 'Message sent successfully'});
        }
    });
});

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
   const host = server.address().address;
   console.log('Server listening at http://%s:%s', host, PORT);
});
