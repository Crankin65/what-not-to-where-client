import React from 'react';

export default function WeatherSection(props){

function openDetailedView() {
	props.detailedViewButton()
}

	// function localTime(date) {
	// 	return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
	// }

//
// function displaycurrentWeatherDetails(props) {
// 	return (
// 		<div className='flex flex-col items-end content-end rounded font-light '>
// 			{props.currentTemp ? <p className=''> Current Temperature: {props.currentTemp} </p> : ''}
// 			<p className=' '>Feels Like Temp: XX°</p>
// 			<p className=' '>Weather: {props.weather}</p>
// 		</div>
// 	)
// }

	return (
		<div className='bg-gray-800 rounded flex flex-row justify-between px-2 py-2 w-5/6 '>

			<div className='flex flex-col justify-evenly rounded gap-8'>
				<div className='flex flex-row w-5/6 '>
					<p className='flex bg-green-800 rounded opacity-30'>{props.source}  </p>
					<p className='flex font-light text-xs px-2'> Latitude: XX.XXX</p>
					<p className='flex font-light text-xs px-2'> Longitude: XX.XXX</p>
				</div>
				<div className='flex flex-row'>
					<button className='flex flex-row bg-blue-600 rounded px-1 hover:opacity-80 hover:bg-blue-700
					focus:bg-blue-700 action:bg-blue-900 font-light transition-colors duration-200'
					onClick = {openDetailedView}>Detailed View</button>
				</div>
			{/*<ul className='flex-row'>*/}
			{/*	<li className='text-white flex font-normal px-2 justify-start '>Source: {props.source}  </li>*/}
			{/*</ul>*/}
			</div>

			<div className='flex flex-col items-end content-end rounded font-light '>
				<p className=''>Current Temperature: {props.currentTemp}</p>
				<p className=' '>Feels Like Temp: XX°</p>
				<p className=' '>Weather: {props.weather}</p>
			</div>

		</div>
	)
}

// <li className='text-white flex font-normal px-2 justify-end'>Current Temperature: {props.currentTemp} </li>
