Template.ipsumPage.rendered = function() {
    // if(!this._rendered) {
    //   this._rendered = true;
    //   console.log('Template onLoad');
    // }

    $('#ipsum-canvas').css('opacity', 0);
    $('#ipsum-canvas h1').css('opacity', 0);
};


Template.ipsumPage.events({ 


	'submit form': function(e) {
		e.preventDefault();

		// FADE OUT canvas/canvas content
						$('#ipsum-canvas').css('opacity', 0);
					    $('#ipsum-canvas h1').css('opacity', 0);

	    // Find and set paragraph variables
						var paragraphs = $(e.target).find('[name=paragraphs]').val()
						var canvasHeight = (paragraphs * 90) +"px"


		// Animate canvas and shit in
						$('#ipsum-canvas').animate({
							opacity: 1, 
							height: canvasHeight
						}, 1200, function() {
					        // Animation complete.
					    });

						$('#ipsum-canvas h1').animate({
							opacity: 1, 
						}, 500, function() {
					        // Animation complete.
					    });


						// 'submit form': function(e) {
						// 	e.preventDefault();

						// 	// FADE OUT canvas/canvas content
						// 					$('#ipsum-canvas').css('opacity', 0);
						// 				    $('#ipsum-canvas h1').css('opacity', 0);

						// 				    console.log("dkfnkdsfnsdnkjdsfnkj");
						// 	// Animate canvas and shit in
						// 					generatedIpsumData.revealCanvas();


						// 		var generatedIpsumData = {

						// 				// Find and set paragraph variables
						// 					paragraphs: $(e.target).find('[name=paragraphs]').val(),
						// 					canvasHeight: (generatedIpsumData.paragraphs * 90) +"px",

						// 				revealCanvas: function(){
						// 					$('#ipsum-canvas').animate({
						// 						opacity: 1, 
						// 						height: generatedIpsumData.canvasHeight
						// 					}, 1200, function() {
						// 				        // Animation complete.
						// 				    });

						// 					$('#ipsum-canvas h1').animate({
						// 						opacity: 1, 
						// 					}, 500, function() {
						// 				        // Animation complete.
						// 				    });
						// 				}
						// 		}	
						// }
		
	}
});