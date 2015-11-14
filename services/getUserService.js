var mongoose = require('mongoose');
var userSchema = require('../models/user');
var User = userSchema.User;

exports.findUser = function(requestName,next){
    
    User.findOne({'name': requestName}, 'name', function(err,person){
        if (err) {console.log(err);
        } 
        console.log(person);
        next(person);
    });
    
};

exports.findAllUsers = function(next){
    User.find({},'name eloScore',function(err,user){
        if (err) {console.log(err);
        }
        console.log(user);
        next(user)
    })
};