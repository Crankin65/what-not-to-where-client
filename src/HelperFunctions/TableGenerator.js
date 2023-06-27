import React from 'react';


function createTable(data) {
	data.map((hour, index) => {
		return (
			<tr key={hour}>
				<td key={index}> {hour.map((element) => element)}</td>
			</tr>
		)
	})
}

export function DetailedTable2(props){

	return(
		<div className='table-auto'>
			<table>
				<thead>
					<tr>

					</tr>
				</thead>
			</table>
		</div>

	)
}

// export function TableGenerator(props) {
//
// 	props.weather.map((hour) => {
// 		Object.values(hour).map((element) => {
// 		return (
// 			<tr>
// 					<td key={hour}>{element}</td>
// 			</tr>
// 		)
// 								// <tr>
// 								// 	{data.map((item) => <td key={item.hour}>{item}</td>)}
// 								// </tr>
// 			})})};
// }