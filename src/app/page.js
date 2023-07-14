// noinspection SpellCheckingInspection

"use client";
import React, { useState, useEffect } from 'react'
import Navbar from "../Components/Navbar"
import WeatherSection from "../Components/WeatherSection";
import pingAllWeatherAPIs from "@/API-Calls/pingAllWeatherAPIs";
import DetailedTable from "@/Components/DetailedTable";
import '../app/globals.css'
import Footer from "@/Components/Footer";
import {useSearchParams} from "next/navigation";



export default function Home(props) {
  const [openMeteoDataState, setopenMeteoDataState] = useState('loading');
  const [openMeteoData, setOpenMeteoData] = useState({});
  const [openMeteoDetailedView, setOpenMeteoDetailedView] = useState(false)
  const [openMeteoAirQualityView, setOpenMeteoAirQualityView] = useState(false)

  const [openWeatherState, setOpenWeatherState] = useState('loading');
  const [openWeatherMapData, setOpenWeatherMapData] = useState({});
  const [openWeatherMapDetailedView, setOpenWeatherMapDetailedView] = useState(false)

  const [weatherAPIState, setWeatherAPIState] = useState('loading');
  const [weatherAPIData, setWeatherAPIData] = useState({});
  const [weatherApiDetailedView, setWeatherApiDetailedView] = useState(false)

  const [citySelection, setCitySelection ] = useState('');

  const searchParams = useSearchParams()

  const updateCitySelection = (city) => {
    setCitySelection(city)
  }

  //OpenMeteo
  useEffect(() => {
    setopenMeteoDataState('loading');
    if (citySelection) {
      pingAllWeatherAPIs(citySelection)
        .then((res) => {
            if (res.openMeteoForecast) {
              setopenMeteoDataState('success');
              setOpenMeteoData(res.openMeteoForecast);
            } else {
              setopenMeteoDataState('error');
              console.log('the open meteo state is error')
              console.log(openMeteoDataState)
            }
          })
      .catch((err) => {
        // console.log('Error:',err);
        setopenMeteoDataState('error');
        throw(err);
      })}
  },[citySelection]);
  function updateOpenMeteoDetailedView(){
    if (openMeteoDetailedView === true) {
      setOpenMeteoDetailedView(false)
    } else {
      setOpenMeteoDetailedView(true)
    }
  }
  function updateOpenMeteoAirQualityView(){
    if (openMeteoAirQualityView === true) {
      setOpenMeteoAirQualityView(false)
    } else {
      setOpenMeteoAirQualityView(true)
    }
  }

  //OpenWeatherMap
  useEffect(() => {
    setOpenWeatherState('loading');

    if (citySelection) {
      pingAllWeatherAPIs(citySelection)
        .then((res) => {
          if (res.openWeatherMapForcast) {
            setOpenWeatherState('success');
            setOpenWeatherMapData(res.openWeatherMapForcast);
          }
        })
        .catch((err) => {
          // console.log('Error:',err);
          setOpenWeatherState('error')
          throw(err);
        })}
  },[citySelection]);
  function updateOpenWeatherMapDetailedView(){
    if (openWeatherMapDetailedView === true) {
      setOpenWeatherMapDetailedView(false)
    } else {
      setOpenWeatherMapDetailedView(true)
    }
  }

  //WeatherAPI
  useEffect(() => {
    setWeatherAPIState('loading');

    if (citySelection) {
      pingAllWeatherAPIs(citySelection)
        .then((res) => {
          if (res.weatherAPIForecast) {
            setWeatherAPIState('success');
            setWeatherAPIData(res.weatherAPIForecast);
          }
        })
        .catch((err) => {
          setWeatherAPIState('error')
          console.log('the weather API state is error')
          console.log(weatherAPIDataState)

        })}
  },[citySelection]);
  function updateWeatherAPIDetailedView(){
    if (weatherApiDetailedView === true) {
      setWeatherApiDetailedView(false)
    } else {
      setWeatherApiDetailedView(true)
    }
  }


  useEffect(() => {
      if (searchParams.get('city')) {
        updateCitySelection(searchParams.get('city'))
      } else  {
        updateCitySelection('')
      }
    }, [searchParams.get('city')])


  return (
    <>
      <nav className=''>
        <Navbar
          updateCitySelection = {updateCitySelection}
          currentCity = {citySelection}
          openMeteoDataState = {openMeteoDataState}
          openWeatherMapState = {openWeatherState}
          weatherAPIState = {weatherAPIState}

          openMeteoData = {openMeteoData}
          weatherAPIData = {weatherAPIData}
          openWeatherMap = {openWeatherMapData}

        />
      </nav>

      <main className="flex flex-col gap-8 my-4 py-20">

        {/* Open Meteo Weather*/}
        <div className='flex flex-col justify-center items-center pt-16 '>

          <WeatherSection
            source = "Open Meteo Weather"
            sourceState = {openMeteoDataState}
            currentForecast = { openMeteoDataState === 'success' ?
              {
                currentTemp: `${openMeteoData.currentForecast.currentTemp}°`,
                weather: openMeteoData.currentForecast.weather,
                windSpeed: `${openMeteoData.currentForecast.windSpeed} mph`
              } : 'loading'
            }

            airQualityButton = {true}

            updateDetailedViewButton = {updateOpenMeteoDetailedView}
            updateAirQuaityButton = {updateOpenMeteoAirQualityView}
          />

          <div className='flex'>

            <DetailedTable
              weather = {openMeteoDataState === 'success' ? openMeteoData.hourlyForecast.hourlyWeather : null}
              onOff = {openMeteoDetailedView}
            />

          </div>

            <div className='flex'>

            <DetailedTable
              weather = {openMeteoDataState === 'success' ? openMeteoData.hourlyForecast.hourlyAQI : null}
              onOff = {openMeteoAirQualityView}
            />

          </div>

        </div>

        {/* OpenWeather Map*/}
        <div className='flex flex-col justify-center items-center'>

          <WeatherSection
            source = "Open Weather Map"
            sourceState = {openWeatherState}
            sourceData = {openWeatherMapData.currentForecast}
            currentForecast = { openWeatherState === 'success' ?
              {
                feelsLikeTemp: `${openWeatherMapData.currentForecast.feelsLike}°`,
                lowTemp: `${openWeatherMapData.currentForecast.minTemp}°`,
                highTemp: `${openWeatherMapData.currentForecast.maxTemp}°`,
                humidity: openWeatherMapData.currentForecast.humidity,
                windSpeed: `${openWeatherMapData.currentForecast.windSpeed} mph`,
                sunrise: openWeatherMapData.currentForecast.sunrise,
                sunset: openWeatherMapData.currentForecast.sunset,
              } : 'loading'
            }
            airQualityButton = {false}

            updateDetailedViewButton = {updateOpenWeatherMapDetailedView}

          />


          <div className='flex'>

            <DetailedTable
              weather = {openWeatherState === 'success' ? openWeatherMapData.hourlyForecast: null}
              onOff = {openWeatherMapDetailedView}
            />
          </div>

        </div>

        {/* Weather API*/}
        <div className='flex flex-col justify-center items-center'>

            <WeatherSection
              source = "Weather API"
              sourceState = {weatherAPIState}
              sourceData = {weatherAPIData.currentForecast}
              currentForecast = { weatherAPIState === 'success' ?
                {
                  currentTemp: `${weatherAPIData.currentForecast.temperature}°` ,
                  feelsLikeTemp:  `${weatherAPIData.currentForecast.feelsLikeTemp}°`,
                  weather:  weatherAPIData.currentForecast.weather,
                  humidty:  weatherAPIData.currentForecast.humidity,
                  windSpeed:  `${weatherAPIData.currentForecast.windSpeed} mph`
                } : 'loading'
              }
              airQualityButton = {false}
              updateDetailedViewButton = {updateWeatherAPIDetailedView}


            />



          <div className='flex'>

            <DetailedTable
              weather = {weatherAPIState === 'success' ? weatherAPIData.hourlyForecast : null}
              onOff = {weatherApiDetailedView}
            />

          </div>

        </div>

      </main>

      <Footer />
    </>
  )
}
