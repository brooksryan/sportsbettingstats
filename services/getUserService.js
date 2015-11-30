var mongoose = require('mongoose');
var userSchema = require('../models/user');
var User = userSchema.User;

exports.findUser = function(requestName,next){
    User.findOne({'name': requestName}, 'name eloScore', function(err,person){
        if (err) {console.log(err);
        } 
        console.log(person);
        next(person);
    });
};

exports.findAllActive = function(next){
    User.find({},'name eloScore',function(err,user){
        if (err) {console.log(err);
        }
        console.log('search returned these users: ',user);
        next(user);
    })
};

exports.findAllUsers = function(name,next){
    User.find({name},'name eloScore',function(err,user){
        if (err) {console.log(err);
        }
        console.log('search returned these users: ',user);
        next(user);
    })
};

exports.updateUserData = function (results,next){
var affected;    
    var conditions = 
        {name: results.name}
        ,update = {$set: {eloScore: results.eloScore}}
        ,options = { multi: false };
        
    User.update(conditions, update, options, function (err, numAffected) {
        if (err) {console.log(err);
    }   else {
    affected = numAffected;
    console.log('success on updating', results);
    next(affected);
    }
  // numAffected is the number of updated documents
    });
    
};