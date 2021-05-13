const { classes } = require('@sendgrid/helpers')
const sgMail = require('@sendgrid/mail');

class Mailer extends classes.Mail {
    constructor({ subject, recipients }, content) {
        super()

        this.sgApi =  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        this.from_email = new classes.EmailAddress({ email: 'no-reply@emaily.com' });
        this.subject = subject
        this.body = new classes.Attachment({ content, type: 'text/html' })
        this.recipients = this.formatAddress(recipients)

        this.addContent(this.body)
        this.addClickTracking()
        this.addRecipients()
    }

    formatAddress(recipients) {
        return recipients.map(({ email }) => {
            return new classes.EmailAddress({ email });
        })
    }

    addClickTracking() {
        this.setTrackingSettings({ clickTracking: { enable: true, enableText: true } })
    }

    addRecipients(){
        const personalize = new classes.Personalization()

        this.recipients.forEach(recipient=>{
            personalize.addTo(recipient)
        })

        this.addPersonalization(personalize)
    }

    async send(){
        const msg = {
            to: "test@example.com",
            from: "test@example.com",
            subject: "Sending with Twilio SendGrid is Fun",
            text: "and easy to do anywhere, even with Node.js",
            html: `<div> ${this.body} </div>`,
        };
        return await sgMail.send(msg);
    }
}