var express = require('express');
var router = express.Router();

//URL: localhost:3000/fpt
router.get('/', function(req, res, next) {
  // render ra view: view/fpt/index
  res.render('fpt/index');
});



module.exports = router;
