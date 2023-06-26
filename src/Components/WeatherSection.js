import React from 'react';

export default function WeatherSection(props){

	return (
		<div className='bg-gray-800 flex rounded'>
			<ul>
				<li className='text-white flex font-normal'>Source:  </li>
				<li className='text-white flex font-normal'>Current Temperature: </li>
			</ul>
		</div>
	)
}