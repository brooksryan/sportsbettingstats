var User = require("../models/user").User;

exports.addUser = function (userName, next){
    console.log('made it to the new team service!');
    var newUser = new User ({
        name: userName,
    });
    
    newUser.save(function(err){
        if (err !== null) {
            console.log(err);
        } else console.log('newUser.js service level:  user Successfully saved with name', newUser.name);
        }
    );
    
    next(newUser);
};