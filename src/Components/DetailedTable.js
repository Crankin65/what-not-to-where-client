import React from 'react';
import {TableGenerator} from "@/HelperFunctions/TableGenerator";

export default function DetailedTable(props){

	const weatherObject = props.weather;



	return (
	<div>
		<table className='border border-separate border-spacing-1 border-slate-500 bg-gray-900'>
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
					<tr key={index}>

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