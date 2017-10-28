var $player1 = $('.p1');
var $player2 = $('.p2');
var $p1Pos, $p2Pos;
//numbers in timeout are animation durations in milliseconds
var upHit = function(){
	$player1.addClass('uphit')
	setTimeout(fuction() { $player1.removeClass('uphit');},150);
};

var isupHit = function(){ 
          return $p1Pos+10 == $p2Pos ? true : false;
      };


var middleHit = function(){
	$player1.addClass('middlehit')
	setTimeout(fuction() { $player1.removeClass('middlehit');},150);
};
var downHit = function(){
	$player1.addClass('downhit')
	setTimeout(fuction() { $player1.removeClass('downhit');},150);
};
var jump = function(){
	$player1.addClass('jump')
	setTimeout(fuction() { $player1.addClass('gravity');},500);
	setTimeout(fuction() { $player1.removeClass('jump down');},1000);
};
var kneel = function(){
	$player1.addClass('kneel');
}

//move person class
var left = function(){
	$player1.addClass('walk').css({marginLeft:'-=10px'});
};
var right = function(){
	$player1.addClass('walk').css({marginLeft:'+=10px'});
};

// on keydown events
$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') {
    	if(e.keyCode==69
    		&& !$player1.hasClass('middlehit')
    		&& !$palyer1.hasClass('downhit')
    	){
    		upHit();
    	}
    	if(e.keyCode==82
    		&& !$player1.hasClass('uphit')
    		&& !$palyer1.hasClass('downhit')
    	){
    		middleHit();
    	}
    	if(e.keyCode==70
    		&& !$player1.hasClass('uphit')
    		&& !$palyer1.hasClass('middlehit')
    	){
    		downHit();
    	}

    	if(e.keyCode == 37){left();}
    	if(e.keyCode == 39){right();}
    }
   	else{
   	$player1.removeClass('walk kneel');
   }
   return false;
 });