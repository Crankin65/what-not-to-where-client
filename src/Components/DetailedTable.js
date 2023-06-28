import React from 'react';
import {TableGenerator} from "@/HelperFunctions/TableGenerator";

export default function DetailedTable(props){

	const weatherObject = props.weather;

if (props.detailedView) {
	return (
		<div className='shadow-md overflow-hidden my-8'>
			<table className=' table-auto w-full border border-separate border-spacing-1 border-slate-500 bg-gray-900'>
				<thead>
				<tr>
					{Object.keys(weatherObject[0]).map((title) => {
						return <th className='border border-slate-600' key={title}>{title}</th>
					})}
				</tr>
				</thead>

				<tbody>
				{weatherObject.map((row, index) => {
					return (
						<tr key={index} className='even:bg-gray-700'>

							{Object.values(row).map((element) => {
								return(
									<td className='border border-slate-700' key={element}>{element}</td>
								)})}

						</tr>
					)

				})}
				</tbody>
			</table>
		</div>
	)
}

}