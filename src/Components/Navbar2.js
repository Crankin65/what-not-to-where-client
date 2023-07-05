"use client";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import React, {useState} from "react";
import Link from 'next/link';

import Image from 'next/image'
import ClothingModal2 from "@/Components/ClothingModal2";
import {Bars3Icon, UserIcon} from "../Icons/Tailwind Icons";
import tanktopIcon from "@/Icons/ClothingIcons/icons8-basketball-jersey-50.png";

const navigation = [
	{ id:0, name: 'Home', href: '/' },
	{ id:1, name: 'About', href: '/about'},
	// { id:2, name: 'What To Wear', href: '/whattowear'},
	// { id:3, name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}


export default function Navbar2(props) {
	const [searchInput, setSearchInput] = useState("");
	const [threeBarMenuStatus, setThreeBarMenuStatus] = useState(false)

	const handleChange = (value) => {
		setSearchInput(value)
	}
	const onSubmit = (e) => {
		e.preventDefault()
		let cityName = e.target.city.value
		props.updateCitySelection(cityName)
	}

	function toTitleCase(str) {
		return str.replace(/\w\S*/g, function(txt){
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}

	function displayCurrentCity(city, weatherState) {
		if (city !== '' && props.weatherAPIData && weatherState === 'success'){
			let capitalizedCity = toTitleCase(city)
			return(
				<div className='flex flex-row gap-2 items-center font-light'>
					<div className='flex mx-2 px-2 rounded'>
						<p className='flex'>{capitalizedCity}</p>
					</div>

					<div className='mx-2 px-2 flex-col rounded hidden md:visible md:flex'>
						{props.weatherAPIData.currentForecast ?
							<>
							<p className='flex'> Coordinates: </p>
								<p className='flex'>
								{props.weatherAPIData.currentForecast.latitude} by &nbsp;
								{props.weatherAPIData.currentForecast.longitude}</p>
							</>: ''}
					</div>
				</div>
			)
		} else if (weatherState === 'error') {
			return(
				<div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 " role="alert">
					{/*<p className="font-bold">Invalid City</p>*/}
					<p>Please enter a valid city.</p>
				</div>
			)
		}
	}
	function expandMenu(){
		let routerButtons = document.getElementById('router-buttons');
		let searchForm = document.getElementById('search-form')

		if (threeBarMenuStatus === false) {
			setThreeBarMenuStatus(true)
			routerButtons.classList.remove('hidden')
			routerButtons.classList.remove('flex-row')
			routerButtons.classList.add('flex-col')
			searchForm.classList.remove('flex-row')

		} else if (threeBarMenuStatus === true){
			setThreeBarMenuStatus(false)
			routerButtons.classList.add('hidden')
			routerButtons.classList.add('flex-row')
			routerButtons.classList.remove('flex-col')

		}

	}

	return (
		<nav as='nav' className='bg-gray-800 w-full mx-0 px-0 fixed top-0 left-0 right-0'>
			<div className='flex flex-row justify-between px-2 py-3'>

				<div className='flex justify-start md:hidden' onClick={expandMenu}>
					<Bars3Icon />
				</div>


				<div id='router-buttons' className='hidden md:visible md:flex flex-row items-center justify-items-center'>
					<ul className='md:flex flex flex-row justify-around'>
						{navigation.map((item) => (
							<Link className='flex px-2 mx-2 text-white bg-gray-700 font-normal rounded hover:bg-gray-800' key={item.id} href={item.href}> {item.name} </Link>
						))}
					</ul>
					<ul className='flex flex-row py-2'>
						{ props.openMeteoDataState === 'success' ? <ClothingModal2
							openWeatherMapState = {props.openWeatherMapState}
							weatherAPIState = {props.weatherAPIState}

							openMeteoData = {props.openMeteoData}
							weatherAPIData = {props.weatherAPIData}
							openWeatherMapData = {props.openWeatherMap}
							/> : null}
					</ul>
				</div>

				{displayCurrentCity(props.currentCity, props.openMeteoDataState)}

				<div id ='search-form' className='flex justify-center items-center'>

					<form className= 'flex sm:flex-row flex-col sm:justify-center gap-2 items-end' method='get' onSubmit={onSubmit}>
						<input
							className='mx-2 px-2 text-black  w-32'
							placeholder='city'
							value={searchInput}
							name='city'
							onChange={(e) => handleChange(e.target.value)}
						/>
						<button className='flex text-white items-center justify-center bg-blue-600 hover:bg-blue-900 rounded px-2 mx-2 w-32' type="submit">Submit</button>
					</form>

				</div>


			</div>
		</nav>
	)
}



