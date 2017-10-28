

var $player1 = $('.p1');
// var $player2 = $('.p2');
var $p1Pos;
// numbers in timeout are animation durations in milliseconds
var upHit = function(){
	$player1.addClass('upHit');
	setTimeout(function() { $player1.removeClass('upHit');}, 300);
};

// var isUpHit = function(){
//           return $p1Pos+10 == $p2Pos ? true : false;
//       };


var middleHit = function(){
	$player1.addClass('middleHit')
	setTimeout(function() { $player1.removeClass('middleHit');},600);
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
var jump = function(){
  $player1.addClass('jump');
  setTimeout(function() { $player1.addClass('down'); }, 500); 
  setTimeout(function() { $player1.removeClass('jump down'); }, 1000); 
};
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
    		&& !$player1.hasClass('middleHit')
    		&& !$player1.hasClass('downHit')
    	){
    		upHit();
    	}
    	if(e.keyCode==82
    		&& !$player1.hasClass('upHit')
    		&& !$player1.hasClass('downHit')
    	){
    		middleHit();
    	}
    	if(e.keyCode==70
    		&& !$player1.hasClass('upHit')
    		&& !$player1.hasClass('middleHit')
    	){
    		downHit();
    	}
      if (e.keyCode == 87
            && !$player1.hasClass('downHit') 
            && !$player1.hasClass('upHit')
        && !$player1.hasClass('middleHit')
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
    	if(e.keyCode == 68){right();}
    }
   	else{
   	$player1.removeClass('walk kneel');
   }
   return false;
 });
