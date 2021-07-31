var express = require('express');
var router = express.Router();
var app = require('../app.js');



router.post('/', function(req, res, next) {
  //console.log(req.body)
  const {rect_id, name} = req.body;
  
  const text = 'UPDATE rectangles SET name = $1  WHERE rect_id =$2';
  app.pool.query(text, [name,rect_id], function(err, result){
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
