/* The first line is short-hand or alternative of self-invoking anonymous function. 
 * It turns the function declaration into function expression. */

(function(){

	var gameView = {
		startButton: '',
		form: '',
		title: '',
		question: '',
		choicesList: '',
		submitButton: '',		
		detail: '',
		progressBar: '',
		progressStops: '',
		init: function(){
			this.startButton = $('#start');
			this.form = $('form');
			this.title = $('.step-title');
			this.question = $('.step-question');
			this.choicesList = $('.choices');
			this.submitButton = $('#submit');			
			this.detail = $('.step-detail');
			this.progressBar = $('.progress .bar');
			this.progressStops = $('.progress .fa');
			
			this.startButton.click(gameController.newGame);
			this.submitButton.click(function(e){
				e.preventDefault();
				gameController.getUserChoice();
			});
		},
		render: function(){
			this.title.text(gameData.title);
			this.question.text(gameData.question);
			this.choicesList.empty();
			for(var i=0; i < gameData.choices.length; i++) {
				$(this.choicesList).append('<label><input type="radio" name="choicesRadios" value="' + i + '">' + gameData.choices[i] + '</label>');
			}			
		},
	};

	var gameData = {
		counter: 0,
		title: 'Question 1',
		question: 'What was the city was originally called?',
		choices: ['New Germany', 'New Amsterdam', 'New London', 'New Jack City'],
		answer: 1,
		detail: 'New Amsterdam was a 17th-century Dutch settlement established at the southern tip of Manhattan Island. It was renamed New York on September 8, 1664, in honor of the Duke of York in whose name the English had captured it.',	
		totalCorrect: '',
		userChecked: '',
		resetVariables: function(){
			console.log('resetVariables');
			gameData.totalCorrect = 0;			
			//all kinds of goodies
			gameView.render();
		},
		checkAnswer: function(){
			console.log('checkAnswer');
		},
	};

	var gameController = {
		pageLoad: function(){
			gameView.init();
			gameController.newGame();
		},
		getUserChoice: function(){
			console.log('in getUserChoice');
			// submitChoice, showDetail, increase counter, showQuestion, showChoices
		},
		newGame: function(){
			console.log('in newGame');
			gameView.render();
		},
	};

	$(document).ready(gameController.pageLoad);

	// Below makes the objects available to the console. Not necessary for production */
	window.game = {	
		gameView: gameView,
		gameData: gameData,
		gameController: gameController,
	};
})();