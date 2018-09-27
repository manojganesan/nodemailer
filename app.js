var nodemailer = require('nodemailer');

// Create the transporter with the required configuration for Outlook
// change the user and pass !
var transporter = nodemailer.createTransport({
  
    //host:"smtp.gmail.com",
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    //port:465, //port for secure SMTP - SSL
    port: 587, // port for secure SMTP - TLS
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'yourmail',
        pass: 'yourpassword'
    }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: '"Our Code World " <your mail>', // sender address (who sends)
    to: 'tomail@gmail.com', // list of receivers (who receives)
    subject: 'Hello ', // Subject line
    text: 'Hello world ', // plaintext body
    html: '<b>Hello world </b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});
