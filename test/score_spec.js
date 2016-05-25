var expect = require('chai').expect;

describe('bowling',function(){
  var bowling = require('../score_methods/score').bowling;

  it('should return zero total score for a gutter game 20 rolls of zero',function(){
    bowling.frame = 1;
    expect(bowling.score([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).to.equal(0);
  });

  it('should return a score of 20 for twenty rolls of one',function(){
    bowling.frame = 1;
    expect(bowling.score([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])).to.equal(20);
  });

  it('should return frame 10 for game of rolls of one',function(){
    bowling.frame = 1;
    bowling.score([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
    expect(bowling.frame).to.equal(10);
  });

  it('should return a score of 24 for a strike in the first frame followed by three pins,then for pins, followed by all misses',function(){
    bowling.frame = 1;
    expect(bowling.score([10,3,4,0,0,0,0,0,0,0,0,0,0,0])).to.equal(24);
  });

  it('should return 16 from arr [9,1,3,0,0,0,0,0,0]',function(){
    bowling.frame = 1;
    expect(bowling.score([9,1,3,0,0,0,0,0,0])).to.equal(16);
  });
  it('a perfect game should return 300',function(){
    bowling.frame = 1;
    expect(bowling.score([10,10,10,10,10,10,10,10,10,10,10,10])).to.equal(300);
  });
});
