async function weatherCheckOpenWeather(coordinates) {
	if (coordinates) {
		// console.log('weaher check coordinates func')
		// console.log(coordinates)
		const response = await fetch(`https://express-weather-server.onrender.com/openweather/${coordinates.latitude}/${coordinates.longitude}`, {
		method: 'GET',
		mode: "no-cors"
	});
		let formattedData = await response.json();

		console.log('weather check object')
		// console.log(formattedData)

		return await formattedData;

	} else {

	const response = await fetch(`http://localhost:8000/openweather/29.76328/-95.36327`, {
		method: 'GET'
	});
	let formattedData = await response.json();
	return await formattedData;
	}
}

export default weatherCheckOpenWeather;