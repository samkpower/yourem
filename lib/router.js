Router.configure({ 
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('ipsums'); }
});

Router.map(function() { 
	this.route('ipsumsList', {path: '/'});

	this.route('ipsumPage', { 
		path: '/ipsums/:_id',
		data: function() { 
			return Ipsums.findOne(this.params._id); 
		}
	});

});