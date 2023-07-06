import React from 'react';
import '../app/globals.css'
import Navbar2 from "@/Components/Navbar2";
import ProductDescription from "@/Components/ProductDescription";
import { Inter } from 'next/font/google'
import Footer from "@/Components/Footer";

export default function About() {
	return(
		<>
			<nav>
				<Navbar2 />
			</nav>

			<div className='py-8 mx-2 px-2 pt-8 bg-white dark:bg-gray-800 '>
				<ProductDescription />
			</div>

			<Footer />

		</>
	)
}