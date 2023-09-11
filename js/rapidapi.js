const getWeather = async (city) => {
	const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3b9cc6b8c2mshba23447eb4bef9fp1358f0jsn133db1042e6c',
			'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		if (result.success){
			cityFound = result.data
			cityTemp = result.data
			cityWeather = result.data
			cityWind = result.data
			cityHumidity = result.data
			cityUpdate = result.data
			newData()
		} else {
			alert('City was not found')
		}
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}