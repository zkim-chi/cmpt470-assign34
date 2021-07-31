var express = require('express');
var router = express.Router();

var app = require('../app.js');

router.get('/', function(req, res, next) {
  console.log(req.query);
  app.pool.query(`SELECT * FROM rectangles WHERE rect_id = ${req.query.id}`, function(err, result){
    if(err){
      console.log(err);
    }
    
    var results = { 'result': (result.rows[0]) ? result.rows : [] }
    res.render('get-rectangle', { rectangle:req.query, rect_name:req.query.name, title: 'Rectangle', rectangles: results.result, rect_id:req.query.id  });
  })
  
});


module.exports = router;
