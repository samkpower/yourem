Template.ipsumSubmit.events({ 
	
	'submit form': function(e) {
	    e.preventDefault();

	    var wordListRawData = $(e.target).find('[name=wordList]').val()
	    var wordListArray = []
	    turnWordListIntoArray()


	    function turnWordListIntoArray(){

	    	// alert(wordListRawData)
	    	wordListArray = wordListRawData.split(",")
	    	// alert(wordListArray)
	    	// Needs extra spaces trimmed from array values


	    }

		
		var ipsum = {
			subdomain: $(e.target).find('[name=subdomain]').val(),
			title: $(e.target).find('[name=title]').val(), 
			description: $(e.target).find('[name=description]').val(),
			// wordList: $(e.target).find('[name=wordList]').val()
			wordList: wordListArray
		}


		
		ipsum._id = Ipsums.insert(ipsum);
		Router.go('ipsumPage', ipsum);
	}
	
});