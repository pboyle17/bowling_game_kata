bowling = {
  topOfFrame:true,
  calculateScore:function(arr){
    arr.forEach(function(roll){
      bowling.frames[bowling.currentFrame].pins+=roll;
      if(bowling.frames[bowling.lastFrame()].strike==true){
        bowling.frames[bowling.lastFrame()].pins+=roll;
      }
      if(bowling.frames[bowling.twoFramesAgo()].strike==true){
        bowling.frames[bowling.twoFramesAgo()].pins+=roll;
      }
      if(bowling.topOfFrame==false){
        bowling.nextFrame();
      }
      if(bowling.isStrike(roll)){
        bowling.frames[bowling.currentFrame].strike = true;
        bowling.nextFrame();
      }
      bowling.topOfFrame=!bowling.topOfFrame;
    });
    return bowling.sum();
  },
  frames:{
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
  },
  sum:function(){
    return bowling.frames.one.pins + bowling.frames.two.pins + bowling.frames.three.pins + bowling.frames.four.pins + bowling.frames.five.pins + bowling.frames.six.pins + bowling.frames.seven.pins + bowling.frames.eight.pins + bowling.frames.nine.pins + bowling.frames.ten.pins;
  },
  currentFrame:'one',
  nextFrame:function(){
    switch(bowling.currentFrame){
      case 'one':
        bowling.topOfFrame=true;
        bowling.currentFrame = 'two';
        break;
      case 'two':
        bowling.topOfFrame=true;
        bowling.currentFrame = 'three';
        break;
      case 'three':
        bowling.topOfFrame=true;
        bowling.currentFrame = 'four';
        break;
      case 'four':
        bowling.topOfFrame=true;
        bowling.currentFrame = 'five';
        break;
      case 'five':
        bowling.topOfFrame=true;
        bowling.currentFrame = 'six';
        break;
      case 'six':
        bowling.topOfFrame=true;
        bowling.currentFrame = 'seven';
        break;
      case 'seven':
        bowling.topOfFrame=true;
        bowling.currentFrame = 'eight';
        break;
      case 'eight':
        bowling.topOfFrame=true;
        bowling.currenFrame = 'nine';
        break;
      case 'nine':
        bowling.topOfFrame=true;
        bowling.currentFrame = 'ten';
        break;
      case 'ten':
        break;
    }
  },
  lastFrame:function(){
    switch(bowling.currentFrame){
      case 'one':
        return 'one'
      case 'two':
        return 'one'
      case 'three':
        return 'two';
      case 'four':
        return 'three';
      case 'five':
        return 'four';
      case 'six':
        return 'five';
      case 'seven':
        return 'six';
      case 'eight':
        return 'seven';
      case 'nine':
        return 'eight';
      case 'ten':
        return 'nine';
    }
  },
  isStrike:function(roll){
    if(roll==10 && bowling.topOfFrame==true){
      return true;
    } else {
      return false;
    }
  },
  twoFramesAgo:function(){
    switch(bowling.currentFrame){
      case 'one':
        return 'one'
      case 'two':
        return 'two'
      case 'three':
        return 'one';
      case 'four':
        return 'two';
      case 'five':
        return 'three';
      case 'six':
        return 'four';
      case 'seven':
        return 'five';
      case 'eight':
        return 'six';
      case 'nine':
        return 'seven';
      case 'ten':
        return 'eight';
    }
  },
  isSpare:function(){
    if(bowling.frames[bowling.currentFrame].pins==10 && bowling.topOfFrame==false){
      return true;
    } else {
      return false;
    }
  }
}

module.exports.bowling=bowling
