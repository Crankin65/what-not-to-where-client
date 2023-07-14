import React from 'react';
import '../app/globals.css'
import Navbar from "@/Components/Navbar";
import ProductDescription from "@/Components/ProductDescription";
import { Inter } from 'next/font/google'
import Footer from "@/Components/Footer";

export default function About() {
	return(
		<>
			<nav>
				<Navbar />
			</nav>

			<div className=''>
				<ProductDescription />
			</div>

			<Footer />

		</>
	)
}