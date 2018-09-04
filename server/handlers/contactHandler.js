function contactHandler(req, res, next) {
  var send = require('gmail-send')({
    user: 'ahmedmahmud12971@gmail.com',
    pass: 'Techismyhobby12971',
    to:   'ahmedmahmud12971@gmail.com',
    subject: req.body.subject,
    text:    req.body.message,
  });
  send({}, function (err, resp) {
    if (err) {
      console.log('err', err);
      res.send(400).send(false)
    } else {
      console.log('send() callback returned: err:', err, '; res:', resp);
      res.status(200).send(true)
    }
  });

}

module.exports = contactHandler;