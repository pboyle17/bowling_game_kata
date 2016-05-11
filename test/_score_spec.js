var expect = require('chai').expect;

describe('score',function(){
  var score = require('../game_logic/score_method').scoreKeeper.score;

  var check = function(arr,scoreToTest){
    return it('should return '+scoreToTest+' for the input '+arr,function(){
      expect(score(arr)).to.equal(scoreToTest);
    });
  }

  check([2,7],9);
  check([0],0);
  check([9,0],9);
  check([9,1,8,2],28);

});
