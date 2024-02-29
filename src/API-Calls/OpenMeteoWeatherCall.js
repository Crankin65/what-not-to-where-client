async function weatherCheckOpenMeteo(latitude,longitude) {
	if (latitude && longitude) {

		const response = await fetch(`https://express-weather-server.onrender.com/openmeteo/${latitude}/${longitude}`, {
			method: 'GET',
			mode: "no-cors"
		});
		let formattedData = await response.json();
		// console.log(await formattedData)
		return await formattedData;

	} else {

		// const response = await fetch(`http://localhost:8000/openmeteo/29.76328/-95.36327`, {
		// 	method: 'GET'
		// });
		// let formattedData = await response.json();
		// // console.log(await formattedData)
		// return await formattedData;
			return 'Failed Check'
	}

}

export default weatherCheckOpenMeteo;