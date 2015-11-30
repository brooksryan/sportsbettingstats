var userSchema = require('../models/user');
var User = userSchema.User;
var getUserService = require('../services/getUserService');

exports.eloRating = function (winElo, lossElo, winPoints, lossPoints, next) {
    
    console.log('there are the parameters:', winElo,lossElo,winPoints,lossPoints)
    
    var qA = Math.pow(10,(winElo/400));
    var qB = Math.pow(10,(lossElo/400));
    
    console.log(qA,qB);
    
    var expectedUser1Score = (qA/(qA+qB));
    var expectedUser2Score = (qB/(qA+qB));
    
    console.log('expected user scores:',expectedUser1Score
    ,'user 2: ',expectedUser2Score )
    
    //K value for score weighting
    var k = 32;
    
    // calculate adjusted user scores with k value
    var adjustedUser1Score = Math.round(winElo+k*(winPoints-expectedUser2Score));
    var adjustedUser2Score = Math.round(lossElo+k*(lossPoints-expectedUser1Score));
   
    // update user scores 
    var finalElo = [adjustedUser1Score,adjustedUser2Score]
    
    console.log(finalElo)
    
    next(finalElo);
    //next(adjustedUserRating,adjustedOpponentRating)
};


exports.expectedScore = function (user1score,user2score) {
    var qA = Math.pow(10,(user1score/400));
    var qB = Math.pow(10,(user2score/400));
    
    var expectedUser1Score = (qA/(qA+qB));
    var expectedUser2Score = (qB/(qA+qB));
    
    console.log(expectedUser1Score)
    console.log(expectedUser2Score)
};