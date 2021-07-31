var express = require('express');
var router = express.Router();
var app = require('../app.js');


router.get('/', function(req, res, next) {
  app.pool.query(`SELECT * FROM rectangles`, function(err, result){
    console.log(req.query.params);
    if(err){
      console.log(err);
    }
    
    var results = { 'result': (result.rows[0]) ? result.rows : [] }
    //console.log(results);
    //res.render('view-rectangles', { title: 'Rectangles',rectangles:result.rows });
    res.render('view-rectangles', { title: 'Rectangles',rectangles:results.result, rect_id:req.query.id });
  })
  
});

module.exports = router;

