var dataType = 'teams';
var request = require("request");
var formData={
    'api_key':'UvYXcg7iS3nqP4ThkFMoNtAHQ01e2byG',
    //'get_extra':'0',
    //'date':'110115',
    /*'team_id': '1610612764',
    'opponent_id': '1610612760',
    'shot_outcome': 0,
    'time_remaining':'120',
    'season':'2014'*/
};
var shotchart = [];


function logArrayElements (element, index, array) {
            shotchart.push(element);
        } 
 
exports.returnData  = function(chartType,next){   
    request.post(
        {url:'https://probasketballapi.com/'+dataType, formData: formData}, function optionalCallback (err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            } 
            var parsed = JSON.parse(body);
            parsed.forEach(logArrayElements);
            //return shotchart;
            return next(shotchart);
            //.forEach(logArrayElements);
        
        });
    };

//returnData(chartType);

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