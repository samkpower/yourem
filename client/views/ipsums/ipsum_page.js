var currentIpsum = null
var currentIpsumArray = null
var arrayLength = null
var numberParagraphs = null
var canvasHeight = null
var paragraphStyle = null


Template.ipsumPage.rendered = function() {
    // if(!this._rendered) {
    //   this._rendered = true;
    //   console.log('Template onLoad');
    // }

    $('#ipsum-canvas').css('opacity', 0);
    $('#ipsum-canvas h1').css('opacity', 0);


    currentIpsum = this.data
    currentIpsumArray = this.data.wordList
    arrayLength = currentIpsumArray.length
    // console.log(currentIpsumArray)
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
				animateCanvas()

				paragraphGeneration()


		// Set functions

				function animateCanvas(){
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


				function generateParagraph(){
					// 
					// 
					// Set up sentence scoped variables
					var completedParagraph = null
					var newParagraph = []

					var paragraphSentenceLength = Math.floor(( Math.random() * (10-5) )+5);


					// Loop paragraphlength and generate a sentence for each
					for (var i = 0; i < paragraphSentenceLength; i++) {

							var paragraphSentence = generateSentence()
							console.log(paragraphSentence)
							newParagraph.push( paragraphSentence )
							console.log(newParagraph)


					};

					console.log("end loop")
					console.log(newParagraph)

					completedParagraph = _stringifyNewParagraph(newParagraph)
					console.log(completedParagraph)

					// FINISH FUNCTION
					return completedParagraph

					// SUPPORTING FUNCTION 
						function _stringifyNewParagraph(array){
							newParagraphString = array.join(' ')
							return newParagraphString
						};
					// END Supporting Functions
				}; // end




				function paragraphGeneration(){
					console.log( generateParagraph() )
					$("#ipsum-canvas").empty()

					for (var i = 0; i < numberParagraphs; i++) {
							var finishedParagraph = generateParagraph()
							$("#ipsum-canvas").append("<div><p>"+ finishedParagraph+"</p></div>")
					};
				};  // end




				function generateSentence(){
					// 
					// Set up sentence scoped variables
					var completedSentence = null
					var newSentence = []
					
					// get number of words in each sentence randomally
					var sentenceWordLength = Math.floor(( Math.random() * (19-9) )+9);

					// run get random word function ...
					// run this function X number of times where X = sentenceWordLength

					for (var i = 0; i < sentenceWordLength; i++) {
							var newWord = _getRandomWord()
							newSentence.push( newWord )
					};

					console.log(newSentence);
					completedSentence = _stringifySentence(newSentence);
					console.log(completedSentence);

					// FINISH FUNCTION
					return completedSentence
							// if latin selected do something else.....


					// 
					// Supporting FUNCTIONS
						function _getRandomWord(){
							// 
							// get random number between 0 and wordList.length
							var randomWordValue = Math.floor((Math.random() * arrayLength)+0);

							// turn randomWordValue into actual word
							randomWord = currentIpsumArray[randomWordValue]
							// return word
							return randomWord
						};

						function _stringifySentence(array){
							var newString = null;
							newString = array.join(' ');
							newString = newString.toLowerCase();
							newString = _capitalizeFirstLetter(newString);
							newString = newString + ".";

							return newString

						};

						function _capitalizeFirstLetter(string){
						    return string.charAt(0).toUpperCase() + string.slice(1);
						};
					// END Supporting Functions
				}; // end
				
		

	}
});