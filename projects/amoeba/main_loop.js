//this page fragment contains the main game loop, which updates the game loop and renders the elements to the screen

var then = Date.now();

////////////////////////////////////////////
//https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame
// http://stackoverflow.com/questions/5605588/how-to-use-requestanimationframe
window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     
    );
}();




game.mainGameloop = function(){

	

	if (game.paused == false)  {
		//this code causes renders to happen only as fast as the processor can handle
		var now = Date.now();
		var delta = now - then;
		game.updateGameElements(delta / 1000);
		//game.log(delta);
		game.renderCanvasElements();

		then = now;
	}
	
	requestAnimFrame(game.mainGameloop);
}


// $(window).load(	game.start_game() );  // not sure this was necessary....
