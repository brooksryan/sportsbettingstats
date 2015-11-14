var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema ({
    gameId: String,
    homeTeam: String,
    awayTeam: String,
    completed: Boolean,
});

var Team = mongoose.model('Team', teamSchema);

module.exports = {
    Team: Team
};
