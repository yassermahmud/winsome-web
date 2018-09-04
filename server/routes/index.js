// var passport = require('passport');
// var jwt = require('jsonwebtoken');
// var path = require('path');

// var users = require('../dbUsers');
// require('../passport')();

// var errorHandler = require('../handlers/errorHandler');
var fallbackHandler = require('../handlers/fallbackHandler');
// var studentHRFormHandler = require('../handlers/studentHRFormHandler');
// var getStudentHRFormHandler = require('../handlers/getStudentHRFormHandler');
// var studentHRGenerateHandler = require('../handlers/studentHRGenerateHandler');
// var studentsHRDataHandler = require('../handlers/studentsHRDataHandler');
// var postUserAuthenticationHandler = require('../handlers/postUserAuthenticationHandler');
var contactHandler = require('../handlers/contactHandler');

module.exports = function(app) {
//   app.get(
//     '/studentHRGenerate',
//     passport.authenticate('jwt', { session: false }),
//     studentHRGenerateHandler
//   );

  app.post('/contact', contactHandler)

  app.get('/*', fallbackHandler);

//   app.use(errorHandler);
};
