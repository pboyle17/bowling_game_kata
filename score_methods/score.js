bowling = {
  frame:1,
  score:function(arr){
    var sum = 0;
    var lastRoll;
    var twoRollsAgo;
    var bonus=0;
    var count=1

    arr.forEach(function(roll){
      if(bowling.isLastRollStrike(lastRoll,twoRollsAgo) && bowling.frame != 10){
        bonus+=roll;
        bowling.frame++
        count=1;
      }
      if(bowling.isTwoRollsAgoStrike(twoRollsAgo) && bowling.frame != 10){
        bonus+=roll;
        count++;
      }
      if(bowling.isLastFrameASpare(lastRoll,twoRollsAgo)){
        bonus+=roll;
      }
      if(count>2 && bowling.isLastRollStrike(lastRoll)==false && bowling.frame!=10){
        bowling.frame++
        count=1;
      }
      // console.log('frame: ',bowling.frame);
      sum+=roll;
      twoRollsAgo = lastRoll
      lastRoll = roll;
      count++

    });
    return sum + bonus;
  },
  isLastRollStrike:function(lastRoll,twoRollsAgo){
    if(lastRoll==10 && twoRollsAgo!=0){
      return true;
    } else {
      return false;
    }
  },
  isTwoRollsAgoStrike:function(twoRollsAgo){
    if(twoRollsAgo==10){
      return true;
    } else {
      return false;
    }
  },
  isLastFrameASpare:function(lastRoll,twoRollsAgo){
    if(lastRoll+twoRollsAgo ==10){
      return true;
    } else {
      return false;
    }
  }
}

module.exports.bowling=bowling
