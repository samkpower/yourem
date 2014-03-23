var currentIpsum = null
var currentIpsumArray = null
var arrayLength = null
var numberParagraphs = null
var canvasHeight = null
var paragraphStyle = null


Template.ipsumPage.rendered = function() {
    // if(!this._rendered) {
    //   this._rendered = true;

    // }

    $('#ipsum-canvas').css('opacity', 0);
    $('#ipsum-canvas h1').css('opacity', 0);


    currentIpsum = this.data
    currentIpsumArray = this.data.wordList
    arrayLength = currentIpsumArray.length

};



Template.ipsumPage.events({ 

	'submit form': function(e) {
		e.preventDefault();


		// FADE OUT canvas/canvas content
				$('#ipsum-canvas').css('opacity', 0);
			    $('#ipsum-canvas h1').css('opacity', 0);

	    // Find and set paragraph variables
				numberParagraphs = $(e.target).find('[name=paragraphs]').val()
				canvasHeight = (numberParagraphs * 130) +"px" //NEEDS TO BE DYNAMIC

		// Find/Set style of paragraphs 
				paragraphStyle = $(e.target).find('[name=contentStyle]').val()

		// Animate canvas and shit in
				Template.ipsumPage.animateCanvas()

				Template.ipsumPage.paragraphGeneration()			
	}

});


Template.ipsumPage.testFunction = function() {
	console.log("test?")
};

Template.ipsumPage.animateCanvas = function() {
	$('#ipsum-canvas').animate({
		opacity: 1, 
		height: canvasHeight
	}, 1200, function() {
        // Animation complete.
    });

	$('#ipsum-canvas h1').animate({
		opacity: 1, 
	}, 500, function() {
        // Animation complete.
    });
};

Template.ipsumPage.generateParagraph = function() {
	// 
	// 
	// Set up sentence scoped variables
	var completedParagraph = null
	var newParagraph = []

	var paragraphSentenceLength = Math.floor(( Math.random() * (10-5) )+5);

	// Loop paragraphlength and generate a sentence for each
	for (var i = 0; i < paragraphSentenceLength; i++) {
			var paragraphSentence = Template.ipsumPage.generateSentence()

			newParagraph.push( paragraphSentence )
	};

	completedParagraph = Template.ipsumPage._stringifyNewParagraph(newParagraph)

	// FINISH FUNCTION
	return completedParagraph
};


Template.ipsumPage._stringifyNewParagraph = function(array) {
	newParagraphString = array.join(' ')
	return newParagraphString
};


Template.ipsumPage.paragraphGeneration = function() {
	$("#ipsum-canvas").empty()

	for (var i = 0; i < numberParagraphs; i++) {
			var finishedParagraph = Template.ipsumPage.generateParagraph()
			$("#ipsum-canvas").append("<div><p>"+ finishedParagraph+"</p></div>")
	};
};

Template.ipsumPage.generateSentence = function() {
	// 
	// Set up sentence scoped variables
	var completedSentence = null
	var newSentence = []
	
	// get number of words in each sentence randomally
	var sentenceWordLength = Math.floor(( Math.random() * (19-9) )+9);

	// run get random word function ...
	// run this function X number of times where X = sentenceWordLength

	for (var i = 0; i < sentenceWordLength; i++) {
			var newWord = Template.ipsumPage._getRandomWord()
			newSentence.push( newWord )
	};


	completedSentence = Template.ipsumPage._stringifySentence(newSentence);


	// FINISH FUNCTION
	return completedSentence
};

Template.ipsumPage._getRandomWord = function() {
	// 
	// get random number between 0 and wordList.length
	var randomWordValue = Math.floor((Math.random() * arrayLength)+0);

	// turn randomWordValue into actual word
	randomWord = currentIpsumArray[randomWordValue]
	// return word
	return randomWord
};

Template.ipsumPage._stringifySentence = function(array) {
	var newString = null;
	newString = array.join(' ');
	newString = newString.toLowerCase();
	newString = Template.ipsumPage._capitalizeFirstLetter(newString);
	newString = newString + ".";

	return newString
};

Template.ipsumPage._capitalizeFirstLetter = function(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
};
