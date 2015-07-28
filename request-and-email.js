var request = require('request');
var nodemailer = require('nodemailer');
var url = 'http://ip.jsontest.com/';
var user = 'someone@gmail.com';
var pwd = 'password';

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: user,
    pass: pwd
  }
});

request(url, function (err, res, obj) {
  if (err) {
    console.log('error:', err);
  } else {
    console.log(obj);

    var mailOptions = {
      from: user,
      to: user,
      subject: 'hello',
      text: obj
    }

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log('Message sent:', info.response);
      }
    });
  }
});
