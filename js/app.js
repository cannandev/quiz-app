var counter = 0;

function newGame() {
	//reset counter, status, steps and details
	console.log('Start a new game!');
	counter = 0;
}

function progress() {
	// do fancy class changes on nav#progress .bar + .stops
}

var questions = [];

var step = {
	id: 1,
	title: function() {
		return 'Question ' + this.id;
	},
	question: 'Dolore, a excepturi! Officia distinctio, harum. Cum aut quo optio ips?',
	choices: ['Option one', 'Option two', 'Option three', 'Option four'],
	answer: 1,
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
	detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum aliquam qui commodi, alias quidem minus ex odit, nulla, magnam recusandae et quibusdam laborum error ipsam. Delectus dolores sequi molestiae.',
};

var step1 = Object.create(step);
var step2 = Object.create(step);
step2.id = 2;
step2.question = 'Ut enim ad minim veniam,quis nostrud?';
step2.answer = 3;

questions.push(step1);
questions.push(step2);

$(document).ready(function(){
// Do all my functions need to be in the ready function?
	$('#start').click(newGame);

	$('.step-title').text(questions[counter].title());
	$('.step-question').text(questions[counter].question);
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
	});
	
});
