var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('translate page');
});

router.post('/', function(req, res, next) {
  res.send('translate page');
});

module.exports = router;
