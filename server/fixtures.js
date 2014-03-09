if (Ipsums.find().count() === 0) { 

	Ipsums.insert({
		title: 'He-Man Ipsum',
		author: 'Gavin T',
		uniqueIdentifier: "eternia",
		wordList: ['He-Man', 'Skeletor', 'Prince Adam', 'Eternia', 'Battlecat' ]
	});
	Ipsums.insert({
		title: 'Pokem Ipsum',
		author: 'Gavin T',
		uniqueIdentifier: "pokemipsum",
		wordList: ['Squirtle', 'Bulbasaur', 'Charizard', 'Blastoise', "Pokemon", "Brock", "Misty" ]
	});
	Ipsums.insert({
		title: 'Fordem Ipsum',
		author: 'Gavin T',
		uniqueIdentifier: "fordnation",
		wordList: ['Subways subways subways', 'tax payers', 'subways', 'orientals', 'gravy', 'gravytrain', 'Steak Queen', 'Rob Ford', "Ford Nation" ]
	}); 
	
}