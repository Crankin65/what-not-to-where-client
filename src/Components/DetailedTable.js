import React from 'react';
import {makeNormalCase, localTime} from '@/HelperFunctions/Current Weather Details'

function localHour(string) {
	if (parseInt(string.slice(11,13)) >= 13 ) {
		let hour = parseInt(string.slice(11,13)) - 12
		return `${hour}:${string.slice(14,17)}PM`
	} else {
		return `${string.slice(11,17)}AM`
	}
}

function getDayOfWeek(date) {
	let d = new Date(date)
	return d.toLocaleString('en-us', {weekday: 'long'});
	console.log(day);
}

export default function DetailedTable(props){

	const weatherObject = props.weather;


	if (props.onOff) {
		if (weatherObject) {
			return (
				<div className='shadow-md my-8 w-screen text-gray-800 font-normal'>
					<table className='md:table-auto md:w-full w-fit border border-separate dark:border-spacing-1 dark:border-slate-500 bg-white dark:bg-gray-900'>
						<thead className=''>
							<tr className=''>
								{Object.keys(weatherObject[0]).map((title) => {
									return <th className='border border-slate-600 px-2 mx-2 gap-4 sticky md:top-12 top-20 bg-gray-200 dark:bg-gray-900' key={title}>{makeNormalCase(title)}</th>
								})
								}
							</tr>
						</thead>

						<tbody>
						{weatherObject.map((row, index) => {
							return (
								<tr key={`${row}${index}`} className=' even:bg-gray-200 dark:even:bg-gray-700'>

									{Object.values(row).map((element) => {
										return (
											<td className='border border-slate-700'
													key={`${row}${element}`}>{typeof element === 'string' && element.length === 16 ? `${getDayOfWeek(element.slice(0, 10))} ${localHour(element)}` : element}</td>
										)
									})}

								</tr>
							)

						})}
						</tbody>
					</table>
				</div>
			)
		} else if (!weatherObject){
			return (
				<div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 py-4 gap-2" role="alert">
					<p className="font-bold">No City Selected</p>
					<p>Please enter a city if you want to access the detailed view.</p>
				</div>
			)
		}
	}

}