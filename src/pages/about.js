import React from 'react';
import '../app/globals.css'
import Navbar2 from "@/Components/Navbar2";
import ProductDescription from "@/Components/ProductDescription";
import { Inter } from 'next/font/google'

export default function About() {
	return(
		<>
			<nav>
				<Navbar2 />
			</nav>

			<div className='py-8 mx-2 px-2 pt-8'>
				<ProductDescription />
			</div>

		</>
	)
}