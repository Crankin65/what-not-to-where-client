export default async function getCoordinates(city) {
	if (city) {
		const response = await fetch(`http://localhost:8000/get/${city}`, {
			method: 'GET'
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
