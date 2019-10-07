const nodemailer = require('nodemailer');

exports.email = (req, res) => {
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
}