var newTeam = require('./services/newTeam');
var request = require("request");

// calls to api.probasketballapi.com given three arguments
//      chartType:      based on the several chart types offered by the api
//      thisFormData:   An object containing the 'api_key' and a series
//                      of parameters for the response
//      next:           A callback function that receives two arguments,
//                      The httpResonse fromthe probasketball API and the body
//                      of the request in JSON
                        
var returnData  = function(next){   
    request.get(
        {url:'https://portsdb-jsrv.rhcloud.com//api/ports?ordering=status,max_dwt', 
        headers:{
            'Content-Type': 'application/json',
            "Authorization":'Token 93798b5328842049e6069c6353f2aa43df62eedb'
        }
        }, function optionalCallback (err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            } 
            next(httpResponse,body);
        }
    );
};

// BETFAIR REQUEST API TEST

/*var options = {
    
    header:{
        "X-Application":'7Bm3j3wkRxTfF3Cx'
    }
};*/

var betFairExchangeRequest  = function(chartType,thisFormData,next){   
    request.post(
        {url:'https://identitysso.betfair.com/api/login', formData: thisFormData}, function optionalCallback (err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            } 
            next(httpResponse,body);
        }
    );
};

var dataType = 'boxscore/team';

var formData={
    'api_key':'UvYXcg7iS3nqP4ThkFMoNtAHQ01e2byG',
    'season':'2015',
    //'team_id': '1610612764',
    //'get_extra':'0',
    //'date':'110115',
   
     /*'opponent_id': '1610612760',
    'shot_outcome': 0,
    'time_remaining':'120',
    'season':'2014'*/
};

var createNewGame = function Team(elements){
        this.teamId =       elements.team_id;
        this.City =         elements.city;
        this.teamName =     elements.team_name;
        this.abbreviation = elements.abbreviation;
};

function logArrayElements (element, index, array) {
        if (element.final == 1){
        console.log(element);
        }
        //newTeam.addTeam(thisTeam);
}
 


/*returnData(function (y,z){
    console.log(z);
    //parsed.forEach(logArrayElements);
});*/

            //var parsed = JSON.parse(body)
            
            //parsed.forEach(logArrayElements);
            //next('made it');
            //return shotchart;
            //console.log(shotchart);
            //.forEach(logArrayElements);
        
//teams
//games
//shotcharts

/*
{ id: 310008,
  game_id: 21400633,
  player_id: 202338,
  team_id: 1610612764,
  opponent_id: 1610612760,
  period: 1,
  time_remaining: 26,
  event_outcome: 'Missed Shot',
  action_type: 'Jump Shot',
  shot_type: '2PT Field Goal',
  shot_distance: 4,
  loc_x: -45,
  loc_y: 9,
  shot_attempted: 1,
  shot_made: 0 }
*/

/*var pushNewTeam = function(teamObject){
    newTeam.addTeam(teamObject, function(err){
        if (err){
            console.log(err);
            }
            console.log('new team ', teamObject);
        }
    );
};*/
