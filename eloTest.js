var User = function (name,score){
    this.name = name;
    this.score = score;
    this.gamesPlayed;
    var userScore = this.score;
    this.announceScore = function (userScore) {
        console.log("after "+this.gamesPlayed+" games played, this is "+this.name+"'s score: "+this.score);
    };
};

var Shane = new User('Shane',361);
var Brooks = new User('Brooks',230);

function eloRating (user1, user2, user1PointsEarned, user2PointsEarned, next) {
    
    var qA = Math.pow(10,(user1.score/400));
    var qB = Math.pow(10,(user2.score/400));
    
    var expectedUser1Score = (qA/(qA+qB));
    var expectedUser2Score = (qB/(qA+qB));
    
    //K value for score weighting
    var k = 32;
    
    // calculate adjusted user scores with k value
    var adjustedUser1Score = user1.score+k*(user1PointsEarned-expectedUser2Score);
    var adjustedUser2Score = user2.score+k*(user2PointsEarned-expectedUser1Score);
   
    // update user scores 
    user1.score = adjustedUser1Score;
    user2.score = adjustedUser2Score;
    
    user1.gamesPlayed +=1;
    user2.gamesPlayed +=1;
    
    user1.announceScore();
    user2.announceScore();
    
    //next(adjustedUserRating,adjustedOpponentRating)
    
}

//eloRating(Shane, Brooks, 4, 3);

var expectedScore = function (user1score,user2score) {
    var qA = Math.pow(10,(user1score/400));
    var qB = Math.pow(10,(user2score/400));
    
    var expectedUser1Score = (qA/(qA+qB));
    var expectedUser2Score = (qB/(qA+qB));
    
    console.log(expectedUser1Score)
    console.log(expectedUser2Score)
};

expectedScore(97,91);