var expect = require('chai').expect;

describe('calculateScore',function(){
  var bowling = require('../score_methods/score').bowling;
  var resetGame = function(){
    bowling.frames={
      one:{
        pins:0,
        strike:false,
        spare:false
      },
      two:{
        pins:0,
        strike:false,
        spare:false,
      },
      three:{
        pins:0,
        strike:false,
        spare:false,
      },
      four:{
        pins:0,
        strike:false,
        spare:false,
      },
      five:{
        pins:0,
        strike:false,
        spare:false,
      },
      six:{
        pins:0,
        strike:false,
        spare:false,
      },
      seven:{
        pins:0,
        strike:false,
        spare:false,
      },
      eight:{
        pins:0,
        strike:false,
        spare:false,
      },
      nine:{
        pins:0,
        strike:false,
        spare:false,
      },
      ten:{
        pins:0,
        strike:false,
        spare:false,
      }
    };
    bowling.topOfFrame = true;
    bowling.currentFrame = 'one';
  };

  it('should return zero total score for a gutter game 20 rolls of zero',function(){
    resetGame();
    expect(bowling.calculateScore([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).to.equal(0);
  });

  it('should return a score of 20 for twenty rolls of one',function(){
    resetGame();
    expect(bowling.calculateScore([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])).to.equal(20);
  });

  it('should return a score of 24 for a strike in the first frame followed by three pins,then for pins, followed by all misses',function(){
    resetGame();
    expect(bowling.calculateScore([10,3,4,0,0,0,0,0,0,0,0,0,0,0])).to.equal(24);
  });

  it('should return 16 from arr [9,1,3,0,0,0,0,0,0]',function(){
    resetGame();
    expect(bowling.calculateScore([9,1,3,0,0,0,0,0,0])).to.equal(16);
  });
  it('a perfect game should return 300',function(){
    resetGame()
    expect(bowling.calculateScore([10,10,10,10,10,10,10,10,10,10,10,10])).to.equal(300);
  });
});

describe('nextFrame',function(){
  var bowling = require('../score_methods/score').bowling;

  var resetGame = function(){
    bowling.frames={
      one:{
        pins:0,
        strike:false,
        spare:false
      },
      two:{
        pins:0,
        strike:false,
        spare:false,
      },
      three:{
        pins:0,
        strike:false,
        spare:false,
      },
      four:{
        pins:0,
        strike:false,
        spare:false,
      },
      five:{
        pins:0,
        strike:false,
        spare:false,
      },
      six:{
        pins:0,
        strike:false,
        spare:false,
      },
      seven:{
        pins:0,
        strike:false,
        spare:false,
      },
      eight:{
        pins:0,
        strike:false,
        spare:false,
      },
      nine:{
        pins:0,
        strike:false,
        spare:false,
      },
      ten:{
        pins:0,
        strike:false,
        spare:false,
      }
    };
    bowling.topOfFrame = true;
    bowling.currentFrame = 'one';
  };

  it('should return two when input one',function(){
    bowling.currentFrame = 'one';
    bowling.nextFrame();
    expect(bowling.currentFrame).to.equal('two');
  })
  it('should return ten when current frame is ten',function(){
    bowling.currentFrame = 'ten';
    bowling.nextFrame();
    expect(bowling.currentFrame).to.equal('ten');
  })
  it('should return top of frame true after nextFrame is called',function(){
    resetGame();
    bowling.topOfFrame = false;
    bowling.nextFrame();

    expect(bowling.topOfFrame).to.equal(true);
  });
});

describe('lastFrame',function(){
  var bowling = require('../score_methods/score').bowling;

  var resetGame = function(){
    bowling.frames={
      one:{
        pins:0,
        strike:false,
        spare:false
      },
      two:{
        pins:0,
        strike:false,
        spare:false,
      },
      three:{
        pins:0,
        strike:false,
        spare:false,
      },
      four:{
        pins:0,
        strike:false,
        spare:false,
      },
      five:{
        pins:0,
        strike:false,
        spare:false,
      },
      six:{
        pins:0,
        strike:false,
        spare:false,
      },
      seven:{
        pins:0,
        strike:false,
        spare:false,
      },
      eight:{
        pins:0,
        strike:false,
        spare:false,
      },
      nine:{
        pins:0,
        strike:false,
        spare:false,
      },
      ten:{
        pins:0,
        strike:false,
        spare:false,
      }
    };
    bowling.topOfFrame = true;
    bowling.currentFrame = 'one';
  };

  it('should equal true',function(){
    bowling.currentFrame='two';
    expect(bowling.lastFrame()).to.equal('one');
  });
});

describe('sum',function(){
  var bowling = require('../score_methods/score').bowling;

  var resetGame = function(){
    bowling.frames={
      one:{
        pins:0,
        strike:false,
        spare:false
      },
      two:{
        pins:0,
        strike:false,
        spare:false,
      },
      three:{
        pins:0,
        strike:false,
        spare:false,
      },
      four:{
        pins:0,
        strike:false,
        spare:false,
      },
      five:{
        pins:0,
        strike:false,
        spare:false,
      },
      six:{
        pins:0,
        strike:false,
        spare:false,
      },
      seven:{
        pins:0,
        strike:false,
        spare:false,
      },
      eight:{
        pins:0,
        strike:false,
        spare:false,
      },
      nine:{
        pins:0,
        strike:false,
        spare:false,
      },
      ten:{
        pins:0,
        strike:false,
        spare:false,
      }
    };
    bowling.topOfFrame = true;
    bowling.currentFrame = 'one';
  };

  it('should return the sum of all scores in all the frames',function(){
    resetGame();
    expect(bowling.sum()).to.equal(0);
  });

  it('should return 300 for frames of 30',function(){
    resetGame();
    bowling.frames.one.pins=30;
    bowling.frames.two.pins=30;
    bowling.frames.three.pins=30;
    bowling.frames.four.pins=30;
    bowling.frames.five.pins=30;
    bowling.frames.six.pins=30;
    bowling.frames.seven.pins=30;
    bowling.frames.eight.pins=30;
    bowling.frames.nine.pins=30;
    bowling.frames.ten.pins=30;
    expect(bowling.sum()).to.equal(300);
  });
});

describe('isStrike',function(){
  var bowling = require('../score_methods/score').bowling;

  var resetGame = function(){
    bowling.frames={
      one:{
        pins:0,
        strike:false,
        spare:false
      },
      two:{
        pins:0,
        strike:false,
        spare:false,
      },
      three:{
        pins:0,
        strike:false,
        spare:false,
      },
      four:{
        pins:0,
        strike:false,
        spare:false,
      },
      five:{
        pins:0,
        strike:false,
        spare:false,
      },
      six:{
        pins:0,
        strike:false,
        spare:false,
      },
      seven:{
        pins:0,
        strike:false,
        spare:false,
      },
      eight:{
        pins:0,
        strike:false,
        spare:false,
      },
      nine:{
        pins:0,
        strike:false,
        spare:false,
      },
      ten:{
        pins:0,
        strike:false,
        spare:false,
      }
    };
    bowling.topOfFrame = true;
    bowling.currentFrame = 'one';
  };

  it('should return true if the roll was a strike and false if the roll isnt a strike',function(){
    resetGame();
    var roll = 10;
    expect(bowling.isStrike(roll)).to.equal(true);
  });

  it('should return false if the roll was a 10 and its the bottom of the frame',function(){
    bowling.frames={
      one:0,
      two:0,
      three:0,
      four:0,
      five:0,
      six:0,
      seven:0,
      eight:0,
      nine:0,
      ten:0
    };
    var roll = 10;
    bowling.topOfFrame=false;
    expect(bowling.isStrike(roll)).to.equal(false);
  });
});

describe('twoRollsAgo',function(){
  var bowling = require('../score_methods/score').bowling;

  var resetGame = function(){
    bowling.frames={
      one:{
        pins:0,
        strike:false,
        spare:false
      },
      two:{
        pins:0,
        strike:false,
        spare:false,
      },
      three:{
        pins:0,
        strike:false,
        spare:false,
      },
      four:{
        pins:0,
        strike:false,
        spare:false,
      },
      five:{
        pins:0,
        strike:false,
        spare:false,
      },
      six:{
        pins:0,
        strike:false,
        spare:false,
      },
      seven:{
        pins:0,
        strike:false,
        spare:false,
      },
      eight:{
        pins:0,
        strike:false,
        spare:false,
      },
      nine:{
        pins:0,
        strike:false,
        spare:false,
      },
      ten:{
        pins:0,
        strike:false,
        spare:false,
      }
    };
    bowling.topOfFrame = true;
    bowling.currentFrame = 'one';
  };

  it('should return the string one if the current frame is three',function(){
    resetGame();
    bowling.currentFrame = 'three';
    expect(bowling.twoFramesAgo()).to.equal('one');
  });

  describe('should return true if frame is a strike and false if not a strike',function(){
    var bowling = require('../score_methods/score').bowling;
    var resetGame = function(){
      bowling.frames={
        one:{
          pins:0,
          strike:false,
          spare:false
        },
        two:{
          pins:0,
          strike:false,
          spare:false,
        },
        three:{
          pins:0,
          strike:false,
          spare:false,
        },
        four:{
          pins:0,
          strike:false,
          spare:false,
        },
        five:{
          pins:0,
          strike:false,
          spare:false,
        },
        six:{
          pins:0,
          strike:false,
          spare:false,
        },
        seven:{
          pins:0,
          strike:false,
          spare:false,
        },
        eight:{
          pins:0,
          strike:false,
          spare:false,
        },
        nine:{
          pins:0,
          strike:false,
          spare:false,
        },
        ten:{
          pins:0,
          strike:false,
          spare:false,
        }
      };
      bowling.topOfFrame = true;
      bowling.currentFrame = 'one';
    };

    it('should return true if last two rolls add up to 10 and it is the bottom of the frame',function(){
      bowling.frames.one.pins = 10;
      bowling.topOfFrame=false;
      expect(bowling.isSpare()).to.equal(true);
    });
    it('should return false if the last two rolls add up to 10 and it is the top of the frame',function(){
      bowling.topOfFrame = true
      bowling.frames.one.pins = 10;
      expect(bowling.isSpare()).to.equal(false);
    })
  });
});
