import React from 'react';

export default function WeatherSection(props){

	return (
		<div className='bg-gray-800 rounded flex flex-row justify-between '>

			<div className='flex flex-col justify-evenly rounded gap-8'>
				<p className='flex bg-green-800 rounded opacity-30'>{props.source}  </p>
				<p className='flex font-light'>Detail View  </p>
			{/*<ul className='flex-row'>*/}
			{/*	<li className='text-white flex font-normal px-2 justify-start '>Source: {props.source}  </li>*/}
			{/*</ul>*/}
			</div>

			<div className='flex flex-col items-end content-end rounded font-light '>
				<p className=''>Current Temperature: {props.currentTemp}</p>
				<p className=' '>Feels Like Temp: XX°</p>
				<p className=' '>Weather: Sunny</p>
			</div>

		</div>
	)
}

// <li className='text-white flex font-normal px-2 justify-end'>Current Temperature: {props.currentTemp} </li>
