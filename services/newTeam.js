var Team = require("../models/teams").Team;

exports.addTeam = function (team, next){
    console.log('made it to the new team service!');
    var newTeam = new Team ({
        teamId: team.teamId,
        teamCity: team.City,
        teamName: team.teamName,
        abbreviation:  team.abbreviation,
    });
    
    newTeam.save(function(err){
        if (err !== null) {
            console.log(err);
        } else console.log(err);
        }
    );
};