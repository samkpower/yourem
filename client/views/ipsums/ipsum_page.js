

Template.ipsumPage.rendered = function() {
    // $('#ipsum-canvas').css('opacity', 0);
    // $('#ipsum-canvas h1').css('opacity', 0);


    // currentIpsum = this.data
    // currentIpsumArray = this.data.wordList
    // arrayLength = currentIpsumArray.length
};



Template.ipsumPage.events({ 

	'submit form': function(e) {
		e.preventDefault();

			currentIpsum = this
			currentIpsumArray = this.wordList
			arrayLength = currentIpsumArray.length

		// FADE OUT canvas/canvas content
				$('#ipsum-canvas').css('opacity', 0);
			    $('#ipsum-canvas h1').css('opacity', 0);
	    // Find and set paragraph variables
				numberParagraphs = $(e.target).find('[name=paragraphs]').val()
				canvasHeight = (numberParagraphs * 130) +"px" //NEEDS TO BE DYNAMIC
		// Find/Set style of paragraphs 
				_ipsumificationStyle = $(e.target).find('[name=contentStyle]').val()
		// Animate canvas and shit in
				Template.ipsumPage.paragraphGeneration()
				Template.ipsumPage.animateCanvas()			
	}

});




// Template.ipsumPage.testFunction = function() {
// 	console.log("test?")
// };



Template.ipsumPage.animateCanvas = function() {


	var sliderHeight = "0";
	var initialDelay = 0;
	var slideDuration = 1200;
	var opacityDelay = 0
	 
  	animateSetup()
	 
    var delay = function() { sliderOpen(); };
    setTimeout(delay, initialDelay);

    function animateSetup(){
    	$('#ipsum-canvas').each(function () {
    	    var current = $(this);
    	    current.attr("box_h", current.height());
    	});
    	$("#ipsum-canvas").css("height", sliderHeight);
    }
	 
	function sliderOpen(){
	    // var open_height = $("#ipsum-canvas").attr("box_h") + "px";
	    // console.log( Number( $("#ipsum-canvas").attr("box_h") ) + 80 )
	    var delay2 = function() { fadeInCanvas(); };
	    setTimeout(delay2, opacityDelay);

	    var heightWithBuffer = Number( $("#ipsum-canvas").attr("box_h")) + 80;
	   	var open_height = heightWithBuffer + "px";
	    $("#ipsum-canvas").animate({"height": open_height, paddingBottom: "20px"}, {duration: slideDuration });
	}



	// $('#ipsum-canvas').animate({
	// 	opacity: 1, 
	// 	height: canvasHeight
	// }, 1200, function() {
 //        // Animation complete.
 //    });

	function fadeInCanvas(){
		$('#ipsum-canvas').show();

		$('#ipsum-canvas').animate({
			opacity: 1, 
		}, 2000, function() {
	        // Animation complete.
	    });
	}
};



Template.ipsumPage.generateParagraph = function() {

	var completedParagraph = null
	var newParagraph = []

	var paragraphSentenceLength = Math.floor(( Math.random() * (10-5) )+5);

	for (var i = 0; i < paragraphSentenceLength; i++) {
			var paragraphSentence = Template.ipsumPage.generateSentence()
			newParagraph.push( paragraphSentence )
	};
	completedParagraph = Template.ipsumPage._stringifyNewParagraph(newParagraph)

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

	var completedSentence = null
	var newSentence = []
	// get number of words in each sentence randomally
	var sentenceWordLength = Math.floor(( Math.random() * (19-9) )+9);
	
	// Get new word X time - - -  X number of times where X = sentenceWordLength
	for (var i = 0; i < sentenceWordLength; i++) {

		if( _ipsumificationStyle == "theme"){
			var newWord = Template.ipsumPage._getRandomWord()
		}else if(_ipsumificationStyle == "latin"){
			var newWord = Template.ipsumPage._generateStylizedLatinWord()
		}
		
		newSentence.push( newWord )
	};
	

	completedSentence = Template.ipsumPage._stringifySentence(newSentence);

	return completedSentence
};






Template.ipsumPage._getRandomWord = function() {

 	// get random number between 0 and wordList.length
	var randomWordValue = Math.floor((Math.random() * arrayLength)+0);
	// Convert randomWordValue into actual word
	randomWord = currentIpsumArray[randomWordValue]
	randomWord = Template.ipsumPage._wordStrip( randomWord )

	return randomWord
};

Template.ipsumPage._wordStrip = function( word ) {
	word = Template.ipsumPage._wordStripPunctuation( word )
	word = Template.ipsumPage._wordStripUnderscores( word )
	word = Template.ipsumPage._wordStripNumbers( word )

	return word
}

Template.ipsumPage._wordStripPunctuation = function( word ) {
	word.replace(/[^\w\s\-]/g, '')
	return word
}

Template.ipsumPage._wordStripUnderscores = function( word ) {
	word.replace(/[\_]/g, '')
	return word
}

Template.ipsumPage._wordStripNumbers = function( word ) {
	word.replace(/[\d]/g, '')
	return word
}




Template.ipsumPage._stringifySentence = function(array) {
	

	newString = strippedArray.join(' ');


	newString = newString.toLowerCase();  
	newString = Template.ipsumPage._capitalizeFirstLetter(newString);  
	newString = newString + ".";

	return newString
};




Template.ipsumPage._capitalizeFirstLetter = function(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
};



Template.ipsumPage._generateStylizedLatinWord = function(){
	tripleSidedCoinFlip = Math.floor((Math.random() * 3)+0)

	if(tripleSidedCoinFlip == 0){
		newLatinifiedWord =  Template.ipsumPage._getRandomWord()
	}else if(tripleSidedCoinFlip == 1){
		// 
		newLatinifiedWord = Template.ipsumPage._generateRandomLatinIpsumWord()
		console.log(newLatinifiedWord)
		// 
	}else if(tripleSidedCoinFlip == 2){
		newLatinifiedWord = Template.ipsumPage.theEnglishLatinCrossHybridizationOfDoctorMoreau()
	}

	return newLatinifiedWord
};



Template.ipsumPage._generateRandomLatinIpsumWord = function(){
	latinArray = Template.ipsumPage.loremIpsumArray() 

	randomArrayValue = Math.floor((Math.random() * latinArray.length)+0)

	latinWord = latinArray[ randomArrayValue ]

	return latinWord
};



Template.ipsumPage.theEnglishLatinCrossHybridizationOfDoctorMoreau = function(){

	// Call endings array and pick a random latin ending
	endingsArray = Template.ipsumPage.popularLatinWordEndings()
	selectedEnding = endingsArray[ Math.floor((Math.random() * endingsArray.length)+0) ]

	// Generate consonants array and pick a random latin consonant
	popularLatinConsonants = ["t", "s", "qu", "ch", "r", "n", "m", "ct", "rp", "g", "d", "x", "pat", "nt"]
	selectedConsonant = popularLatinConsonants[ Math.floor((Math.random() * popularLatinConsonants.length)+0) ]

	// Generate baseword
	baseWord = Template.ipsumPage._getRandomWord()
	// console.log(baseWord)
	// Set variable to check if word ends in vowel
	baseWordLastLetter = baseWord.charAt(baseWord.length - 1)

	if( baseWordLastLetter.match(/[y]/) ){
		// replace last letter y with i and concat with consonant and ending
		trimmedBaseWord = baseWord.substring(0, baseWord.length - 1)
		latinifiedWord = trimmedBaseWord.concat("i", selectedConsonant, selectedEnding)
		// 
	}else if( baseWordLastLetter.match(/[aeiou]/) ){
		latinifiedWord = baseWord.concat(selectedConsonant, selectedEnding)
	}else{
		latinifiedWord = baseWord.concat(selectedEnding)
	}

	return latinifiedWord
};




Template.ipsumPage.loremIpsumArray = function(){
	loremIpsumArray =  	["Lorem", "ipsum", "dolor", "sit", "amet", "has", "exerci", "fastidii", "volutpat", "no", "ei", "perfecto", "indoctum", 
					"sea", "sea", "reque", "epicuri", "luptatum", "ea", "An", "natum", "tamquam", "perfecto", "est", "vivendum", 
					"voluptatum", "vix", "ea", "cum", "eu", "iriure", "audire", "Quo", "ei", "wisi", "omnes", "nonumes", "duo", 
					"omnium", "euismod", "mentitum", "no", "Sit", "cu", "viris", "hendrerit", "Quod", "accusamus", "torquatos", 
					"mea", "et", "In", "nec", "omnis", "fugit", "laoreet", "no", "sanctus", "singulis", "delicata", "has", "pri", 
					"posse", "iusto", "splendide", "cu", "Pri", "electram", "disputationi", "interpretaris", "id", "Everti", 
					"utroque", "mei", "te", "id", "sit", "mentitum", "antiopam", "qualisque", "Usu", "ut", "aeterno", "patrioque", 
					"prodesset", "vel", "eu", "sint", "vituperatoribus", "Has", "reque", "option", "euripidis", "cu", "In", "persecuti", 
					"disputando", "pro", "est", "eros", "omittantur", "an", "vel", "ei", "graeco", "sanctus", "ullamcorper", "Feugait", 
					"sapientem", "id", "sea", "per", "an", "harum", "ubique", "et", "sea", "quot", "recusabo", "Graeci", "invenire", 
					"adolescens", "eam", "at", "Choro", "admodum", "mentitum", "ex", "pro", "Ne", "duo", "consulatu", "elaboraret", 
					"appetere", "ponderum", "at", "his", "Qui", "at", "suas", "adhuc", "ea", "sea", "alia", "putent", "Per", "at", 
					"mollis", "nonumes", "Ei", "ius", "legendos", "laboramus", "An", "choro", "viderer", "aliquid", "vel", "Dicat", 
					"debitis", "vel", "in", "in", "eam", "molestie", "recteque", "forensibus", "Dico", "ipsum", "ea", "pro", "Mel", 
					"eu", "modus", "integre", "dissentiunt", "iisque", "vidisse", "oblique", "pri", "eu", "An", "eos", "erat", "utinam", 
					"noluisse", "idque", "vidisse", "fastidii", "te", "vis", "Viris", "reformidans", "in", "usu", "mei", "hinc", "reque", 
					"inermis", "in", "Ad", "appellantur", "intellegebat", "has", "Mei", "at", "meis", "honestatis", "id", "labores", 
					"accusam", "voluptatum", "pro", "Has", "id", "veritus", "tincidunt", "cotidieque", "Errem", "percipit", "tincidunt", 
					"an", "nec", "quo", "id", "delenit", "pericula", "Vel", "in", "saepe", "cetero", "est", "ea", "etiam", "mucius", 
					"imperdiet", "vulputate", "cum", "no", "No", "duo", "civibus", "maluisset", "sed", "consulatu", "cotidieque", 
					"ex", "ex", "vis", "perfecto", "senserit", "Augue", "conceptam", "ne", "vim", "usu", "vidit", "aperiri", "in", 
					"Pro", "posse", "pericula", "te", "quo", "ut", "ubique", "aeterno", "assentior", "Vel", "lobortis", "reprehendunt", 
					"no", "duo", "eu", "quas", "dicit", "partiendo", "Dolorem", "omittam", "patrioque", "ex", "duo", "vidit", "brute", 
					"eu", "mea", "Te", "illud", "posse", "solet", "cum", "ut", "sed", "illum", "falli", "antiopam", "Gloriatur", 
					"mediocritatem", "no", "his", "his", "ex", "vero", "recteque", "splendide", "per", "ex", "ullum", "fastidii", 
					"accommodare", "Tollit", "deleniti", "suavitate", "at", "per", "at", "usu", "soleat", "admodum", "facilisis", 
					"Quo", "dicam", "docendi", "ponderum", "ne", "qui", "nibh", "referrentur", "no", "At", "has", "abhorreant", 
					"dissentiet", "concludaturque", "has", "hinc", "scaevola", "et", "Exerci", "vivendum", "neglegentur", "ea", "est", 
					"quo", "cu", "adhuc", "iracundia", "Habeo", "suavitate", "duo", "in", "usu", "movet", "vocent", "conclusionemque", 
					"ut", "nostro", "nominati", "nam", "eu", "Eu", "mundi", "sadipscing", "quo", "te", "quo", "sint", "legere", "copiosae", 
					"congue", "utinam", "facilis", "eu", "nec", "Cu", "mel", "dolores", "lobortis", "has", "ea", "tincidunt", "voluptaria", 
					"eu", "option", "aliquam", "sit", "Id", "cum", "summo", "verear", "dico", "legimus", "ceteros", "mel", "ex", "Numquam", 
					"vivendum", "definitiones", "at", "mel", "an", "doming", "ocurreret", "sea", "Cu", "suas", "nostrum", "nam", "est", 
					"ne", "maluisset", "iracundia", "Ea", "eos", "zril", "deseruisse", "labore", "philosophia", "qui", "in", "erat", "augue", 
					"iisque", "his", "at", "An", "eam", "dicant", "eirmod", "ne", "per", "congue", "maiorum", "accumsan", "malis", 
					"eloquentiam", "est", "ei", "Vim", "ei", "insolens", "adipiscing", "voluptatibus", "mea", "id", "apeirian", "disputationi", 
					"libris", "sapientem", "splendide", "ut", "eum", "Sit", "labitur", "antiopam", "te", "sit", "no", "idque", "adversarium", 
					"duo", "nonumes", "hendrerit", "ad", "Te", "diam", "nostro", "mediocritatem", "est", "cu", "tation", "scripserit", 
					"disputando", "mei", "etiam", "volumus", "sed", "ea", "Te", "prima", "vitae", "pri", "at", "sed", "partem", "feugait", 
					"partiendo"]

	return loremIpsumArray
};



Template.ipsumPage.popularLatinWordEndings = function(){

	latinEndings = ["a", "ae", "aram", "as", "is", "us", "e", "orum", "i", "o", "ius", "ii", 
					"ium", "ios", "iorum", "iis", "ia", "os", "om", "es", "em", "ibus", "im", 
					"uum", "erum", "ebus", "tri", "eorum", "eis", "ius", "ix", "ii", "atrix", "ator"]

	return latinEndings
};
