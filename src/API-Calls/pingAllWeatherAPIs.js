export default async function pingAllWeatherAPIs(city){
	if (city) {
		const response = await fetch(`http://localhost:8000/get/weather/${city}`, {
			method: 'GET'
		});

		const formattedData = await response.json();

		return formattedData
	}
}