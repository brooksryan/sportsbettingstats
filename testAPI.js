var request = require("request");
var formData={
    'api_key':'UvYXcg7iS3nqP4ThkFMoNtAHQ01e2byG',
    //'get_extra':'0',
    //'date':'110115',
    'team_id': '1610612764',
    'opponent_id': '1610612760',
    'shot_outcome': 0,
    'time_remaining':'60',
    'season':'2014'
};
    
request
    .post({url:'https://probasketballapi.com/shotcharts', formData: formData}, function optionalCallback (err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        } console.log('Upload successful!  Server responded with:', body);
        
    });
            

//teams
//games
//shotcharts