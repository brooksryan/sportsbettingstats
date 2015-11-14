var express = require('express');
var router = express.Router();
var userService = require('../services/newUser')
var getGameData = require('../getAPIdata');
var getUserService = require('../services/getUserService');


/* GET home page. */
router.get('/', function(req, res, next) { 
  
      res.render('index', { title: 'Express' });
  
});

module.exports = router;
