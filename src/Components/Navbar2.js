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

	function displayCurrentCity(city, weatherState) {
		if (city !== '' && props.weatherAPIData && weatherState === 'success'){
			let capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
			return(
				<div className='flex flex-row gap-2 items-center font-light'>
					<p className='flex'>{capitalizedCity}</p>
					{props.weatherAPIData.currentForecast ? <p className='flex'> Coordinates: {props.weatherAPIData.currentForecast.latitude} by
						{props.weatherAPIData.currentForecast.longitude}</p> : ''}
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

		if (threeBarMenuStatus === false) {
			setThreeBarMenuStatus(true)
			routerButtons.classList.remove('sm:hidden')
		} else if (threeBarMenuStatus === true){
			setThreeBarMenuStatus(false)
			routerButtons.classList.add('sm:hidden')
		}

	}
	function openClothingModal() {

		return(
			<div className='bg-gray-700'>
				<dialog id="my_modal_3" className="modal bg-gray-300">
					<form method="dialog" className="modal-box ">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
						<h3 className="font-bold text-lg">It feels like: XXdegrees </h3>
						{/*<p className="py-4">You should wear: a tank top</p>*/}
						<Image
							src={tanktopIcon}
							width={50}
							height={50}
							alt="Picture of the author"
						/>
					</form>
				</dialog>
			</div>
		)
	}

	return (
		<nav as='nav' className='bg-gray-800 w-full mx-0 px-0 fixed top-0 left-0 right-0'>
			<div className='flex flex-row justify-between px-2 py-3'>

				<div className='flex justify-start md:hidden' onClick={expandMenu}>
					<Bars3Icon />
				</div>


				<div id='router-buttons' className='sm:hidden md:flex flex-row items-center justify-items-center'>
					<ul className='md:flex flex flex-row justify-around'>
						{navigation.map((item) => (
							<Link className='flex px-2 mx-2 text-white bg-gray-700 font-normal rounded hover:bg-gray-800' key={item.id} href={item.href}> {item.name} </Link>
						))}
					</ul>
					<ul>
						{/*<button className='btn flex px-2 mx-2 text-white bg-gray-700 font-normal rounded hover:bg-gray-800' onClick={()=>window.my_modal_3.showModal()}>What Should I Wear?</button>*/}
						{/*<button className='btn flex px-2 mx-2 text-white bg-gray-700 font-normal rounded hover:bg-gray-800' onClick={openClothingModal}>What Should I Wear?</button>*/}
						{ props.openMeteoDataState === 'success' ? <ClothingModal2
							openWeatherMapState = {props.openWeatherMapState}
							weatherAPIState = {props.weatherAPIState}

							openMeteoData = {props.openMeteoData}
							weatherAPIData = {props.weatherAPIData}
							openWeatherMapData = {props.openWeatherMap}
							/> : null}
					</ul>
				</div>

				{/*<div className='bg-gray-700'>*/}
				{/*	<dialog id="my_modal_3" className="modal bg-gray-300">*/}
				{/*		<form method="dialog" className="modal-box ">*/}
				{/*			<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>*/}
				{/*			<h3 className="font-bold text-lg">It feels like: XXdegrees </h3>*/}
				{/*			<p className="py-4">You should bring a:</p>*/}
				{/*			<Image*/}
				{/*				src= {umbrella}*/}
				{/*				width={50}*/}
				{/*				height={50}*/}
				{/*				alt="Picture of the author"*/}
				{/*			/>*/}
				{/*		</form>*/}
				{/*	</dialog>*/}
				{/*</div>*/}

				{displayCurrentCity(props.currentCity, props.openMeteoDataState)}

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



