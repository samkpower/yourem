Template.ipsumSubmit.events({ 
	
	'submit form': function(e) {
	    e.preventDefault();

	    wordListRawData = $(e.target).find('[name=wordList]').val()
	    wordListArray = []
	    turnWordListIntoArray()


	    function turnWordListIntoArray(){

	    	// alert(wordListRawData)
	    	wordListRawArray = wordListRawData.split(",")

	    	 $.each( wordListRawArray, function (index, value) {
		        wordListArray.push( $.trim(this) );
		    });

	    	// alert(wordListArray)
	    	// Needs extra spaces trimmed from array values


	    }

		
		var ipsum = {
			// subdomain: $(e.target).find('[name=subdomain]').val(),
			author: $(e.target).find('[name=author]').val(),
			title: $(e.target).find('[name=title]').val(), 
			description: $(e.target).find('[name=description]').val(),
			// wordList: $(e.target).find('[name=wordList]').val()
			wordList: wordListArray,
			submitted: new Date().getTime()
		}


		
		ipsum._id = Ipsums.insert(ipsum);
		Router.go('ipsumPage', ipsum);
	}
	
});