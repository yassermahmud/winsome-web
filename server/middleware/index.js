var path = require('path');
var passport = require('passport');
var bodyParser = require('body-parser');
const logger = require('morgan');

module.exports = function(app, express) {
  app.use(logger('dev'));
  // tell the app to look for static files in this directory
  app.use(express.static(__dirname + '/../../dist'));
  app.use(bodyParser.json());
  // tell the app to parse HTTP body messages
  // app.use(bodyParser.urlencoded({ extended: true }));
  // use passport middleware
  app.use(passport.initialize());
};

// The key to sessions is the cookie — that part of a HTTP header
// which holds info about the user agent originating the request
// to the server. Cookies are stored on the client’s browser and
// sent with each HTTP request to the server.

//  1) cookie based and 2) session store based.

// ‘express-session’ middleware in this example.
// It uses a session store based approach to session management.
// Using passport.js ‘local-strategy’ makes this process almost trivial.

// A few other bits we need include the use of the excellent ‘bcrypt-nodejs’ middleware which allows us to securely encrypt and decrypt our users passwords.
