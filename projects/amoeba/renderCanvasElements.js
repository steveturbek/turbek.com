// http://stackoverflow.com/questions/5078913/html5-canvas-performance-calculating-loops-frames-per-second
var fps = 30, now, lastUpdate = (new Date)*1;
// The higher this value, the less the FPS will be affected by quick changes
// Setting this to 1 will show you the FPS of the last sampled frame only
var fpsFilter = 50;



// This is where we render elements to the screen, it is called once a frame
game.renderCanvasElements = function  () {

	//WIPE the screen
	// Store the current transformation matrix
	game.canvasContext.save();
	
	// Use the identity matrix while clearing the canvas
	game.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
	game.canvasContext.clearRect(0, 0, game.canvasContext.canvas.width, game.canvasContext.canvas.height);
	
	// Restore the transform
	game.canvasContext.restore();
	//END WIPE





	game.canvasContext.save();	 

	// game.canvasContext.translate(game.canvas.center.x, game.canvas.center.y);
	

	//rotate all the crystals - and maybe make bullet collision more complicated
	//game.canvasContext.rotate(game.rotateContext());



	// game.amoeba.draw();

	for (a=0; a<game.amoebaList.listlength; a++){
		if (typeof game.amoebaList.list[a] === 'undefined') continue;  //items can be deleted mid render cycle
		game.amoebaList.list[a].draw(a);
	}



	//console.log (x);
    game.canvasContext.restore();



	// render frame rate
	var thisFrameFPS = 1000 / ((now=new Date) - lastUpdate);
	if (now!=lastUpdate){
	fps += (thisFrameFPS - fps) / fpsFilter;
	lastUpdate = now;
	}

	nextLineYpos = game.draw_text (fps.toFixed(1)+' fps', 'xs', 'black',20 , 10);		



	// // game.canvasContext.moveTo(0, 0);
 //      var radius = 5;
 //      var startAngle = 0* Math.PI;
 //      var endAngle = 2 * Math.PI;
 //      var counterClockwise = false;

 //      game.canvasContext.beginPath();
 //      game.canvasContext.arc(game.canvas.center.x, game.canvas.center.y, radius, startAngle, endAngle, counterClockwise);
 //      game.canvasContext.lineWidth = 1;
 //      game.canvasContext.strokeStyle = 'black';
 //      game.canvasContext.stroke();

};




game.rotateContext = function (){

	game.contextRotationAngle += .2;
	if(game.contextRotationAngle > 360) game.contextRotationAngle=0

//http://www.mathwarehouse.com/trigonometry/radians/convert-degee-to-radians.php
	var radians = game.contextRotationAngle * -0.017453292519943295;//(Math.PI/180);

// console.log(game.contextRotationAngle, radians);
	return radians;
};

