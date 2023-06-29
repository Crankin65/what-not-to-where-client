import React from 'react';

export default function CurrentWeatherDetails(props){


	function localTime(string) {
		let date = new Date(string)
		return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
	}

	function makeNormalCase(word) {
		const output = word.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
		return output
	}

	if (props.sourceData) {
		return (
			<div>
				{Object.entries(props.sourceData).map((item) => {
					return <p key={item[0]} className='flex flex-col items-end text-sm font-light'> {makeNormalCase(item[0])}:
						{typeof item[1] === 'string' ? localTime(item[1]) : item[1] }  </p>
				})}
			</div>
		)
	}
}