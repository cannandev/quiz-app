function newGame() {
	//reset to questions[0]
	console.log('Start a new game!');
}

function progress() {
	// do fancy class changes on nav#progress .bar + .stops
}

function showQuestion(question) {
	$('.step-title').text(question.title());
	$('.step-question').text(question.question);	
}

function showChoices(question) {
	for(var i=0; i < question.choices.length; i++) {
		console.log(question.choices[i]);
	}
}

function submitChoice(question) {
	var checked = $('input:checked').val();
	var total = 0;
	if (question.checkAnswer(checked)) {
		$('.step-detail h1').text('Hey, Yurright!');
		progress();
		total++;
	}
	else {
		$('.step-detail h1').text('Get outta here.');
	}	
}

// function showDetail(question) {
// 	$('.step-detail p').text(question.detail);
// }

var questions = [];

var q1 = {
	id: 1, // 
	title: function() {
		return 'Question ' + this.id;
	},
	question: 'Dolore, a excepturi! Officia distinctio, harum?',
	choices: ['Option one', 'Option two', 'Option three', 'Option four'],
	answer: 1,
	detail: 'Repellendus voluptatum consequatur molestias harum fuga.',
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
q3.choices = ['minim', 'excepturi', 'Cupiditate', 'perspiciatis'];
q3.answer = 0;


questions.push(q1);
questions.push(q2);
questions.push(q3);

$(document).ready(function(){
	
	var counter = 0;

	$('#start').click(newGame);

	$('#submit').click(function(e){
		e.preventDefault();
		if (counter < questions.length) {
			submitChoice(questions[counter]);		
			showQuestion(questions[counter]);
			showChoices(questions[counter]);
		}
		else {
			$('.step').text('Yay! You got # out of ' + questions.length + ' right!');
		}
		counter++;		
	});
});
