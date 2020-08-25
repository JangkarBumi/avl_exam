const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const nodemailer = require('nodemailer');

app.use(express.json());
require('dotenv').config();


app.post('/send', (req, res) => {
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  const {subject,content} = req.body

  let mailDetails = {
    to: 'hr@avancevl.com',
    subject: subject,
    text: content,
  };

  try {
    mailTransporter.sendMail(mailDetails);
    res.send('Email sent!');
  } catch (error) {
    res.send(error);
  }
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
