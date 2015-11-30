var express = require('express');
var router = express.Router();
var url = require('url');
var userSchema = require('../models/user');
var User = userSchema.User;
var getUserService = require('../services/getUserService');
var getEloRating = require('../services/eloTest');

router.get('/', function(req, res, next) { 
  
      res.render('index', { title: 'Games!' });
  
});

module.exports = router;

/* GET users listing. */

router.post('/gameResult/', function(req, res, next) {
    var query = req.body; 
    console.log('this is the query:', query);

//      Searches mongo for the winner (req.win) and returns
//      the winners name, id# and elo score
//      in thisWinner
    
    getUserService.findUser(req.body.win, function(winner){
        var thisWinner = winner;
        
//      Searches mongo for the loser (req.loss)
//      and returns losers name, id# and elo score
//      in thisLoser

        getUserService.findUser(req.body.loss, function(loser) {
            var thisLoser = loser;

//      runs both <user>.eloScores through the eloRating with
//      the given score and returns an array of two new elo ratings
//      with [0] as the winner and [1] as the loser

            getEloRating.eloRating(thisWinner.eloScore,thisLoser.eloScore,1,0,function(results){
                thisWinner.eloScore = results[0];
                thisLoser.eloScore = results[1];

//      updates both records in mongo by searching for the name and 
//      upading the user elo records
                
                getUserService.updateUserData(winner,function(affected){
                    getUserService.updateUserData(loser,function(affected){
                        var finalResults = [winner,loser];

//      redirects the user back to the all users page
//      To-do --> return the new scores and render them in the browser

                        res.redirect('/users/allUsers')
                    });    
                });
            });
        });
    });
});;

module.exports = router;