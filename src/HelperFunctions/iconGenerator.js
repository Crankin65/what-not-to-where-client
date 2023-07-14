import Image from 'next/image'
import React from 'react'
import closedUmbrella from '../Icons/ClothingIcons/icons8-closed-umbrella-24.png'
import openUmbrella from '../Icons/ClothingIcons/icons8-umbrella-50.png'
import jacket from '../Icons/ClothingIcons/icons8-jacket-50.png'
import jumper from '../Icons/ClothingIcons/icons8-jumper-50.png'
import longShorts from '../Icons/ClothingIcons/icons8-long-shorts-50.png'
import hoodie from '../Icons/ClothingIcons/icons8-mens-hoodie-50.png'
import raincoat from '../Icons/ClothingIcons/icons8-raincoat-50.png'
import slipDress from '../Icons/ClothingIcons/icons8-slip-dress-50.png'
import sweater from '../Icons/ClothingIcons/icons8-sweater-50.png'
import mensShirt from '../Icons/ClothingIcons/icons8-t-shirt-50.png'
import pants from '../Icons/ClothingIcons/icons8-trousers-50.png'
import womensShirt from '../Icons/ClothingIcons/icons8-womens-t-shirt-50.png'
import flipFlops from '../Icons/ClothingIcons/icons8-flip-flops-50.png'
import polo from '../Icons/ClothingIcons/icons8-polo-shirt-50.png'
import winterBoots from '../Icons/ClothingIcons/icons8-winter-boots-50.png'

export default function IconGenerator(props){
	function determineIcon() {
		let averageRealFeel = (props.weatherAPICurrentForecastData.feelsLikeTemp + props.openWeatherMapFeelsLike) / 2

		if (props.weatherAPICurrentForecastData.weather.toLowerCase().includes('rain') || props.openMeteoCurrentForecastData.weather.toLowerCase().includes('rain')
			||props.weatherAPICurrentForecastData.weather.toLowerCase().includes('drizzle') || props.weatherAPICurrentForecastData.weather.toLowerCase().includes('thunder')
			|| props.openMeteoCurrentForecastData.weather.toLowerCase().includes('drizzle') || props.openMeteoCurrentForecastData.weather.toLowerCase().includes('thunderstorm') )
		{
			return (
				<div className='flex'>
					<div className='flex'>
						<Image
							src= {openUmbrella}
							width={50}
							height={50}
							alt="Open Umbrella"
						/>
					</div>

					<div className='flex'>
						<Image
							src= {raincoat}
							width={50}
							height={50}
							alt="Raincoat"
						/>
					</div>
				</div>
			)
		} else if (averageRealFeel >= 85) {
			return (
				<div className='flex'>

					<div className='flex'>
						<Image
							src= {mensShirt}
							width={50}
							height={50}
							alt="Man's shirt"
						/>
					</div>

					<div className='flex'>
						<Image
							src= {womensShirt}
							width={50}
							height={50}
							alt="Woman's shirt"
						/>
					</div>
				</div>
			)
		}  else if (averageRealFeel >= 70 && averageRealFeel < 85) {
			return (
				<div className='flex'>

					<div className='flex'>
						<Image
							src= {slipDress}
							width={50}
							height={50}
							alt="Dress"
						/>
					</div>

					<div className='flex'>
						<Image
							src= {polo}
							width={50}
							height={50}
							alt="Polo"
						/>
					</div>
				</div>
			)
		} else if (averageRealFeel >= 55 && averageRealFeel < 70) {
			return (
				<div className='flex'>

					<div className='flex'>
						<Image
							src= {jumper}
							width={50}
							height={50}
							alt="Jumper"
						/>
					</div>

					<div className='flex'>
						<Image
							src= {pants}
							width={50}
							height={50}
							alt="Pants"
						/>
					</div>
				</div>
			)
		} else if (averageRealFeel < 54 || props.openMeteoData.currentForecast.weather.toLowerCase().includes('snow') || props.weatherAPICurrentForecastData.weather.toLowerCase().includes('snow') ) {
			return (
				<div className='flex'>

					<div className='flex'>
						<Image
							src= {jacket}
							width={50}
							height={50}
							alt="Jacket"
						/>
					</div>

					<div className='flex'>
						<Image
							src= {winterBoots}
							width={50}
							height={50}
							alt="Winter Boots"
						/>
					</div>
				</div>
			)
		}
	}
	return (
		<div className='flex  py-4 '>
			{determineIcon()}
		</div>
	)

}
