	
	Template.ipsumItem.helpers({ 
		exampleIpsum: function() {


			currentIpsum = this
			currentIpsumArray = this.wordList
			arrayLength = currentIpsumArray.length

			_ipsumificationStyle = 'latin'
				// above setup needed for generatePAragraph - needs refactoring --- notice no use of VAR
				// above variables required from Template.ipsumPage.generateParagraph()


			var finishedParagraph = Template.ipsumPage.generateParagraph()

			return finishedParagraph
			
		}
	});