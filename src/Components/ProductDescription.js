import React from 'react';

export default function ProductDescription() {
	return(
		<div className='pt-16 mx-2'>
			<div className=' flex flex-col bg-gray-800 font-bold'>
				<p className='flex px-2 py-2'>Welcome to "What Not to Where!"</p>
			</div>

				<br/>

			<div className=' flex flex-col bg-gray-800 font-light px-2 py-2'>
				<p>	A simple application that lets you review both basic and detailed information from three
				separate weather APIs and gives you the ability to determine "What Not to Where" when
				you go outside! </p>
			</div>

			<br/>


			<div className=' flex flex-col bg-gray-800 font-light px-2 py-2'>
				<p>This application is free to use but please let me know if there's any other features you'd like to see!</p>
			</div>


		</div>
	)
}