var counter = 0;

function newGame() {
	//reset counter, status, steps and details
	console.log('Start a new game!');
	counter = 0;
}

function progress() {
	counter++;
	// do fancy class changes on nav#progress .bar + .stops
}

var questions = [];

var step = {
	id: 1,
	title: function() {
		return 'Question ' + this.id;
	},
	question: 'Dolore, a excepturi! Officia distinctio, harum. Cum aut quo optio ips?',
	options: ['Option one', 'Option two', 'Option three', 'Option four'],
	answer: 1,
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

var step1 = Object.create(step); // why are we creating objects when the questions share no common values?
questions.push(step1);


$(document).ready(function(){
// Do all my functions need to be in the ready function?
	$('#start').click(newGame);

	$('.step-title').text(step1.title());
	$('.step-question').text(step1.question);
	$('#submit').click(function(e){
		e.preventDefault();
		var checked = $('input:checked').val();
		if (step1.checkAnswer(checked)) {
			$('.step-detail h1').text('Hey, Yurright!');
			progress();
		}
		else {
			$('.step-detail h1').text('Get outta here.');
		}
		$('.step-detail p').text(step1.detail);
	});
	
});
