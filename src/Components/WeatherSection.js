import React from 'react';
import Image from 'next/image'
import tanktopIcon from '../Icons/ClothingIcons/icons8-basketball-jersey-50.png'

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
				<button className='flex flex-row text-white bg-green-600 rounded px-1 hover:opacity-80 hover:bg-green-700
					focus:bg-green-700 action:bg-green-900 font-light transition-colors duration-200'
								onClick = {openAirQualtiyView}>Air Quality</button>
			</div>
		)
	}
}




	return (
		<div className='bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white  rounded flex flex-row justify-between px-2 py-2 w-5/6 shadow-xl'>

			<div className='flex flex-col justify-evenly rounded gap-8'>
				<div className='flex flex-row w-5/6 '>
					<p className='flex  '>{props.source}  </p>
				</div>
				<div className='flex flex-row gap-4'>
					<div className='flex flex-row'>
						<button className='flex flex-row text-white bg-blue-600 rounded px-1 hover:opacity-80 hover:bg-blue-700
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

