var express = require('express');
var router = express.Router();
var app = require('../app.js');

router.post('/', function(req, res, next) {

    // const { name } = req.body;
    // const owner = 1; // need this passed in?
    console.log("submit");
    console.log(req.body);

    const {name, width, height, color } = req.body;

    const text = 'INSERT INTO rectangles(name, width, height, color ) VALUES($1, $2, $3, $4)'
    app.pool.query(text, [name, width, height, color ], function(err, result){
      if (err){
        console.log(err)
        res.end("error");
      }
      else{
        res.redirect('/view-rectangles');
      }
    })
    
  });
  

module.exports = router;