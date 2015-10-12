/* The first line is short-hand or alternative of self-invoking anonymous function. 
 * It turns the function declaration into function expression. */

(function(){
	var questions = [
		{
			title: 'Question 1',
			question: 'What was the city was originally called?',
			choices: ['New Germany', 'New Amsterdam', 'New London', 'New Jack City'],
			answer: 1,
			detail: 'New Amsterdam was a 17th-century Dutch settlement established at the southern tip of Manhattan Island. It was renamed New York on September 8, 1664, in honor of the Duke of York in whose name the English had captured it.',	
		},
		{
			title: 'Question 2',
			question: 'Which of these is NOT a borough?',
			choices: ['Brooklyn', 'Staten Island', 'Bronx', 'Yonkers'],
			answer: 3,
			detail: 'New York City is divided into five different boroughs, or neighborhoods. They are Manhattan, the Bronx, Queens, Brooklyn and Staten Island.',	
		},
		{
			title: 'Question 3',
			question: 'Where is Brooklyn\'\s original Chinatown?',
			choices: ['Williamsburg', 'Flatbush', 'Sunset Park', 'Sheepshead Bay'],
			answer: 2,
			detail: 'The first Brooklyn Chinatown was originally established in the Sunset Park area of the New York City borough of Brooklyn. The borough has since evolved three larger Chinatowns, between Sunset Park, Bensonhurst, and Avenue U in Sheepshead Bay.',
		},
		{
			title: 'Question 4',
			question: 'Broadway originally shared a name with which famous store?',
			choices: ['Bloomingdale\'\s', 'Macy\'\s', 'Kmart', 'Walmart'],
			answer: 0,
			detail: 'In the 18th century, Broadway ended at the town commons north of Wall Street, where traffic continued up the West Side via Bloomingdale Road. On February 14, 1899, the name "Broadway" was extended to the entire Broadway/Bloomingdale/Boulevard road.',	
		},
		{
			title: 'Question 5',
			question: 'What is another popular name for Times Square?',
			choices: ['The Crossroads of the City','The Center of the Planet','The Great White Way', 'The Giant Lightbulb'],
			answer: 2,
			detail: 'This nickname came about because Broadway was one of the first streets in the United States to be lit with electric lights.',	
		},		
	];

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
			this.detail = $('.step-detail h1');
			this.progressBar = $('.progress .bar');
			this.progressStops = $('.progress .fa');
			
			this.startButton.click(gameController.newGame);
			this.submitButton.click(function(e){
				e.preventDefault();
				gameController.submitUserChoice();				
			});
		},
		render: function(ques){
			this.title.text(ques.title);
			this.question.text(ques.question);
			this.choicesList.empty();
			for(var i=0; i < ques.choices.length; i++) {
				$(this.choicesList).append('<label><input type="radio" name="choicesRadios" value="' + i + '">' + ques.choices[i] + '</label>');
			}			
		},
		showDetail: function(detail){
			$('.step-detail').fadeIn('slow').children('p').text(detail);
		},
		drawProgress: function(width){
			this.width = width * 20;
			this.progressBar.animate({'width':this.width+'%'}, 'slow');
			this.progressStops.not('.fa-circle').first().removeClass('fa-circle-o').addClass('fa-circle');
		},		
	};

	var gameData = {
		counter: '',
		totalCorrect: '',
		userChecked: '',
		questions: questions,
		resetVariables: function(){
			this.counter = 0;
			this.totalCorrect = 0;
			gameView.progressStops.addClass('fa-circle-o').removeClass('fa-circle');
			gameView.progressBar.animate({'width':'0%'}, 'slow');
			gameView.form.fadeIn('slow');
			gameView.render(this.questions[0]);
			$('.step-detail').hide();
		},
		checkAnswer: function(){
			this.userChecked = $('input:checked').val();
			this.userChecked = parseInt(this.userChecked);
			if (this.userChecked !== this.questions[this.counter].answer) {
				gameView.detail.text('Get outta here.');
			}
			else {
				this.totalCorrect++;				
				gameView.detail.text('Hey, Yurright!');
				gameView.drawProgress(this.totalCorrect);								
			}
			gameView.showDetail(this.questions[this.counter].detail); // Not sure if this is View or Data						
			this.counter++;
		},
	};

	var gameController = {
		pageLoad: function(){
			gameView.init();
			gameController.newGame();
		},
		submitUserChoice: function(){
			gameData.checkAnswer();
			if(gameData.counter < gameData.questions.length) {
				gameView.render(gameData.questions[gameData.counter]);
			}
			else {
				gameView.form.slideUp('slow');
				gameView.detail.text('Yay!').next('p').text('You got ' + gameData.totalCorrect + ' out of ' + gameData.questions.length + ' right!');
			}
		},
		newGame: function(){
			gameData.resetVariables();	
		},
	};

	$(document).ready(gameController.pageLoad);

	// Below makes the objects available to the console. Not necessary for production */
	// window.game = {	
	// 	gameView: gameView,
	// 	gameData: gameData,
	// 	gameController: gameController,
	// };
})();