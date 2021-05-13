const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin.js')
const requireCredits = require('../middlewares/requireCredits')
const sgMail = require("@sendgrid/mail");

const Survey = mongoose.model('surveys')

module.exports = app => {
    app.post('/api/surveys',
        requireLogin,
        requireCredits,
        (req, res, next) => {
            const { title, subject, body, recipients } = req.body

            const survey = new Survey({
                title,
                subject,
                body,
                recipients: recipients.split(',').map((email) => ({ email: email.trim() })),
                _user: req.user.id,
                dateSent: Date.now()
            })

            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            
            const msg = {
                to: "test@example.com",
                from: "test@example.com",
                subject: "Sending with Twilio SendGrid is Fun",
                text: "and easy to do anywhere, even with Node.js",
                html: `<div> ${survey.body} </div>`,
            };
            sgMail.send(msg);
        })
}