///////////////////////////////////////////
game.draw_text = function (string, size, color, x, y, isCentered){  // text is centered by default
	var sizes = {'xxl':70, 'xl':50, 'l':35, 'm':25, 's':20};  //font sizes
	game.canvasContext.save();
	game.canvasContext.font = sizes[size] +"px helvetica";
	game.canvasContext.textAlign = "center";
	game.canvasContext.textBaseline = "center";
	game.canvasContext.fillStyle = "rgb("+ 0,0,0 +")";

	if (typeof isCentered == 'undefined')	game.canvasContext.fillText(string, x, y);//(game.canvas.width/2) + xOffCenter
	else 	game.canvasContext.fillText(string, (game.canvas.width/2) + xOffCenter, y);

	game.canvasContext.restore();
	return y+ sizes[size];  // tells where to put the next line Y position
};

///////////////////////////////////////////

game.returnDistanceBetweenPoints = function(point1,point2){
//assumes points are arrays of x and y

  xs = point2.x - point1.x;
  ys = point2.y - point1.y;
 
  return Math.sqrt( (xs * xs) + (ys * ys) );

};

///////////////////////////////////////////

game.returnAngleInRadiansBetweenPoints = function(point1,point2){
//assumes points are objects with x and y properties
// http://stackoverflow.com/questions/3309617/calculating-degrees-between-2-points-with-inverse-y-axis

  xs = point2.x - point1.x;
  ys = point2.y - point1.y;
 

  return Math.atan2(ys, xs);
};

///////////////////////////////////////////

game.returnRotatedPoint = function(point, center, angle){
	var angle = (angle ) * (Math.PI/180); // Convert to radians
	var rotatedX = Math.cos(angle) * (point.x - center.x) - Math.sin(angle) * (point.y-center.y) + center.x;
	var rotatedY = Math.sin(angle) * (point.x - center.x) + Math.cos(angle) * (point.y - center.y) + center.y;

	return [rotatedX,rotatedY];

};



///////////////////////////////////////////

game.convertTruePositionToRenderedPosition = function(absoluteX, absoluteY){
//this takes the "true" position
//and converts it to where is is based on the scaling and viewport location

//console.log([(absoluteX - game.viewport.x) * game.viewport.scale , (absoluteY - game.viewport.y) * game.viewport.scale]);
	return [(absoluteX - game.viewport.x) * game.viewport.scale , (absoluteY - game.viewport.y) * game.viewport.scale];

};



//------------------------------------------------------------------------------------------------------------
function return_relative_generated_control_point (startPointX, startPointY, controlpoint2X, controlpoint2Y,controlPoint1DistanceFromStart){

    var generatedControlPoint1 = return_colinear_point (startPointX, startPointY, controlpoint2X, controlpoint2Y,controlPoint1DistanceFromStart);

    //make generatedControlPoint1 relative to startPoint
    generatedControlPoint1.x = generatedControlPoint1.x -startPointX;
    generatedControlPoint1.y = generatedControlPoint1.y -startPointY;

    return generatedControlPoint1;
}

//------------------------------------------------------------------------------------------------------------
function return_new_point_from_angle_and_distance (startPointX, startPointY, angleInRadians, newPointDistance){
  return {x:return_x_from_angle_and_distance (startPointX, startPointY, angleInRadians, newPointDistance), 
  y:return_y_from_angle_and_distance (startPointX, startPointY, angleInRadians, newPointDistance)};
}
//------------------------------------------------------------------------------------------------------------
function return_x_from_angle_and_distance (startPointX, startPointY, angleInRadians, newPointDistance){    
  // console.log(startPointX, startPointY, angleInRadians, newPointDistance);
  // console.log(Math.cos(angleInRadians) * newPointDistance + startPointX);
  return  Math.cos(angleInRadians) * newPointDistance + startPointX;
 }

//------------------------------------------------------------------------------------------------------------
function return_y_from_angle_and_distance (startPointX, startPointY, angleInRadians, newPointDistance){
  // console.log(startPointX, startPointY, angleInRadians, newPointDistance);
  // console.log(  Math.sin(angleInRadians) * newPointDistance + startPointY);
  return  Math.sin(angleInRadians) * newPointDistance + startPointY;
}

//------------------------------------------------------------------------------------------------------------
function return_colinear_point (point1X, point1Y,point2X, point2Y, newPointDistance){

  // Given 2 points, (x1,y1) and (x2,y2), you can take the difference between the two, so you end up with (x2-x1,y2-y1)
  var differenceX = point1X -point2X;
  var differenceY = point1Y -point2Y;

  // Take the norm of this (i.e. take the distance between the original 2 points), and divide (x2-x1,y2-y1) by that value.
  var distance = Math.sqrt( Math.pow(differenceX, 2) + Math.pow(differenceY,2) );

  var vectorX = differenceX/ distance;
  var vectorY = differenceY/ distance;


  //You now have a vector with the same slope as the line between the first 2 points, but it has magnitude one, since you normalized it (by dividing by its magnitude). 
  var NewVectorX = vectorX * newPointDistance;
  var NewVectorY = vectorY* newPointDistance;

  // Then add/subtract that vector to one of the original points to get your final answer.
  var newPointX = point1X - NewVectorX;
  var newPointY = point1Y - NewVectorY;

  return{x:newPointX, y:newPointY};
}



//------------------------------------------------------------------------------------------------------------
function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}
