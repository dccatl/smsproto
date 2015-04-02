var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});

router.get('/dashboard2', function(req, res, next) {
  res.render('dashboard2', { title: 'Dashboard 2' });
});

router.get('/newrequest', function(req, res, next) {
  res.render('newrequest', { title: 'New Request' });
});

router.get('/pendingrequests', function(req, res, next) {
  res.render('pendingrequests', { title: 'Pending Requests' });
});

module.exports = router;
