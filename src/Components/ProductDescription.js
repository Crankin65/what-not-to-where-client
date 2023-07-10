import React from 'react';

export default function ProductDescription() {
	return(
		<div className='mt-24 gap-4 mx-2 '>

			<div className='flex flex-col font-bold bg-white rounded dark:bg-gray-800'>
				<p className='flex px-2 py-2'>Welcome to &quot;What Not to Where!&quot;</p>
			</div>

				<br/>
			<br/>

			<div className='flex flex-col font-light px-2 bg-white rounded dark:bg-gray-800 py-4'>
				<p>	A simple application that lets you review both basic and detailed information from three
				separate weather APIs and gives you the ability to determine &quot;What Not to Where&quot; when
				you go outside! This application is free to use but please let me know if there&apos;s any other features you&apos;d like to see!</p>

			</div>




		</div>
	)
}