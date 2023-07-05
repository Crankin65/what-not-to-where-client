import React, {useState, Fragment, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {SunIcon} from '../Icons/Tailwind Icons'
import rain from '../Icons/weatherIcons/icons8-rain.gif'
import storm from '../Icons/weatherIcons/icons8-storm.gif'
import snow from '../Icons/weatherIcons/icons8-light-snow.gif'
import sun from '../Icons/weatherIcons/icons8-sun.gif'
import overcast from '../Icons/weatherIcons/icons8-partly-cloudy-day-50.png'

import IconGenerator from "@/HelperFunctions/iconGenerator";
import WeatherDescription from "@/HelperFunctions/WeatherDescription";
import Image from "next/image";

export default function ClothingModal2(props) {
	const [clothingModalStatus, setClothingModalStatus] = useState(false);

	function updateModalStatus() {
		clothingModalStatus ? setClothingModalStatus(false) : setClothingModalStatus(true)
	}

	function modalWeatherIcon() {
		if (props.openMeteoData.currentForecast.weather.includes('Rain') || props.openMeteoData.currentForecast.weather.includes('Drizzle')) {
			return (
				<>
					<Image
						src={rain}
						width={50}
						height={50}
						alt="Picture of the author"
					/>
				</>
			)
		} else if  (props.openMeteoData.currentForecast.weather.includes('Thunderstorm')) {
			console.log('------')
			console.log(props.openMeteoData)
			return (
				<>
					<Image
						src={storm}
						width={50}
						height={50}
						alt="Picture of the author"
					/>
				</>
			)
		} else if  (props.openMeteoData.currentForecast.weather.includes('Snow')) {
			return (
				<>
					<Image
						src={snow}
						width={50}
						height={50}
						alt="Picture of the author"
					/>
				</>
			)
		} else if  (props.openMeteoData.currentForecast.weather.includes('Overcast')) {
			return (
				<>
					<Image
						src={overcast}
						width={50}
						height={50}
						alt="Picture of the author"
					/>
				</>
			)
		} else {
			return (
				<>
					<Image
						src={sun}
						width={50}
						height={50}
						alt="Picture of the author"
					/>
				</>
			)
		}


	}
	return (
		<div>
			<button className='btn flex px-2 mx-2 text-white bg-gray-700 font-normal rounded hover:bg-gray-800' onClick={updateModalStatus}>What Should I Wear?</button>

			<Transition.Root show={clothingModalStatus} as={Fragment}>
				<Dialog as="div" className="relative z-10"  onClose={setClothingModalStatus}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
									<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
										<div className="sm:flex sm:items-start">
											{/*<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">*/}
											{/*	/!*<ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />*!/*/}

											<div className='flex rounded'	>
												<div className=' flex justify-start border-gray-600'>
													{/*<SunIcon className=' flex fill-amber-400' />*/}
													{modalWeatherIcon()}
												</div>
											</div>

											{/*</div>*/}
											<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
												<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
													According to our data, the current temperature feels like: &nbsp;
													{props.weatherAPIState === 'success' ? props.weatherAPIData.currentForecast.feelsLikeTemp : null}° and &nbsp;
													{props.openWeatherMapState === 'success' ? props.openWeatherMapData.currentForecast.feelsLike : null}°
												</Dialog.Title>

												<div className="mt-2">
													<p className="text-sm text-gray-500">
														{props.weatherAPIState === 'success' && props.openWeatherMapState === 'success' ?
															<WeatherDescription
																openMeteoCurrentForecastData = {props.openMeteoData.currentForecast}

																weatherAPICurrentForecastData = {props.weatherAPIData.currentForecast}
																openWeatherMapFeelsLike = {props.openWeatherMapData.currentForecast.feelsLike}
															/>

															: null }
														{/*Are you sure you want to deactivate your account? All of your data will be permanently*/}
														{/*removed. This action cannot be undone.*/}
													</p>
												</div>

												<div className='flex flex-row justify-center mx-4'>
													{props.weatherAPIState === 'success' && props.openWeatherMapState === 'success' ?
														<IconGenerator
															openMeteoCurrentForecastData = {props.openMeteoData.currentForecast}
															weatherAPICurrentForcastData = {props.weatherAPIData.currentForecast}
															openWeatherMapFeelsLike = {props.openWeatherMapData.currentForecast.feelsLike}
														/>

														: null }
												</div>

											</div>
										</div>



									</div>
									<div className="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
										<button
											type="button"
											className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
											onClick={() => setClothingModalStatus(false)}
										>
											Close
										</button>
										{/*<button*/}
										{/*	type="button"*/}
										{/*	className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"*/}
										{/*	onClick={() => setClothingModalStatus(false)}*/}
										{/*>*/}
										{/*	Cancel*/}
										{/*</button>*/}
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	)


}


//
// return (
// 	<>
// 		<button className='btn flex px-2 mx-2 text-white bg-gray-700 font-normal rounded hover:bg-gray-800' onClick={updateModalStatus}>What Should I Wear modal?</button>
//
// 		{clothingModalStatus ? (
// 			<>
// 				<div className='modal bg-gray-300'>
// 					<form method="dialog" className="modal-box ">
// 						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={updateModalStatus}>✕</button>
// 						<h3 className="font-bold text-lg">It feels like: XXdegrees </h3>
// 						<p className="py-4">You should bring a:</p>
// 						<Image
// 							src= {tanktopIcon}
// 							width={50}
// 							height={50}
// 							alt="Picture of the author"
// 						/>
// 					</form>
// 				</div>
// 			</>
// 		) : null}
// 	</>
// )

