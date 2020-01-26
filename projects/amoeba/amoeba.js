function amoeba (){

  // this.centerPoint.x = game.canvas.center.x;
  // this.centerPoint.y = game.canvas.center.y;
  this.id = getRandomInRange(0,100000000)
  this.centerPoint = {};
  this.centerPoint.x = getRandomInRange(0,game.canvas.width);
  this.centerPoint.y = getRandomInRange(0,game.canvas.height);

  this.speedX = getRandomInRange(-4,4);
  this.speedY = getRandomInRange(-4,4);

  //scale item to window size
  this.pointsRadiusFromCenterScale = 100;
  (game.canvas.width > game.canvas.height)? this.pointsRadiusFromCenterScale = game.canvas.width/10 : this.pointsRadiusFromCenterScale=game.canvas.height /4.2;
  


  this.growthCycleSizeIncrement =2/this.pointsRadiusFromCenterScale;  //to animate growth and shrink cycle, how much they expand per update cycle.  


  this.waitForImagesToLoad = true;
  this.backGroundImg = new Image();
  this.backGroundImg.src = 'img/watercolor.jpg';
  this.backGroundImg.onload = function() {
    this.waitForImagesToLoad = false;
  }

  this.build_a_blob();
  this.build_a_blob_part2();  //this section is re-used
}




//------------------------------------------------------------------------------------------------------------
amoeba.prototype.build_a_blob = function (){

  // create points in clockwise order starting roughly at 5:00
  // for each, Define distance from center, angle from center, angle of control point 1, size of control point 1, size of control point 2
  // add randomness to each defined as a ratio of overall scale. 

  this.numberOfPoints = 4;//Math.floor(getRandomInRange(4,  10));
  
  var insidePointPercentageSmaller = .5;// how much should the inside points be smaller than outside (makes pseudopods)


  this.bezierLineSegments= [];

  for ( var a=0;a< this.numberOfPoints; a++){
    bezierLineSegment ={};
 

    // if more than 5, can do inside and outside nodes. Inside nodes have a different radius range
    if(this.numberOfPoints <5) startPointRadius = this.pointsRadiusFromCenterScale;
    else {
      if( a % 2 ==0) startPointRadius = this.pointsRadiusFromCenterScale;
      else startPointRadius = this.pointsRadiusFromCenterScale * insidePointPercentageSmaller;
    }

    //angle of the start point from the center point
    angleOffset = Math.PI * 13 / 6;  //rotate start position 30 degrees
    var angleInRadians = ((a+1) * (2 * Math.PI / this.numberOfPoints) ) -angleOffset + getRandomInRange(-Math.PI/6,  Math.PI/6);    

    bezierLineSegment.startPoint=return_new_point_from_angle_and_distance (this.centerPoint.x, this.centerPoint.y, angleInRadians, startPointRadius);
    bezierLineSegment.startPoint.angleInRadians = angleInRadians;
    bezierLineSegment.startPoint.startPointRadius = startPointRadius;


    ///////////
    bezierLineSegment.controlPoint1={};
    bezierLineSegment.controlPoint1.distance_original = getRandomInRange(.2* this.pointsRadiusFromCenterScale, .7* this.pointsRadiusFromCenterScale);
    bezierLineSegment.controlPoint1.distance = bezierLineSegment.controlPoint1.distance_original;
    bezierLineSegment.controlPoint1.growthCycleSize = getRandomInRange(0, 2);

    //ANGLE of control point 1 is perpendicular to radius to start
    if (angleInRadians > (Math.PI/2)) bezierLineSegment.controlPoint1.angle= (angleInRadians) + Math.PI / 2 + getRandomInRange(-Math.PI/6,  Math.PI/6);  //rotate 90 degrees
    else bezierLineSegment.controlPoint1.angle= (angleInRadians) + Math.PI / 2;  //rotate 90 degrees
    //x and y are generated later
    ///////////
    bezierLineSegment.controlPoint2={};
    bezierLineSegment.controlPoint2.distance_original = getRandomInRange(.2* this.pointsRadiusFromCenterScale, .7* this.pointsRadiusFromCenterScale);
    bezierLineSegment.controlPoint2.distance = bezierLineSegment.controlPoint2.distance_original;
    bezierLineSegment.controlPoint2.growthCycleSize = getRandomInRange(0, 2);

    ///////////
    this.bezierLineSegments.push(bezierLineSegment);
  }

  // console.log (this);


};

amoeba.prototype.build_a_blob_part2 = function (){

  //so we don't do math in a for loop header
    this.bezierLineSegmentsLength = this.bezierLineSegments.length;
    this.bezierLineSegmentsLengthMinusOne = this.bezierLineSegmentsLength -1

  //calculate angles for controlPoint2.angle from reverse of controlPoint1.angle of next item
   for (var a=0; a<this.bezierLineSegmentsLengthMinusOne; a++){
     if (this.bezierLineSegments[a+1].controlPoint1.angle >= Math.PI) this.bezierLineSegments[a].controlPoint2.angle = this.bezierLineSegments[a+1].controlPoint1.angle -(Math.PI);
    else this.bezierLineSegments[a].controlPoint2.angle = this.bezierLineSegments[a+1].controlPoint1.angle +(Math.PI);
   }

  // the last segment controlPoint2 takes its angle from first segment controlPoint1 angle
     if (this.bezierLineSegments[0].controlPoint1.angle >= Math.PI) this.bezierLineSegments[this.bezierLineSegmentsLengthMinusOne].controlPoint2.angle = this.bezierLineSegments[0].controlPoint1.angle -Math.PI;
    else this.bezierLineSegments[this.bezierLineSegmentsLengthMinusOne].controlPoint2.angle = this.bezierLineSegments[0].controlPoint1.angle +(Math.PI);

};

//------------------------------------------------------------------------------------------------------------
amoeba.prototype.update = function (){

  //move that blob
  if ((this.centerPoint.x > game.canvas.width) || (this.centerPoint.x < 0)) this.speedX = this.speedX *-1;
  if ((this.centerPoint.y > game.canvas.height) || (this.centerPoint.y < 0)) this.speedY = this.speedY *-1;

  this.centerPoint.x += this.speedX;
  this.centerPoint.y += this.speedY;

  for (var a=0; a<this.bezierLineSegmentsLength; a++){

    //control point 2
    //animate growth and shrink cycle.  
    if (this.bezierLineSegments[a].controlPoint1.growthCycleSize >2) this.bezierLineSegments[a].controlPoint1.growthCycleSize =0;
    else this.bezierLineSegments[a].controlPoint1.growthCycleSize += this.growthCycleSizeIncrement;

    //convert it to a number between 0 and 1
    var controlPoint1_growthCycleSizeRatio = Math.abs(this.bezierLineSegments[a].controlPoint1.growthCycleSize -1);

    //growing each item proportionally to original length
     this.bezierLineSegments[a].controlPoint1.distance = this.bezierLineSegments[a].controlPoint1.distance_original + (this.bezierLineSegments[a].controlPoint1.distance_original * controlPoint1_growthCycleSizeRatio);


     //control point 2
    //animate growth and shrink cycle.  
    if (this.bezierLineSegments[a].controlPoint2.growthCycleSize >2) this.bezierLineSegments[a].controlPoint2.growthCycleSize =0;
    else this.bezierLineSegments[a].controlPoint2.growthCycleSize += this.growthCycleSizeIncrement;

    //convert it to a number between 0 and 1
    var controlPoint2_growthCycleSizeRatio = Math.abs(this.bezierLineSegments[a].controlPoint2.growthCycleSize -1);

    //growing each item proportionally to original length
     this.bezierLineSegments[a].controlPoint2.distance = this.bezierLineSegments[a].controlPoint2.distance_original + (this.bezierLineSegments[a].controlPoint2.distance_original * controlPoint2_growthCycleSizeRatio);
  }

  this.generate_NOT_relative_x_y_points();
  // this.generate_relative_x_y_points();
};

//------------------------------------------------------------------------------------------------------------
amoeba.prototype.generate_NOT_relative_x_y_points = function (){
  
  //generate start points
  for (var a=0; a<this.bezierLineSegmentsLength; a++){
    var temp = return_new_point_from_angle_and_distance (this.centerPoint.x, this.centerPoint.y, 
      this.bezierLineSegments[a].startPoint.angleInRadians, this.bezierLineSegments[a].startPoint.startPointRadius);

    this.bezierLineSegments[a].startPoint.x = temp.x;
    this.bezierLineSegments[a].startPoint.y = temp.y;
  }

  //generate end points
  for (var a=0; a<this.bezierLineSegmentsLengthMinusOne; a++){
    this.bezierLineSegments[a].endPoint = {};
    this.bezierLineSegments[a].endPoint.x = this.bezierLineSegments[a+1].startPoint.x;
    this.bezierLineSegments[a].endPoint.y = this.bezierLineSegments[a+1].startPoint.y;
  }

  //the last point takes its end point from the first point
  this.bezierLineSegments[this.bezierLineSegmentsLengthMinusOne].endPoint = {};
  this.bezierLineSegments[this.bezierLineSegmentsLengthMinusOne].endPoint.x = this.bezierLineSegments[0].startPoint.x;
  this.bezierLineSegments[this.bezierLineSegmentsLengthMinusOne].endPoint.y = this.bezierLineSegments[0].startPoint.y;
  


  //calculate controlPoint1 x and y
  for (var a=0; a<this.bezierLineSegmentsLength; a++){
    this.bezierLineSegments[a].controlPoint1.x = return_x_from_angle_and_distance (this.bezierLineSegments[a].startPoint.x, this.bezierLineSegments[a].startPoint.y, this.bezierLineSegments[a].controlPoint1.angle, this.bezierLineSegments[a].controlPoint1.distance);

    this.bezierLineSegments[a].controlPoint1.y = return_y_from_angle_and_distance (this.bezierLineSegments[a].startPoint.x, this.bezierLineSegments[a].startPoint.y, this.bezierLineSegments[a].controlPoint1.angle, this.bezierLineSegments[a].controlPoint1.distance);
  }
 
   //calculate controlPoint2 x and y
   for (var a=0; a<this.bezierLineSegmentsLength; a++){
      this.bezierLineSegments[a].controlPoint2.x = return_x_from_angle_and_distance (
        this.bezierLineSegments[a].endPoint.x, 
        this.bezierLineSegments[a].endPoint.y, 
        this.bezierLineSegments[a].controlPoint2.angle, 
        this.bezierLineSegments[a].controlPoint2.distance);
      
      this.bezierLineSegments[a].controlPoint2.y = return_y_from_angle_and_distance (
        this.bezierLineSegments[a].endPoint.x, 
        this.bezierLineSegments[a].endPoint.y, 
        this.bezierLineSegments[a].controlPoint2.angle, 
        this.bezierLineSegments[a].controlPoint2.distance);
  }
};

//------------------------------------------------------------------------------------------------------------
// amoeba.prototype.generate_relative_x_y_points = function (){

//   //generate end points
//   for (var a=0; a<this.bezierLineSegmentsLengthMinusOne; a++){
//     this.bezierLineSegments[a].endPoint = {};
//     this.bezierLineSegments[a].endPoint.x = this.bezierLineSegments[a+1].startPoint.x;
//     this.bezierLineSegments[a].endPoint.y = this.bezierLineSegments[a+1].startPoint.y;
//   }

//   //the last point takes its end point from the first point
//   this.bezierLineSegments[this.bezierLineSegmentsLengthMinusOne].endPoint = {};
//   this.bezierLineSegments[this.bezierLineSegmentsLengthMinusOne].endPoint.x = this.bezierLineSegments[0].startPoint.x;
//   this.bezierLineSegments[this.bezierLineSegmentsLengthMinusOne].endPoint.y = this.bezierLineSegments[0].startPoint.y;
  


//   //calculate controlPoint1 x and y
//   for (var a=0; a<this.bezierLineSegmentsLength; a++){
//     this.bezierLineSegments[a].controlPoint1.x = return_x_from_angle_and_distance (this.bezierLineSegments[a].startPoint.x, this.bezierLineSegments[a].startPoint.y, this.bezierLineSegments[a].controlPoint1.angle, this.bezierLineSegments[a].controlPoint1.distance);

//     this.bezierLineSegments[a].controlPoint1.y = return_y_from_angle_and_distance (this.bezierLineSegments[a].startPoint.x, this.bezierLineSegments[a].startPoint.y, this.bezierLineSegments[a].controlPoint1.angle, this.bezierLineSegments[a].controlPoint1.distance);
//   }
 
//    //calculate controlPoint2 x and y
//    for (var a=0; a<this.bezierLineSegmentsLength; a++){
//       this.bezierLineSegments[a].controlPoint2.x = return_x_from_angle_and_distance (
//         this.bezierLineSegments[a].endPoint.x, 
//         this.bezierLineSegments[a].endPoint.y, 
//         this.bezierLineSegments[a].controlPoint2.angle, 
//         this.bezierLineSegments[a].controlPoint2.distance);
      
//       this.bezierLineSegments[a].controlPoint2.y = return_y_from_angle_and_distance (
//         this.bezierLineSegments[a].endPoint.x, 
//         this.bezierLineSegments[a].endPoint.y, 
//         this.bezierLineSegments[a].controlPoint2.angle, 
//         this.bezierLineSegments[a].controlPoint2.distance);
//   }
// };

//------------------------------------------------------------------------------------------------------------
amoeba.prototype.draw = function (positionInAmoebaList){

  if (this.waitForImagesToLoad === false) return false;


  // draw the bezier curves of the amoeba
  game.canvasContext.save();
  game.canvasContext.beginPath();
  game.canvasContext.moveTo(this.bezierLineSegments[0].startPoint.x, this.bezierLineSegments[0].startPoint.y);
 
  for (var a=0; a<this.bezierLineSegmentsLength; a++){
      game.canvasContext.bezierCurveTo(
        this.bezierLineSegments[a].controlPoint1.x, 
        this.bezierLineSegments[a].controlPoint1.y, 
        this.bezierLineSegments[a].controlPoint2.x, 
        this.bezierLineSegments[a].controlPoint2.y, 
        this.bezierLineSegments[a].endPoint.x, 
        this.bezierLineSegments[a].endPoint.y); 
    }

  game.canvasContext.closePath()  ;
  game.canvasContext.lineWidth = 20;
  game.canvasContext.strokeStyle = "rgba(0, 100, 255, 0.5)";
  // game.canvasContext.lineCap="round";
  game.canvasContext.stroke();
  // game.canvasContext.fillStyle = "rgba(0, 255, 0, 0.5)";
  // game.canvasContext.fill();

    //using shape as a clipping mask (overcovers fill color, not stroke)
    game.canvasContext.clip();  

    game.canvasContext.globalAlpha = 0.5;  //make item semi-transparent

    // draw the image to be clipped
    // game.canvasContext.drawImage(this.backGroundImg, 0, 0);  //posit ion here is absolute to the page  
    
    //if you want the image to 'move' with the shape set to this.centerPoint.x, this.centerPoint.y
    //BUT the image needs to be to the left and top of start point
    //can use  control points
    game.canvasContext.drawImage(this.backGroundImg, 
                                  this.centerPoint.x - this.backGroundImg.width/2, 
                                  this.centerPoint.y - this.backGroundImg.height/2); 

    game.canvasContext.globalAlpha = 1;
    game.canvasContext.restore();

    //draw number of the amoeba
    // game.draw_text (positionInAmoebaList, 's', 'black',this.centerPoint.x , this.centerPoint.y);    

    
    var overlapper = this.checkForOverlap(positionInAmoebaList+1);//increment so you don't check againt your own position in game.amoebaList
    if (overlapper !== false) this.mergeAmoeba(overlapper.position, overlapper.segment);
 
   // draw the radius around the center point

var radiusStrokeColor ="rgba(0, 100, 255, 0.5)";  //set default radius stroke color
  game.canvasContext.save();
  game.canvasContext.beginPath();
  game.canvasContext.arc(this.centerPoint.x,this.centerPoint.y,this.pointsRadiusFromCenterScale , 0, 2* Math.PI);
  game.canvasContext.closePath();
  game.canvasContext.lineWidth = 5;
  game.canvasContext.strokeStyle = radiusStrokeColor;
  game.canvasContext.stroke();
  game.canvasContext.restore();

 this.draw_all_points(false);  //draw the startPoints and controlPoints

};

//------------------------------------------------------------------------------------------------------------/
amoeba.prototype.mergeAmoeba = function(amoebaListPosition, bezierSegment) { 
       // console.log(amoebaListPosition, bezierSegment);

       

        // find the closest startPoint in THIS to the startPoint that has overlapped ME
        // start with the first position
        var distance =  game.returnDistanceBetweenPoints( this.bezierLineSegments[0].startPoint, game.amoebaList.list[amoebaListPosition].bezierLineSegments[bezierSegment].startPoint);
        var closest_point_position = 0 
        //compare rest of points
        for(var c=1; c<this.bezierLineSegmentsLength; c++){    

          if (typeof game.amoebaList.list[amoebaListPosition] === 'undefined') continue;  //items can be deleted mid render cycle        

            var new_distance = game.returnDistanceBetweenPoints( this.bezierLineSegments[c].startPoint, game.amoebaList.list[amoebaListPosition].bezierLineSegments[bezierSegment].startPoint);
            if (new_distance < distance) {
              distance = new_distance;
              closest_point_position = c;
            }
        }

          //this obj "eats" the other amoeba object - Merge lines
          //it takes the points and adds segments after this point in the array
          
          // add bezier line segments after closest_point_position


          // in the amoeba to be eaten, move the startPoints before the segment point to the end of the array, to make eating simpler

          var firstSegements = game.amoebaList.list[amoebaListPosition].bezierLineSegments.splice(0,bezierSegment+1);
          game.amoebaList.list[amoebaListPosition].bezierLineSegments = game.amoebaList.list[amoebaListPosition].bezierLineSegments.concat(firstSegements);

          // recalculate their points to the new center point
          for (var a=0; a< game.amoebaList.list[amoebaListPosition].bezierLineSegments.length; a++){
          
            game.amoebaList.list[amoebaListPosition].bezierLineSegments[a].startPoint.angleInRadians = game.returnAngleInRadiansBetweenPoints (this.centerPoint, game.amoebaList.list[amoebaListPosition].bezierLineSegments[a].startPoint);
            game.amoebaList.list[amoebaListPosition].bezierLineSegments[a].startPoint.startPointRadius = game.returnDistanceBetweenPoints(this.centerPoint, game.amoebaList.list[amoebaListPosition].bezierLineSegments[a].startPoint);
            var newXY = return_new_point_from_angle_and_distance (this.centerPoint.x, this.centerPoint.y, game.amoebaList.list[amoebaListPosition].bezierLineSegments[a].startPoint.angleInRadians, game.amoebaList.list[amoebaListPosition].bezierLineSegments[a].startPoint.startPointRadius);
            
            game.amoebaList.list[amoebaListPosition].bezierLineSegments[a].startPoint.x = newXY.x;
            game.amoebaList.list[amoebaListPosition].bezierLineSegments[a].startPoint.y = newXY.y;
          }

          //now add them to THIS object's bezierLineSegments
          // http://stackoverflow.com/questions/14715459/is-there-a-way-to-use-array-splice-in-javascript-with-the-third-parameter-as-an
          Array.prototype.splice.apply(this.bezierLineSegments, [closest_point_position,0].concat(game.amoebaList.list[amoebaListPosition].bezierLineSegments));

 
          this.build_a_blob_part2();  //calculate the control points

          // console.log(this.bezierLineSegments.length);

          //would be nice to animate transition into another shape?

          // delete the other object from amoebaList
         game.amoebaList.list.splice(amoebaListPosition,1);
         game.amoebaList.listlength -=1;
         // console.log(game.amoebaList);
    

        // re-center centerPoint 

        var max_x = this.bezierLineSegments[0].startPoint.x;
        var min_x = this.bezierLineSegments[0].startPoint.x;
          
        var max_y = this.bezierLineSegments[0].startPoint.y;
        var min_y = this.bezierLineSegments[0].startPoint.y;

          for (var a = 1; a <this.bezierLineSegmentsLength; a++){
            if (max_x < this.bezierLineSegments[a].startPoint.x) max_x =this.bezierLineSegments[a].startPoint.x;
            if (min_x > this.bezierLineSegments[a].startPoint.x) min_x =this.bezierLineSegments[a].startPoint.x;

            if (max_y < this.bezierLineSegments[a].startPoint.y) max_y =this.bezierLineSegments[a].startPoint.y;
            if (min_y > this.bezierLineSegments[a].startPoint.y) min_y =this.bezierLineSegments[a].startPoint.y;
            // console.log(a, this.bezierLineSegments[a].startPoint.x, this.centerPoint.x,(max_x + min_x)/2);
        }
        
        this.centerPoint.x = (max_x + min_x)/2;
        this.centerPoint.y = (max_y + min_y)/2;
        // console.log(this.centerPoint.x); 
        
        // update all startPoints radius to new location

        var max_startPointRadius = 0;
        for (var a = 1; a <this.bezierLineSegmentsLength; a++){
          this.bezierLineSegments[a].startPoint.angleInRadians = game.returnAngleInRadiansBetweenPoints (this.centerPoint, this.bezierLineSegments[a].startPoint);
          this.bezierLineSegments[a].startPoint.startPointRadius = game.returnDistanceBetweenPoints(this.centerPoint, this.bezierLineSegments[a].startPoint);          
          var newXY = return_new_point_from_angle_and_distance (this.centerPoint.x, this.centerPoint.y, this.bezierLineSegments[a].startPoint.angleInRadians, this.bezierLineSegments[a].startPoint.startPointRadius);

          this.bezierLineSegments[a].startPoint.x = newXY.x;
          this.bezierLineSegments[a].y = newXY.y;

          if (max_startPointRadius < this.bezierLineSegments[a].startPoint.startPointRadius) max_startPointRadius = this.bezierLineSegments[a].startPoint.startPointRadius;
        }

        this.pointsRadiusFromCenterScale = max_startPointRadius;


        //       var distance =  game.returnDistanceBetweenPoints( this.bezierLineSegments[0].startPoint, this.centerPoint);
        // var closest_point_position = 0 
        // //compare rest of points

          
        //   var newCenter = {x:0,y:0};
        //   for (var a = 0; a <this.bezierLineSegmentsLength; a++){
            
        //     var new_distance = game.returnDistanceBetweenPoints( this.bezierLineSegments[c].startPoint, game.amoebaList.list[amoebaListPosition].bezierLineSegments[bezierSegment].startPoint);
        //     if (new_distance < distance) {
        //       distance = new_distance;
        //       closest_point_position = a;
        //     }
        // }
};


//------------------------------------------------------------------------------------------------------------/
amoeba.prototype.checkForOverlap = function(positionInAmoebaList) { 

  //touching any other blob?
  for (var a=positionInAmoebaList; a<game.amoebaList.listlength; a++){
      
      if (typeof game.amoebaList.list[a] === 'undefined') continue;  //items can be deleted mid render cycle

      //go to next item if centers are further than sum of radiuses
      if (game.returnDistanceBetweenPoints(this.centerPoint,game.amoebaList.list[a].centerPoint) > (this.pointsRadiusFromCenterScale + game.amoebaList.list[a].pointsRadiusFromCenterScale)) continue;
        
      //would be nice to get angle of distance to limit points needed to check


      for (var b=0; b<game.amoebaList.list[a].bezierLineSegments.length; b++){
        if (game.canvasContext.isPointInPath(
          game.amoebaList.list[a].bezierLineSegments[b].startPoint.x, 
          game.amoebaList.list[a].bezierLineSegments[b].startPoint.y) === true) {
       
          // a startPoint from the other object is inside this path.  
          return {'position':a,'segment':b};
        }
      }
    
  }

  return false;  //no match

};
//------------------------------------------------------------------------------------------------------------/
// amoeba.prototype.draw_bezier = function(centerPoint.x, centerPoint.y, controlpoint1X, controlpoint1Y, controlpoint2X, controlpoint2Y, endX, endY, segmentNum) {
// // centerPoint.x =0;
// // centerPoint.y =0;

//    // game.canvasContext.bezierCurveTo(
//    //  centerPoint.x + controlpoint1X, 
//    //  centerPoint.y + controlpoint1Y, 
//    //  centerPoint.x + controlpoint2X, 
//    //  centerPoint.y + controlpoint2Y, 
//    //  centerPoint.x + endX, 
//    //  centerPoint.y + endY);    


//     // game.canvasContext.bezierCurveTo(
//     // controlpoint1X - centerPoint.x, 
//     // controlpoint1Y - centerPoint.y, 
//     // controlpoint2X - centerPoint.x, 
//     // controlpoint2Y - centerPoint.y, 
//     // endX - centerPoint.x, 
//     // endY - centerPoint.y);

//     game.canvasContext.bezierCurveTo(
//     controlpoint1X, 
//     controlpoint1Y, 
//     controlpoint2X, 
//     controlpoint2Y, 
//     endX, 
//     endY);  

//     // console.log('curve',startX, startY,'controlpoint2 x',controlpoint2X, 'y',controlpoint2Y, 'x',endX, 'y',endY);
//      // return {'controlpoint2':{'x':controlpoint2X, 'y':controlpoint2Y}, 'x':startX +endX, 'y':startY +endY};
// };


//------------------------------------------------------------------------------------------------------------
amoeba.prototype.draw_all_points = function (justStartPoints){


  var colors = ['red','orange','green','blue'];

  this.draw_point(this.centerPoint.x, this.centerPoint.y, colors[0], '+' );

  for (var a=0; a < this.bezierLineSegmentsLength; a++) {

    // console.log(this.bezierLineSegments[a].controlpoint1.angle, this.bezierLineSegments[a].controlpoint2.angle);

      this.draw_point(this.bezierLineSegments[a].startPoint.x, this.bezierLineSegments[a].startPoint.y,colors[a], a+'s' );
      
      if(justStartPoints === true) continue;
        this.draw_point(this.bezierLineSegments[a].controlPoint1.x, this.bezierLineSegments[a].controlPoint1.y,colors[a], a+'_1');
        this.draw_point(this.bezierLineSegments[a].controlPoint2.x, this.bezierLineSegments[a].controlPoint2.y,colors[a], a+'_2' );
        // this.draw_point(this.bezierLineSegments[a].endPoint.x, this.bezierLineSegments[a].endPoint.y,colors[a], 'e' );
      
  }
};

//------------------------------------------------------------------------------------------------------------

amoeba.prototype.draw_point = function (x,y, color, segmentNum){

    // x = x + this.centerPoint.x;
    // y = y + this.centerPoint.y;

    game.canvasContext.save();
    game.canvasContext.beginPath();
    game.canvasContext.arc(x,y,5 , 0, 2* Math.PI);

    game.canvasContext.closePath();
    game.canvasContext.fillStyle = color;
    game.canvasContext.fill();

    if (typeof segmentNum !== 'undefined'){
        game.canvasContext.font="20px Georgia";
        game.canvasContext.fillText(segmentNum,x+5,y);
    }
    game.canvasContext.restore();
};


//------------------------------------------------------------------------------------------------------------


