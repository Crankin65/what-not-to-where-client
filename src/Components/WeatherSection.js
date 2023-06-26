import React from 'react';

export default function WeatherSection(props){

	return (
		<div className='bg-gray-800 flex rounded'>
			<ul>
				<li className='text-white flex font-normal px-2'>Source: {props.source}  </li>
				<li className='text-white flex font-normal px-2'>Current Temperature: {props.currentTemp} </li>
			</ul>
		</div>
	)
}