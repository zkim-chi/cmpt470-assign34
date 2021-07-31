var express = require('express');
var router = express.Router();
var app = require('../app.js');

router.get('/', function(req, res, next) {
    res.render('add-rectangle', { title: 'Add A Rectangle:'});
  
});
  

module.exports = router;