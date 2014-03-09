Template.ipsumSubmit.events({ 
		'submit form': function(e) {
	    e.preventDefault();
		
		var ipsum = {
			subdomain: $(e.target).find('[name=subdomain]').val(),
			title: $(e.target).find('[name=title]').val(), 
			description: $(e.target).find('[name=description]').val(),
			wordList: $(e.target).find('[name=wordList]').val()
		}


		
		ipsum._id = Ipsums.insert(ipsum);
		Router.go('ipsumPage', ipsum);
	}
});