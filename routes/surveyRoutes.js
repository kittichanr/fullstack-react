const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin.js')
const requireCredits = require('../middlewares/requireCredits')
const sgMail = require("@sendgrid/mail");

const Survey = mongoose.model('surveys')
const keys = require('../config/keys');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate.js');

module.exports = app => {
    app.get('/api/surveys/thank', (req, res) => {
        res.send('Thank you for voting!')
    })

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

            sgMail.setApiKey(keys.sendGridKey);

            const msg = {
                personalizations: [{
                    to: {
                        email: recipients
                    }
                }],
                from: {
                    email: 'petchkubbb@gmail.com'
                },
                subject: subject,
                content: [{
                    type: 'text/html',
                    value: surveyTemplate(body),
                }]
            };

            sgMail
                .send(msg)
                .then(async () => {
                    try {
                        survey.save()
                        req.user.credits -= 1
                        const user = await req.user.save()

                        res.send(user)
                    } catch (error) {
                        res.status(422).send(error)
                    }
                })
                .catch((error) => {
                    res.status(422).send(error)
                })
        })
}