//this fragment contains all the event listeners and the creation of the canvas objects, etc
	
//////////////////////////////////////////////////////////////////////
///////////////// FIRST TIME SET UP
//////////////////////////////////////////////////////////////////////////////


var game = {
	paused : false,
	viewport:{
		scale:1,
		x:0,
		y:0
	}

};  //the core object all elements hang off from

//////////////////////////////////////////////////////////////////////////////

// // get version number from in folder index.php
// game.version = null;
// game.isBeta = null;


//////////////////////////////////////////////////////////////////////////////

/*
//https://github.com/carhartl/jquery-cookie
var myLocalCookie = $.cookie('invisible_maze'); // => "the_value"

if ((typeof myLocalCookie !=='undefined')  && (myLocalCookie.indexOf("_") >= 0)) {


	

// this is parsed in game.start_game

// 		var cookieArray = game.cookie.split("_");
// 		game.level= parseInt(cookieArray[0]);
// 		
// 		if (isNaN(game.level)) game.level =0;
// 		
// 		game.which_maze_on_level=parseInt(cookieArray[1]);
// 		if (isNaN(game.which_maze_on_level)) game.which_maze_on_level =0;
		
		
		var last_played_maze_array = game.de_stringify_completed_mazes(myLocalCookie);
// 		console.log (last_played_maze_array);

		// console.log (last_played_maze_array);
// 		alert(cookieArray[0] +" "+ cookieArray[1]);
		
		last_played_maze_array[0] = parseInt(last_played_maze_array[0]);
		last_played_maze_array[1] = parseInt(last_played_maze_array[1]);

		game.level= last_played_maze_array[0];
		game.which_maze_on_level=last_played_maze_array[1]
		
		game.last_completed_level = game.level;
		game.last_completed_maze = game.which_maze_on_level;

		console.log ("game.version:"+ game.version +" myLocalCookie:"+myLocalCookie);
}
*/

//////////////////////////////////////////////////////////////////////////////

game.createCanvas = function (){
// Create the canvas
game.canvas = document.createElement("canvas");

// console.log(game.canvas);
document.body.appendChild(game.canvas);

	
game.canvas.setAttribute("id", "da_canvas");
game.canvasContext = game.canvas.getContext("2d");
game.canvas.width = 360;
game.canvas.height = 568; //540;  //568 for iphone 5

// if (window.innerWidth <800){  //fit to screen only if it is on a phone
	game.canvas.width = window.innerWidth;

	//this may be simpler: window.navigator.standalone
	if ('standalone' in navigator && !navigator.standalone && (/iphone|ipod|ipad/gi).test(navigator.platform) && (/Safari/i).test(navigator.appVersion)) {
// alert('it is running in a browser window');  // 
// 		canvas.height = window.innerHeight+ 50;
		game.canvas.height = screen.height - 110;
	
	} else {
// alert ('is running in browserless standalone mode');  // 
// 		game.canvas.height = window.innerHeight;
		game.canvas.height = screen.height-18;
		
		
		if ( window.innerHeight < screen.height) game.canvas.height = window.innerHeight;   //for twitter and FB apps UI view

	}

// }


game.canvas.center = {
x: Math.floor(game.canvas.width/4),
y: Math.floor(game.canvas.height/4)
};
// console.log(game.canvas.center);

//determine the radius of the game
	// if (game.canvas.width > game.canvas.height) game.playspaceRadius = game.canvas.height/2;
	// else game.playspaceRadius = game.canvas.width/2;

	// game.viewport.x = game.canvas.center.x *-1;
	// game.viewport.y = game.canvas.center.y * -1;

// var isTwitter = navigator.userAgent.match(/twitter/i) != null;
// var isFacebook = navigator.userAgent.match(/twitter/i) != null;
// 
// alert(window.navigator.userAgent);
//  alert('screen.height' + screen.height + ' window.innerHeight' + window.innerHeight + ' game.canvas.height'+game.canvas.height );
// alert(game.canvas.center.y);




$("#da_canvas").html ('Your browser does not have the functionality to play this game.<br>You can <a href="https://support.google.com/chrome/answer/95346?hl=en">download a free modern browser</a>.</canvas>');	
$("#da_canvas").focus();

}
//////////////////////////////////////////////////////////////////////


/*
$(window).blur(function onWindowBlur(){
// 	game.log('paused  game.mode='+ game.mode);
	if (game.mode=='play') game.paused = true;
	game.keydownStartTime = null;
});

$(window).focus(function onWindowFocus(){
//  	game.log('unpaused  game.mode='+ game.mode + ' game.paused'+game.paused);
	
	game.paused = false;
	
	if  (game.mode=='play') game.level_reset();
	game.keydownStartTime = null;	
});

//////////////////////////////////////////////////////////////////////

*/

//mouse click / touch controls
// http://backtothecode.blogspot.com/2009/10/javascript-touch-and-gesture-events.html

document.addEventListener('click', function onClick(e) {
	CanvasClickHandler(e.clientX, e.clientY);
}, false);


document.addEventListener('touchstart', function onTouchStart(touch) {
	CanvasClickHandler(touch.pageX, touch.pageY);
}, false);



// Keyboard controls

addEventListener("keydown", function onKeydown(e) {
	keyboardEventHandler (e);
}, false);

/*
	
addEventListener("keyup", function onKeyUp (e) {
	// reset the key held down timer
	game.keydownStartTime = null;
// 	console.log('keyUp');
}, false);



// Touch swipe controls
$(function swipeInputListener() {			
	//Enable swiping...
	$("#da_canvas").swipe( {
		//Generic swipe handler for all directions
		swipe:function(event, direction, distance, duration, fingerCount) {
// 					alert("You swiped " + direction );		
		sound.play('heroTurn');			// THIS LINE MUST BE HERE or NO sounds will play on iOS in safari (Oddly, they will work in webclip and in desktop browser safari)  HOURS OF MY LIFE!!

		if (game.mode =='play') {
			hero.requestDirectionChange(direction, distance);
		}
		},
		//Default is 75px, set to 0 for demo so any swipe_distance triggers swipe
	  //threshold:0
	});
});

*/

////////////////////////////////////////////////////////////////////////////////



// var sound = new Howl({
//   urls: ['../shared/sounds/all.mp3', '../shared/sounds/all.ogg'],
//   sprite: {
//     blast: [0, 1500],
//     boing: [1500, 2000],
//     heroTurn: [3500, 400],
//     winner: [4000, 2500]
//   }
// });

// var opening_tune_sound = new Howl({
//   urls: ['../shared/sounds/tune/opening_tune_flute_1.mp3', '../shared/sounds/tune/opening_tune_flute_1.ogg'],
//   loop: true
// });

game.play_sound = function (sound_name){
	// 	alert(sound_name);
	// var x = sound.play(sound_name);
//  	console.log(sound_name);
};


window.scrollTo(0,1) ;// hide the address bar  // DOESN't Work in iOS7

////////////////////////////////////////////////////////////////////////////////

function createObjFromQueryString() { //http://stackoverflow.com/questions/647259/javascript-query-string
    var result = {}, keyValuePairs = location.search.slice(1).split('&');
    keyValuePairs.forEach(function splitKeyValuePair(keyValuePair) {
        keyValuePair = keyValuePair.split('=');
        result[keyValuePair[0]] = keyValuePair[1] || '';
    });
    return result;
}




game.start = function (){
	if (typeof game.contextRotationAngle == 'undefined') game.contextRotationAngle = 0;

	
	// game.amoeba = new amoeba(); // start point

	game.amoebaList = {}
	game.amoebaList.list = [];

	for (a=0; a<3; a++){
		game.amoebaList.list.push( new amoeba() );
	}
	game.amoebaList.listlength = game.amoebaList.list.length;

// console.log(game.amoebaList);
	game.mode = 'play';

}