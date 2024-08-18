var express = require('express');
var router = express.Router();

// axioss
const axios = require('axios');
// cheerio
const cheerio = require('cheerio');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/t/:req', function(req, res, next) {
  getTranslation('en','pt',req.params.req);
  res.send({req : req.params.req});
});

function getTranslation(sl,tl,text) {
  axios.get('https://translate.google.com/?sl='+sl+'&tl='+tl+'&text='+text+'&op=translate')
  .then(function (response) {
    const $ = cheerio.load(response.data);
    const translation = $('span.ryNqvb');
    console.log("t:"+translation);
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = router;
