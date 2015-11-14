var express = require('express');
var router = express.Router();
var getUserService = require('../services/getUserService');
var createNewUser = require('../services/newUser');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pages/users', { title: 'User Page' });
});

router.get('/newUser/:newUserName', function(req, res, next) { 
    var newUserName = req.params.newUserName;
    createNewUser.addUser(newUserName,function(){
      getUserService.findUser(newUserName,function(thisData){
        console.log('ROUTER LEVEL: new user created with the name:', thisData);
        res.render('pages/users', { 
        title: 'User Page',
        details: thisData.name
        });
      });
  });
});

router.get('/allUsers',function(req, res, next) {
  getUserService.findAllUsers(function(allUsers){
    console.log('Router level, I found all of the users');
    console.log(allUsers);
    res.render('pages/users', { 
          title: 'this user does not exist',
          users: allUsers
      });
  });
});

router.get('/:userId', function(req, res, next) {
    var requestName = req.params.userId;
    console.log(requestName);
    getUserService.findUser(requestName, function(data){
      if (data){
      var thisUserName = data.name;
      console.log(data.name);
      res.render('pages/users', { 
          title: 'User Page',
          user: thisUserName
      });
      } res.render('pages/users', { 
          title: 'this user does not exist',
          user: thisUserName
      });
    });
});

module.exports = router;
