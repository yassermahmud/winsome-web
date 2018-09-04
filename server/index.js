// require express
const express = require('express');
const app = express();

// run mongoose
// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose
//   .connect('mongodb://localhost:27017/student_hr')
//   //.connect('mongodb://lggs:Lggslhr2018@ds151259.mlab.com:51259/student_hr')
//   .then(() => console.log('db connection succesful'))
//   .catch(err => console.error(err));

// run middleware
require('./middleware')(app, express);

// run passport startegy
// require('./passport')();

// run API
require('./routes')(app);

// run server
var port = process.env.PORT || 3000;
app.listen(port, test => {
  console.log(`listening on port ${port}`);
});
