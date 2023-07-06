export default async function pingAllWeatherAPIs(city){
	if (city) {
		// const response = await fetch(`http://localhost:8000/get/weather/${city}`, {
		const response = await fetch(`https://express-backend-weather-server-a6efe7468e93.herokuapp.com/${city}`, {

			method: 'GET'
		});

		const formattedData = await response.json();

		return formattedData
	}
}