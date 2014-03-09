Meteor.publish('ipsums', function() { 
	return Ipsums.find();
});