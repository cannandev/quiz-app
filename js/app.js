$(document).ready(function(){
// Do all my functions need to be in the ready function?

	function newGame() {
		//reset counter, status, steps and details
		console.log('Start a new game!');
	}

	var step = {
		id: 1,
		title: function() {
			return 'Question ' + this.id;
		},
		question: 'Dolore, a excepturi! Officia distinctio, harum. Cum aut quo optio ips?',
		options: ['Option one', 'Option two', 'Option three', 'Option four'],
		answer: function() {
			return this.options[1];
		},
		detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum aliquam qui commodi, alias quidem minus ex odit, nulla, magnam recusandae et quibusdam laborum error ipsam. Delectus dolores sequi molestiae.',
	};

	var step1 = Object.create(step); // why are we creating objects when the questions share no common values?

	$('.start').click(newGame);

	$('.step-title').text(step1.title());
	$('.step-question').text(step1.question);
	$('.step-detail p').text(step1.detail);

});
