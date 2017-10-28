

var $player1 = $('.p1');
var $player2 = $('.p2');
var $player1Pos = $player1.offset().left;
var $player2Pos = $player2.offset().left;

var switch2 = 0;
var switch1 = 0;

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
  
          return $player2Pos - $player1Pos <= 40 ? true : false;
      };

var middleHit = function(){
	$player1.addClass('middleHit')
	setTimeout(function() { $player1.removeClass('middleHit');},150);
};
var downHit = function(){
	$player1.addClass('downHit')
	setTimeout(function() { $player1.removeClass('downHit');},300);
};
var jump = function(){
	$player1.addClass('jump')
	setTimeout(function() { $player1.addClass('down');},500);
	setTimeout(function() { $player1.removeClass('jump down');},1000);
};
var kneel = function(){
	$player1.addClass('kneel');
}
//move person class
var left = function(){
	$player1.addClass('.walk').css({'margin-left':'-=10px'});
};
var right = function(){
	$player1.addClass('.walk').css({'marginLeft':'+=10px'});
};
// on keydown events
$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') {
    	if(e.keyCode==69
    		&& !$player1.hasClass('upHit')
        && !$player1.hasClass('downHit')
        && !$player1.hasClass('middleHit')
    	){
    		upHit();
        delay(1);
      
    	}
    	if(e.keyCode==82
    		&& !$player1.hasClass('upHit')
    		&& !$player1.hasClass('downHit')
        && !$player1.hasClass('middleHit')
    	){

    		middleHit();
         delay(2);
        
    	}
    	if(e.keyCode==70
    		&& !$player1.hasClass('upHit')
        && !$player1.hasClass('downHit')
        && !$player1.hasClass('middleHit')
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
    	if(e.keyCode == 65){left();}
    	if(e.keyCode == 68
        && !isNear()
        ){right();}
    }
   	else{
   	$player1.removeClass('walk kneel');
   }
   return false;
 });





//for the human eye

var delay = function(num){
  switch1=num
  if(switch2!=num){
    setTimeout(function(){
      if(switch2!=num&&isHit()){
       $player2.addClass('.walk2').css({'marginLeft':'400px'});
      }

    },500)
  }  
  setTimeout(function() { switch1=0;},500);
}

var delay2 = function(num){
  switch2=num
  if(switch1!=num){
    setTimeout(function(){
      if(switch1!=num&&isHit()){
       $player2layer1.addClass('.walk').css({'marginLeft':'0px'});
    }
    
    },500)

  }
  setTimeout(function() { switch2=0;},500);
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
  setTimeout(function() { $player2.removeClass('middleHit2');},150);
};
var downHit2 = function(){
  $player2.addClass('downHit2')
  setTimeout(function() { $player2.removeClass('downHit2');},300);
};
var jump2 = function(){
  $player2.addClass('jump2')
  setTimeout(function() { $player2.addClass('down2');},500);
  setTimeout(function() { $player2.removeClass('jump2 down2');},1000);
};
var kneel2 = function(){
  $player2.addClass('kneel2');
}

//move person class
var left2 = function(){
  $player2.addClass('.walk2').css({'margin-left':'-=10px'});
};
var right2 = function(){
  $player2.addClass('.walk2').css({'marginLeft':'+=10px'});
};
// on keydown events
$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') {
      if(e.keyCode==78
        && !$player2.hasClass('upHit2')
        && !$player2.hasClass('downHit2')
        && !$player2.hasClass('middleHit2')
      ){
        upHit2();
        delay2(1);
        //did i hit the player
      }
      if(e.keyCode== 77
        && !$player2.hasClass('upHit2')
        && !$player2.hasClass('downHit2')
        && !$player2.hasClass('middleHit2')
      ){
        middleHit2();
        delay2(2);

      }
      if(e.keyCode==188
        && !$player2.hasClass('upHit2')
        && !$player2.hasClass('downHit2')
        && !$player2.hasClass('middleHit2')
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
        ){right2();}
    }
    else{
    $player2.removeClass('walk2 kneel2');
   }
   return false;
 });
