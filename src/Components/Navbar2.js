"use client";
import React, {useState} from "react";
import Link from 'next/link';

import ClothingModal2 from "@/Components/ClothingModal2";
import {Bars3Icon, UserIcon} from "../Icons/Tailwind Icons";
import Router from "next/router";
import {useRouter} from "next/navigation";


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
	const router = useRouter();


	const handleChange = (value) => {
		setSearchInput(value)
	}
	const onSubmit = (e) => {
		// e.preventDefault()
		let cityName = e.target.city.value

		// router.push(`/weather/${cityName}`)
		// router.push(`/${cityName}`)
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
				<div className='flex flex-row text-gray-500 dark:text-gray-400 gap-2 items-center '>

					<div id='selected-city' className='flex flex-col md:flex-col md:items-center md:justify-center rounded'>
						<p className='flex px-1 '>Selected City:</p>
						<p className='flex px-1'>{capitalizedCity}</p>
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
		let searchForm = document.getElementById('search-form');
		let appName = document.getElementById('app-name');
		let selectedCity = document.getElementById('selected-city')

		if (threeBarMenuStatus === false) {
			setThreeBarMenuStatus(true)
			routerButtons.classList.remove('hidden')
			routerButtons.classList.remove('flex-row')
			routerButtons.classList.add('flex-col')
			searchForm.classList.remove('flex-row')
			appName.classList.add('hidden')
			selectedCity.classList.add('hidden')

		} else if (threeBarMenuStatus === true){
			setThreeBarMenuStatus(false)
			routerButtons.classList.add('hidden')
			routerButtons.classList.add('flex-row')
			routerButtons.classList.remove('flex-col')
			appName.classList.remove('hidden')
			selectedCity.classList.remove('hidden')

		}

	}

	return (
		<nav as='nav' className='bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-400 w-full mx-0 px-0 fixed top-0 left-0 right-0'>
			<div className='flex flex-row justify-between px-2 py-3'>

				<div className='flex flex-row justify-start px-2 '>
					<div className='flex justify-start md:hidden' onClick={expandMenu}>
						<Bars3Icon />
					</div>

					<div id='app-name' className='flex mx-2 px-2 py-2 font-extrabold bg-white shadow dark:bg-neutral-900 rounded items-center justify-center'>
						<p className='flex'>What Not to Where App</p>
					</div>


					<div id='router-buttons' className='hidden md:visible md:flex flex-row items-center md:justify-start sm:justify-items-center'>
						<ul className='md:flex flex flex-row justify-around'>
							{navigation.map((item) => (
								<Link className='flex px-2 mx-2 dark:text-white bg-white hover:bg-gray-100 text-gray-500 dark:bg-gray-700 font-normal rounded dark:hover:bg-gray-800' key={item.id} href={item.href}> {item.name} </Link>
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

			</div>

				{displayCurrentCity(props.currentCity, props.openMeteoDataState)}

				<div id ='search-form' className='flex justify-center items-center dark:bg-gray-800'>

					<form className= 'flex sm:flex-row flex-col sm:justify-center gap-2 items-end ' method='get' onSubmit={onSubmit}>
						<input
							className='mx-2 px-2 text-black border-gray-200 border-2 w-32'
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



