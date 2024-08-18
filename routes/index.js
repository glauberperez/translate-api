var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/t/:req', function(req, res, next) {
  res.send({req : req.params.req});
});



module.exports = router;
