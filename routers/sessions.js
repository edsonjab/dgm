var express = require('express'),
  router = express.Router(),
  Encrypt = require('../lib/encrypt'),
  SessionHandler = require('../lib/session');

router.post('/', function(req, res, next) {
  SessionHandler.login(req, function(session) {
    if (session) {
      res.json({
        session: Encrypt.encode(session.id),
        access_level: session.access_level,
        user_id: session.user_id
      });
    } else {
      var err = new Error('Invalid credentials');
      err.status = 403;
      next(err);
    }
  });
});

router.delete('/:session', SessionHandler.validate, function(req, res) {
  req.session.remove(function() {
    res.json({
      message: "Session terminated"
    });
  });
});

module.exports = router;
