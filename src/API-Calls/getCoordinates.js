export default async function getCoordinates(city) {
	if (city) {
		const response = await fetch(`https://express-weather-server.onrender.com/get/${city}`, {
			method: 'GET',
			mode: "cors"
		});

		const formattedData = await response.json();
		const coordinatesHash = {
			latitude: formattedData.coordinates.Latitude,
			longitude: formattedData.coordinates.Longitude
		}

		// console.log(formattedData)
		return coordinatesHash
	}
}
