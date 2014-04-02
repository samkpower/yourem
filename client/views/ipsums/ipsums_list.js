Template.ipsumsList.helpers({ 
	ipsums: function() {
		return Ipsums.find();
	},

	mostRecentIpsums: function(){
		return Ipsums.find(
			{}, {sort: {submitted: -1} }
		);
	}
});