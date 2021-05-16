"use strict";

var mongoose = require('mongoose');

var requireLogin = require('../middlewares/requireLogin.js');

var requireCredits = require('../middlewares/requireCredits');

var sgMail = require("@sendgrid/mail");

var Survey = mongoose.model('surveys');

var keys = require('../config/keys');

var surveyTemplate = require('../services/emailTemplates/surveyTemplate.js');

module.exports = function (app) {
  app.get('/api/surveys/thank', function (req, res) {
    res.send('Thank you for voting!');
  });
  app.post('/api/surveys', requireLogin, requireCredits, function (req, res, next) {
    var _req$body = req.body,
        title = _req$body.title,
        subject = _req$body.subject,
        body = _req$body.body,
        recipients = _req$body.recipients;
    var survey = new Survey({
      title: title,
      subject: subject,
      body: body,
      recipients: recipients.split(',').map(function (email) {
        return {
          email: email.trim()
        };
      }),
      _user: req.user.id,
      dateSent: Date.now()
    });
    sgMail.setApiKey(keys.sendGridKey);
    var msg = {
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
        value: surveyTemplate(body)
      }]
    };
    sgMail.send(msg).then(function _callee() {
      var user;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              survey.save();
              req.user.credits -= 1;
              _context.next = 5;
              return regeneratorRuntime.awrap(req.user.save());

            case 5:
              user = _context.sent;
              res.send(user);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              res.status(422).send(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 9]]);
    })["catch"](function (error) {
      res.status(422).send(error);
    });
  });
};