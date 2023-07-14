import React from 'react';
import '../app/globals.css'
import Navbar from "@/Components/Navbar";
import ClothingModalReference from '../Components/ClothingModal Reference'


export default function WhatToWear() {
	return(
		<>
			<Navbar />

			<div className='py-8 mx-2 px-2'>
				<ClothingModalReference />
			</div>

		</>
	)
}