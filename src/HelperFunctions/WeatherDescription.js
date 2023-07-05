import React from 'react'

export default function WeatherDescription(props) {

	function createDescriptionText() {
		let averageRealFeel = (props.weatherAPICurrentForecastData.feelsLikeTemp + props.openWeatherMapFeelsLike) / 2

		if (props.weatherAPICurrentForecastData.weather.includes('rain') || props.openMeteoCurrentForecastData.weather.includes('rain')
			|| props.weatherAPICurrentForecastData.weather.includes('thunder') || props.openMeteoCurrentForecastData.weather.includes('thunder')) {
			return "Looks like it's rainy, make sure to protect yourself from the rain!"
		} else if (averageRealFeel >= 85) {
			return "You should wear something light It's pretty hot outside."
		} else if (averageRealFeel >= 70 && averageRealFeel < 85 ) {
			return "It should be pretty comfortable outside."
		} else if (averageRealFeel >= 55 && averageRealFeel < 70) {
			return "It's a little cool outside, make sure to wear some layers."
		} else if ( averageRealFeel < 54) {
			return "It's cold, make sure to wear a jacket!"
		}
}


	return(
		<div>
			<p className="text-sm text-gray-500">
				{createDescriptionText()}
			</p>
		</div>
	)
}