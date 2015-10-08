var counter = 0;
var questions = [];

function newGame() {
	//reset counter, status, steps and details
	console.log('Start a new game!');
	counter = 0;
}

function progress() {
	// do fancy class changes on nav#progress .bar + .stops
}

function drawQuestion(question) {
	$('.step-title').text(question.title());
	$('.step-question').text(question.question);	
}

var q1 = {
	id: 1,
	title: function() {
		return 'Question ' + this.id;
	},
	question: 'Dolore, a excepturi! Officia distinctio, harum?',
	choices: ['Option one', 'Option two', 'Option three', 'Option four'],
	answer: 1,
	detail: 'Repellendus voluptatum consequatur molestias harum fuga.',
	listChoices: function() {
		console.log(this.choices);
		//loop through choices and wrap each with label/input
	},
	checkAnswer: function(checked) {
		checked = parseInt(checked);
		if(checked !== this.answer) {
			return false;
		}
		else {
			return true;
		}
	},	
};

var q2 = Object.create(q1);
q2.id = 2;
q2.question = 'Ut enim ad minim veniam,quis nostrud?';
q2.answer = 3;

var q3 = Object.create(q1);
q3.id = 3;
q3.question = 'Quis nostrud?';
q3.answer = 0;

questions.push(q1);
questions.push(q2);
questions.push(q3);

$(document).ready(function(){
// Do all my functions need to be in the ready function?
	$('#start').click(newGame);
	drawQuestion(questions[counter]);

	//step1.showChoices()
	$('#submit').click(function(e){
		e.preventDefault();
		// check if counter < questions.length
		$('.step-detail p').text(questions[counter].detail);

		var checked = $('input:checked').val();
		if (questions[counter].checkAnswer(checked)) {
			$('.step-detail h1').text('Hey, Yurright!');
			progress();
		}
		else {
			$('.step-detail h1').text('Get outta here.');
		}
		counter++;
		drawQuestion(questions[counter]);
	});
	
});
