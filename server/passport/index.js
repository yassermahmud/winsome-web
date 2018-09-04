var passport = require('passport');
var passportJWT = require('passport-jwt');
var JwtStrategy = passportJWT.Strategy;

var users = require('../dbUsers');
var jwtOptions = require('./jwtOptions');

module.exports = function() {
  // When a request comes into the API with passport middleware
  // then below is how passport resolves it.
  var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    var user = users.filter(user => {
      return user.id === jwt_payload.id;
    })[0];
    if (user) {
      next(null, 'user');
    } else {
      next(null, false);
    }
  });
  passport.use(strategy);
};
