var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/greenwich', function(req, res, next) {
  var name = 'Tien Anh';
  res.render('greenwichVietnam',{layout:'admin_layout',name});
});

router.get('/demo', function(req, res, next) {
  var city = 'Ha Noi';
  var district = 'Cau Giay';
  var street = '2 Pham Van Bach';
  var image = 'https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g';
  res.render('demo',
  {city,
   district,
   duong:street,
   university:'Greenwich viet nam',
   image});
});



router.get('/test', (req, res) => {
  var country = ['Viet Nam', 'Thai Lan', 'Lao','Campuchia'];
  var sports = ['Football', 'Basketball', 'Batminton','Swimming'];

  res.render('country', {countries: country, sports});

})






module.exports = router;
