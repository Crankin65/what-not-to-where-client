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

			<div className=''>
				<ProductDescription />
			</div>

			<Footer />

		</>
	)
}