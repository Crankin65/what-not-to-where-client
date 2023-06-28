"use client";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import React, {useState} from "react";
import Link from 'next/link';

import Image from 'next/image'
import {SunIcon, Bars3Icon, UserIcon} from "../Icons/Tailwind Icons";

const navigation = [
	{ id:0, name: 'Dashboard', href: '#', current: true },
	{ id:1, name: 'Team', href: '#', current: false },
	{ id:2, name: 'Projects', href: '#', current: false },
	{ id:3, name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}


export default function Navbar2(props) {
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (value) => {
		setSearchInput(value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		let cityName = e.target.city.value
		props.updateCitySelection(cityName)
	}

	function displayCurrentCity(city) {
		if (city !== ''){
			let capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
			return(
				<div className='flex justify-center px-2 mx-2 font-thin'>
					<p className='flex'>
					The current city is: {capitalizedCity}
					</p>
				</div>
			)
		}
	}

	return (
		<nav as='nav' className='bg-gray-800 w-full mx-0 px-0'>
			<div className='flex flex-row justify-between px-2 py-3'>

				<div className='flex justify-start md:hidden'>
					<Bars3Icon />
				</div>

				{/*<div className='md:flex justify-start px-4  sm:hidden flex '>*/}
				{/*	<SunIcon />*/}
				{/*</div>*/}

				<div className='sm:hidden md:flex flex-row items-center justify-items-center'>
					<ul className='md:flex flex-row justify-around sm: hidden'>
						{navigation.map((item) => (
							<Link className='flex px-2 mx-2 text-white bg-gray-700 font-normal rounded hover:bg-gray-800' key={item.id} href={item.href}> {item.name} </Link>
						))}
					</ul>
				</div>

				{displayCurrentCity(props.currentCity)}

				<div className='flex justify-end'>
					<form className= 'flex' method='get' onSubmit={onSubmit}>
						<input
							className='mx-2 px-2 text-black justify-end items-end'
							placeholder='city search'
							value={searchInput}
							name='city'
							onChange={(e) => handleChange(e.target.value)}
						/>
						<button className='text-white bg-blue-600 hover:bg-blue-900 rounded px-2 mx-2' type="submit">Submit</button>
					</form>

					<div className='flex justify-end '>
						<UserIcon />
					</div>
				</div>


			</div>
		</nav>
	)
}



