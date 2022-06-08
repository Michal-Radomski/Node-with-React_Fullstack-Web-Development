//* Mailer.ts (Capital letter) because it exports a class!

const sendgrid = require("sendgrid");
const helper = sendgrid.mail; //* The same as: const {mail}=sendgrid but we want to change the name to helper
//* Other way for helper
// const helper = require('sendgrid').mail;

// const testMail = sendgrid.mail.Mail;
// console.log({testMail});

const keys = require("../config/keys");

class Mailer extends helper.Mail {}

module.exports = Mailer;
