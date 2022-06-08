//* Mailer.ts (Capital letter) because it exports a class!

const sendgrid = require("sendgrid");
const helper = sendgrid.mail; //* The same as: const {mail}=sendgrid but we want to change the name to helper
//* Other way for helper
// const helper = require('sendgrid').mail;

// const testMail = sendgrid.mail.Mail;
// console.log({testMail});

const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({subject, recipients}: {subject: string; recipients: {email: string}[]}, content: string) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("no-reply@email.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);
    this.addContent(this.body); //* addContent is built in helper.Mail
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients: {email: string}[]) {
    return recipients.map(({email}) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.trackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach((recipient: {email: string}) => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }
}

module.exports = Mailer;
