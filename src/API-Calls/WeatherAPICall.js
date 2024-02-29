async function weatherAPICheck(city) {
	if (city) {
		const response = await fetch(`https://express-weather-server.onrender.com/weatherAPI/${city}`, {
			method: 'GET',
			mode: "cors"
		});
		let formattedData = await response.json();
		// console.log(await formattedData)
		return await formattedData;

	} else {

		const response = await fetch(`http://localhost:8000/weatherAPI/houston`, {
			method: 'GET'
		});
		let formattedData = await response.json();
		// console.log(await formattedData)
		return await formattedData;
	}
}

export default weatherAPICheck;