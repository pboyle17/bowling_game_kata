var scoreKeeper = {
  score: function(arr){
    var sum=0;
    var count = 0;
    var bonus = 0;
    arr.forEach(function(roll){
      if(count==2 && sum==10){
        bonus+= roll;
      }
      sum+=roll;
      count++;
    });
    return sum+bonus;
  }
}

module.exports.scoreKeeper = scoreKeeper;
