var express = require('express');
var router = express.Router();
var app = require('../app.js');

router.get('/', function(req, res, next) {
    console.log(req.query);
    app.pool.query(`DELETE FROM rectangles WHERE rect_id = ${req.query.id}`, function(err, result){
        if(err){
            console.log(err)
        }
        else{
            res.redirect('/view-rectangles');
        }

    })
  
});

module.exports = router;
