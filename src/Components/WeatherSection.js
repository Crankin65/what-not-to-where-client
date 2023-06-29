import React from 'react';
import {CurrentWeatherDetails} from "@/HelperFunctions/Current Weather Details";

export default function WeatherSection(props){

function openDetailedView() {
	props.updateDetailedViewButton()
}

function openAirQualtiyView() {
	props.updateAirQuaityButton()
}

function createAirQualityButton() {
	if (props.airQualityButton) {
		return(
			<div className='flex flex-row'>
				<button className='flex flex-row bg-green-600 rounded px-1 hover:opacity-80 hover:bg-green-700
					focus:bg-green-700 action:bg-green-900 font-light transition-colors duration-200'
								onClick = {openAirQualtiyView}>Air Quality</button>
			</div>
		)
	}
}

	return (
		<div className='bg-gray-800 rounded flex flex-row justify-between px-2 py-2 w-5/6 '>

			<div className='flex flex-col justify-evenly rounded gap-8'>
				<div className='flex flex-row w-5/6 '>
					<p className='flex bg-green-800 rounded opacity-30'>{props.source}  </p>
					{/*<p className='flex font-light text-xs px-2'> Latitude: {props.sourceState === 'loading' ? 'loading' : props.sourceData.latitude  }</p>*/}
					{/*<p className='flex font-light text-xs px-2'> Longitude: {props.sourceState === 'loading' ? 'loading' : props.sourceData.longitude  }</p>*/}
				</div>
				<div className='flex flex-row gap-4'>
					<div className='flex flex-row'>
						<button className='flex flex-row bg-blue-600 rounded px-1 hover:opacity-80 hover:bg-blue-700
						focus:bg-blue-700 action:bg-blue-900 font-light transition-colors duration-200'
						onClick = {openDetailedView}>Detailed View</button>
					</div>
					{createAirQualityButton()}
				</div>

			</div>


			<div className='flex flex-col items-end content-end rounded font-light '>

				<CurrentWeatherDetails

					currentForecast = {props.currentForecast}

				/>

			</div>

		</div>
	)
}

