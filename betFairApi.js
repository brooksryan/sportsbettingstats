var request = require("request");
var parseString = require('xml2js').parseString;
request.debug = true;
var mongoose = require("mongoose");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('connection established');
});


var query = {
    year: 2015
};

var teams = db.model('Team');
console.log(teams);


var betFairExchangeRequest  = function (){   
    request({
            
            method: 'GET',
            url:'http://api.sportradar.us/nba-t3/games/2015/REG/schedule.json?api_key=yjycrbkwjdzfge3cymkcutqx',
            
            }, function optionalCallback (err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                } 
                var newJson = JSON.parse(body);
                console.log(newJson.league);
                
                
        }
    );
};

//betFairExchangeRequest();

//schema/schedule-v2.0.xsd?api_key=yjycrbkwjdzfge3cymkcutqx
/*headers:{
                'access_level': 't',
                'version': '3',
                'format':             'json',
                'api_key':    'yjycrbkwjdzfge3cymkcutqx'
            },*/