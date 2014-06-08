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


// Template.ipsumsList.rendered = function() {

	// console.log("bonjour?")
	// console.log( $('.scrollToDiv') )

	// $( 'a.scrollToDiv' ).on('click', function(e) {
	// 	console.log("test?")
	//     e.preventDefault();
	//     var target = $(this).attr("href");
	//     console.log(target)

	//     $('html, body').animate({
	//         scrollTop: $(target).offset().top
	//     }, 1000);

	// });

	// ABOVE SHOULDN'T OVERRIDE ON NON INDEX --- need to give links where default is prevented

// };