/* The first line is short-hand or alternative of self-invoking anonymous function. 
 * It turns the function declaration into function expression. */

(function(){
	var gameView = {};
	var gameData = {};
	var gameController = {};

	$(document).ready();

	// Below makes the objects available to the console. Not necessary for production */
	window.game = {	
		gameView: gameView,
		gameData: gameData,
		gameController: gameController,
	};

})();