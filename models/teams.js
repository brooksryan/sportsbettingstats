var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema ({
    teamId: String,
    teamCity: String,
    teamName: String,
    abbreviation: String,
});

var Team = mongoose.model('Team', teamSchema);

module.exports = {
    Team: Team
};
