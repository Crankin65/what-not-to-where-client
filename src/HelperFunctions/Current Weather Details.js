import React from 'react';

export function makeNormalCase(word) {
	const output = word.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
	return output
}

export function localTime(string) {
	let date = new Date(string)
	return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}

export function CurrentWeatherDetails(props){
	if (props.currentForecast && props.currentForecast !== 'loading') {

		return (
			<div>
				{Object.entries(props.currentForecast).map((item) => {
					return <p key={item[0]} className='flex flex-col items-end text-sm font-light'> {makeNormalCase(item[0])}: &nbsp;
						{typeof item[1] === 'string' && item[1].length === 24 ? localTime(item[1]) : item[1] }  </p>
				})}
			</div>
		)

	}
}

module.exports = {
	makeNormalCase: makeNormalCase,
	CurrentWeatherDetails: CurrentWeatherDetails,
	localTime: localTime
}