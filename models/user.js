var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    name :          String,
    eloScore :      {type: Number, default: 500},
    gamesPlayed :   Number
});

var User = mongoose.model('User', userSchema);

module.exports = {
    User: User
};
