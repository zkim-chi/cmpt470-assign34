var express = require('express');
var router = express.Router();

var app = require('../app.js');

router.get('/', function(req, res, next) {
  // console.log(req.query);
  app.pool.query(`SELECT * FROM rectangles WHERE rect_id = ${req.query.id}`, function(err, result){
    if(err){
      console.log(err);
    }
    
    var results = { 'result': (result.rows[0]) ? result.rows : [] }
    // console.log(results.result);
    // console.log(req.query);
    // console.log(results.result[0].rect_id);
    res.render('edit-rectangle', { rectangle:req.query, title: 'Edit Rectangle:', rectangles: results.result, rect_id:req.query.id, name: results.result[0].name, width: results.result[0].width, height: results.result[0].height, color: results.result[0].color });
  })
  
});


module.exports = router;
