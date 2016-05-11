var scoreKeeper = {
  score: function(arr){
    var sum=0;
    var bonus = 0;

    var lastRoll,twoRollsEarlier

    arr.forEach(function(roll){
      if(lastRoll == 10){
        bonus+=roll;
      }
      if(twoRollsEarlier == 10){
        bonus+=roll;
      }
      else if(twoRollsEarlier+lastRoll==10){
        bonus+=roll;
      }
      sum+=roll;
      twoRollsEarlier = lastRoll
      lastRoll = roll;
    });

    return sum+bonus;
  }
}


module.exports.scoreKeeper = scoreKeeper;
