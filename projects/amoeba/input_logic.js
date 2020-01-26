//this fragment contains all the logic for click and tap events, keyboard events


//////////////////////////////////////////////////////////////////////
function CanvasClickHandler(X,Y) {

// alert(X +' '+ Y);


	if (game.mode == 'start_menu'){			

//  	game.log(X +' '+ Y);
//  	game.log(game.mode);
	
// 		if(Y < 100) {
// 		game.mode = 'creative-instructions';
// 		game.maze_set_up();
// 		return;
// 		}

// 		if( (Y < (canvas.height)) && (Y > (canvas.height - 100) ) ) { 
			game.level=1;
			game.which_maze_on_level=0;
			maze = mazeArray[game.level][game.which_maze_on_level];
			game.maze_set_up();
			game.mode = 'pre_level'; //game.mode = 'instructions';
			
			opening_tune_sound.fadeOut(0.0,1000);
			opening_tune_sound.isPlaying = false;
		// 	game.level=1;
// 			game.mode = 'level_map';
// 			return;
// 			} 
			// 
// 			
// 		if( (Y > (canvas.height - 200) )&& (Y< (canvas.height - 100) ) ) { 
// 			game.level=1;
// 			game.mode = 'level_map';
// 			return;
// 		}
		
		
	}


	if (game.mode == 'pre_level'){			
	
// 		if(Y > (canvas.height - 150)) { 
			game.level_set_up();	
			game.mode = 'play';
			return;
// 		}
		// 		 go to main menu
// 		
// 		// otherwise, erase cookie and return to home screen
// 		$.removeCookie('invisible_maze');
// 
// 		game.start_game('yes, ignore cookie');	
	}
	



	if (game.mode == 'welcome_back'){			

	


	//hidden cookie remove button
		if((Y < 10 ) &&(X<10)) { 
			$.removeCookie('invisible_maze');
			location.reload();
			return;
		}


		//start level button
		if(Y > (canvas.height - 100)) { 
			game.level_set_up();	
			game.mode = 'play';
			return;
		}


// show level map for the last completed level

	if (typeof game.last_completed_level != 'undefined') {
		game.level = game.last_completed_level;
		// console.log ('game.last_completed_level'+game.last_completed_level);
	}


	game.level_map_screen_setup();

	return;
	}
	


	if (game.mode == 'level_map'){				

// 		if(Y > (canvas.height - 100)) {
// 		game.mode = 'start_menu';
// 		
// 		return;
// 		} 
		
		if(Y < 100) {

			if (X > canvas.height/2){

				if (game.level < mazeArray.length-1) 	game.level++;
			} else {
				if (game.level > 1) game.level--;
				else {
					game.start_menu_setup();
					// game.start_game('yes, ignore cookie');	
				}
			}
		return;
		} 


		// start with x, y pixels, covert to col, row
		var clicked_on_column = Math.floor(X / grid.spacingH);
		var clicked_on_row = Math.floor(Y / grid.spacingV)-1;
		var which_level = (clicked_on_row * grid.cols) + clicked_on_column;


		game.which_maze_on_level= which_level;

// 		console.log ("X", X, "Y", Y, "clicked_on_column", clicked_on_column, "clicked_on_row", clicked_on_row, "which_level", which_level,  "game.level",game.level, "game.which_maze_on_level", game.which_maze_on_level );

// 		game.level++;

		if ( (clicked_on_column < 0) ||
			(clicked_on_row < 0) ||
			(which_level > mazeArray[game.level].length) 
		) return;
		
		
		maze = mazeArray[game.level][game.which_maze_on_level];
		game.maze_set_up();
		game.mode = 'pre_level'; //game.mode = 'instructions';
		return;
	}
	
	



		
	if (game.mode == 'post_level'){			

		game.mode = 'pre_level'; //game.mode = 'instructions';
		return;
	}
	
	if (game.mode == 'outOfLevels'){			
		game.start_game();
		return;
	}


	if (game.mode == 'showLevels') {

		maze = mazeArray[game.level];
		++game.level;
		hero.reset(maze.hero.startLoc);
		game.log('level ' + game.level + 'maze name ' + maze.name);


		game.maze_set_up();
		return;
	}


	if (game.mode == 'play') {
		if( (Y < 40) && (X > (canvas.width/2)-30) ) { 
			game.level_map_screen_setup();
			return;
		}
	}


}



///////
function keyboardEventHandler (e){
	// if(game.keydownStartTime == null){
	// game.keydownStartTime = Date.now();
	// console.log('keyDown');
	// }

//	if (game.mode =='play') {

	// console.log('keyCode='+e.keyCode);
		

	switch(e.keyCode) {
		case 32://space
	        // game.hero.fire();

	        if (game.mode=='play')game.mode='pause';
	        else game.mode='play';
	        break;
		case 37://left arrow
	        game.viewport.x = game.viewport.x -10 ; 
	        break;
	    case 38://up arrow
	        game.viewport.y = game.viewport.y -10 ;
	        break;
	    case 39://right arrow
	        game.viewport.x = game.viewport.x +10 ;
	        break;
	    case 40://down arrow
	        game.viewport.y = game.viewport.y +10 ;
	        break;
	    case 187://equals/plus
	        game.viewport.scale = game.viewport.scale *1.1; 
	        break;
	    case 189://minus
	        game.viewport.scale = game.viewport.scale *.9; 
	        break;
	    case 65://a
	        game.hero.requestDirectionChange(false);
	        break;
	    case 83://s
	        game.hero.requestDirectionChange(true);
	        break;
	}

	
//	}
// 	else if (game.mode =='creative') game.creative_mode_resize_maze(e.keyCode);
	//else if ((game.mode =='pre_level')||(game.mode =='post_level')||(game.mode =='start_menu')) CanvasClickHandler(100, 100);
}