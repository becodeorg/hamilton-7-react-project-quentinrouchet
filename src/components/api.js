const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b08b46882msh51420ab1a25edc9p12a46bjsn040875e5cb28',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));