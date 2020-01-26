// this is the main loop where we update game objects
game.updateGameElements = function (modifier) {

switch(game.mode) {

	// case 'initial_load':
 //        game.start_game();
 //        break;
	
	case 'play':


	for (a=0; a<game.amoebaList.listlength; a++){
		if (typeof game.amoebaList.list[a] === 'undefined') continue;  //items can be deleted mid render cycle
		game.amoebaList.list[a].update(a);
	}

        break;


	}
	 
	
};


