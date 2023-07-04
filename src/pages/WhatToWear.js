import React from 'react';
import '../app/globals.css'
import Navbar2 from "@/Components/Navbar2";
import ClothingModal from '../Components/ClothingModal'


export default function WhatToWear() {
	return(
		<>
			<Navbar2 />

			<div className='py-8 mx-2 px-2'>
				<ClothingModal />
			</div>

		</>
	)
}