Template.ipsumsIndex.helpers({ 
	ipsums: function() {
		return Ipsums.find();
	},

	mostRecentIpsums: function(){
		return Ipsums.find(
			{}, {sort: {submitted: -1} }
		);
	}
});


Template.ipsumsIndex.rendered = function() {

          $( 'a.scrollToDiv' ).on('click', function(e) {
              
              if(Router.current().lookupTemplate() == "ipsumsIndex"){
                console.log("test?")
                  e.preventDefault();
                  var target = $(this).attr("data-scrollTo");
                  console.log(target)

                  $('html, body').animate({
                      scrollTop: $(target).offset().top
                  }, 1000);
              }else{
                // go to link
              }
          });

}