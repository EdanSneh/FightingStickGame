

var $player1 = $('.p1');
var $player2 = $('.p2');
var $stage = $('.stage');
var $player1Pos = $player1.offset().left;
var $player2Pos = $player2.offset().left;

var switch2 = 0;
var switch1 = 0;
var hasjumpdelay = false;
var hasjumpdelay2 = false;
var score1=0;
var score2=0;
  $(".score1").html(score1);
  $(".score2").html(score2);

var givescore = function(num){
  if(num == 1){
    score1 += 1;
  }
  if(num == 2){
    score2+=1;
  }
  
  $(".score1").html(score1);
  $(".score2").html(score2);
}
// var $player2 = $('.p2');

// numbers in timeout are animation durations in milliseconds
var upHit = function(){
	$player1.addClass('upHit');
	setTimeout(function() { $player1.removeClass('upHit');}, 300);
};

var isNear = function(){
    $player1Pos = $player1.offset().left;
    $player2Pos = $player2.offset().left;

  // alert($player1Pos-$player2Pos);
  
          return $player2Pos - $player1Pos <= 30 ? true : false;
      };

var isHit = function(){
    $player1Pos = $player1.offset().left;
    $player2Pos = $player2.offset().left;

  // alert($player1Pos-$player2Pos);
  
          return $player2Pos - $player1Pos <= 40 

          ? true : false;
      };

var middleHit = function(){
	$player1.addClass('middleHit')
	setTimeout(function() { $player1.removeClass('middleHit');},300);
};
var downHit = function(){
	$player1.addClass('downHit')
	setTimeout(function() { $player1.removeClass('downHit');},300);
};
var jump = function(){
  jumpdelay();
  $player1.addClass('jump')
	setTimeout(function() { $player1.addClass('down');},500);
	setTimeout(function() { $player1.removeClass('jump down');},1000);

};
var kneel = function(){
	$player1.addClass('kneel');
}
//move person class
var left = function(){
	$player1.addClass('.walk').css({'margin-left':'-=11.5px'});
};
var right = function(){
	$player1.addClass('.walk').css({'marginLeft':'+=11.5px'});
};
// on keydown events
$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') {
    	if(e.keyCode==69
    		&& !$player1.hasClass('upHit')
        && !$player1.hasClass('downHit')
        && !$player1.hasClass('middleHit')
        && !hasjumpdelay
    	){
    		upHit();
        delay(1);
      
    	}
    	if(e.keyCode==82
    		&& !$player1.hasClass('upHit')
    		&& !$player1.hasClass('downHit')
        && !$player1.hasClass('middleHit')
        && !hasjumpdelay
    	){

    		middleHit();
         delay(2);
        
    	}
    	if(e.keyCode==70
    		&& !$player1.hasClass('upHit')
        && !$player1.hasClass('downHit')
        && !$player1.hasClass('middleHit')
        && !hasjumpdelay
    	){
    		downHit();
        delay(3);
    	}
      if (e.keyCode == 87
            && !$player1.hasClass('downHit') 
            && !$player1.hasClass('upHit')
        && !$player1.hasClass('middleHit')
         && !$player1.hasClass('jump')
        ) { 
            jump();
        }

        // down - kneel
        if (e.keyCode == 83 
            && !$player1.hasClass('downHit') 
            && !$player1.hasClass('upHit')
        && !$player1.hasClass('middleHit')
        ) { 
            kneel();
        }
    	if(e.keyCode == 65
        && !($stage.offset().left-$player1.offset().left >= 0)
        ){left();
      }
    	if(e.keyCode == 68
        && !isNear()
        ){right();
  }
    }
   	else{
   	$player1.removeClass('walk kneel');
   }
   return false;
 });


//checks for jump vs block secrets
var edgecases = function(){

  if(hasjumpdelay&&!!(switch2==1)){
    //kill == false
    return false;
  }
  if(hasjumpdelay2&&!(switch1==1)){
    //kill == false
    return false;
  }
  if($player1.hasClass('kneel')&&!(switch2==3)){
    //kill == false
    return false;
  }
  if($player2.hasClass('kneel2')&&!(switch1==3)){
    //kill == false
    return false;
  }
  return true
}

var jumpdelay = function(){

  hasjumpdelay = true;
  setTimeout(function(){hasjumpdelay = false},1000);
}
var jumpdelay2 = function(){

  hasjumpdelay2 = true;
  setTimeout(function(){hasjumpdelay2 = false},1000);
}
//for the human eye

var delay = function(num){
  switch1=num
  if(switch2!=num){
    setTimeout(function(){
      if(switch2!=num&&isHit()&&edgecases()){
      $player1.addClass('.walk').css({'marginLeft':'0px'});
       $player2.addClass('.walk2').css({'marginLeft':'380px'});
       givescore(1);
      }

    },200)
  }  
  setTimeout(function() { switch1=0;},300);
}

var delay2 = function(num){
  switch2=num
  if(switch1!=num){
    setTimeout(function(){
      if(switch1!=num&&isHit()&&edgecases()){
       $player1.addClass('.walk').css({'marginLeft':'0px'});
        $player2.addClass('.walk2').css({'marginLeft':'380px'});
       givescore(2);
    }
    
    },300)

  }
  setTimeout(function() { switch2=0;},200);
}


//player 2
var upHit2 = function(){
  $player2.addClass('upHit2');
  setTimeout(function() { $player2.removeClass('upHit2');}, 300);
};

// var isUpHit = function(){
//           return $p1Pos+10 == $p2Pos ? true : false;
//       };


var middleHit2 = function(){
  $player2.addClass('middleHit2')
  setTimeout(function() { $player2.removeClass('middleHit2');},300);
};
var downHit2 = function(){
  $player2.addClass('downHit2')
  setTimeout(function() { $player2.removeClass('downHit2');},300);
};
var jump2 = function(){
  jumpdelay2();
  $player2.addClass('jump2')
  setTimeout(function() { $player2.addClass('down2');},500);
  setTimeout(function() { $player2.removeClass('jump2 down2');},1000);
  
};
var kneel2 = function(){
  $player2.addClass('kneel2');
}

//move person class
var left2 = function(){
  $player2.addClass('.walk2').css({'margin-left':'-=11.5px'});
};
var right2 = function(){
  $player2.addClass('.walk2').css({'marginLeft':'+=11.5px'});
};
// on keydown events
$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') {
      if(e.keyCode==78
        && !$player2.hasClass('upHit2')
        && !$player2.hasClass('downHit2')
        && !$player2.hasClass('middleHit2')
        && !hasjumpdelay2
      ){
        upHit2();
        delay2(1);
        //did i hit the player
      }
      if(e.keyCode== 77
        && !$player2.hasClass('upHit2')
        && !$player2.hasClass('downHit2')
        && !$player2.hasClass('middleHit2')
        && !hasjumpdelay2
      ){
        middleHit2();
        delay2(2);

      }
      if(e.keyCode==188
        && !$player2.hasClass('upHit2')
        && !$player2.hasClass('downHit2')
        && !$player2.hasClass('middleHit2')
        && !hasjumpdelay2
      ){
        downHit2();
        delay2(3);
      }
      if (e.keyCode == 38
            && !$player2.hasClass('downHit2') 
            && !$player2.hasClass('upHit2')
        && !$player2.hasClass('middleHit2')
         && !$player2.hasClass('jump2')
        ) { 
            jump2();

        }

        // down - kneel
        if (e.keyCode == 40 
            && !$player2.hasClass('downHit2') 
            && !$player2.hasClass('upHit2')
        && !$player2.hasClass('middleHit2')
        ) { 
            kneel2();

        }
      if(e.keyCode == 37
        && !isNear()
        ){left2();}
      if(e.keyCode == 39
       && !($stage.offset().left-$player2.offset().left <= -380)
        ){right2();}
    }
    else{
    $player2.removeClass('walk2 kneel2');
   }
   return false;
 });
