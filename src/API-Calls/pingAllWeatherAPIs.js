export default async function pingAllWeatherAPIs(city){
	if (city) {
		// const response = await fetch(`http://localhost:3001/get/weather/${city}`, {
		const response = await fetch(`https://express-weather-server.onrender.com/get/weather/${city}`, {

			method: 'GET',
			mode: "cors"
		});

		const formattedData = await response.json();

		return formattedData
	}
}