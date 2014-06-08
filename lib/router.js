Router.configure({ 
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('ipsums'); }
});

Router.map(function() { 	
	this.route('ipsumsIndex', {path: '/'});

	this.route('ipsumsExtendedList', { 
		path: '/all_ipsums'
	});

	this.route('ipsumPage', { 
		path: '/ipsums/:_id',
		data: function() { 
			return Ipsums.findOne(this.params._id); 
		}
	});

	this.route('ipsumSubmit', { 
		path: '/submit'
	});

});