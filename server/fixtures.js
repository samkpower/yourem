if (Ipsums.find().count() === 0) { 

	Ipsums.insert({
		title: 'He-Man Ipsum',
		author: 'Gavin T',
		subdomain: "eternia",
		description: "A small description about this Ipsum",
		wordList: ['He-Man', 'Skeletor', 'Prince Adam', 'Eternia', 'Battlecat' ]
	});
	Ipsums.insert({
		title: 'Pokem Ipsum',
		author: 'Gavin T',
		subdomain: "pokemipsum",
		description: "A small description about this Ipsum",
		wordList: ['Squirtle', 'Bulbasaur', 'Charizard', 'Blastoise', "Pokemon", "Brock", "Misty" ]
	});
	Ipsums.insert({
		title: 'Fordem Ipsum',
		author: 'Gavin T',
		subdomain: "fordnation",
		description: "A small description about this Ipsum",
		wordList: ['Subways subways subways', 'tax payers', 'subways', 'orientals', 'gravy', 'gravytrain', 'Steak Queen', 'Rob Ford', "Ford Nation" ]
	}); 
	
}