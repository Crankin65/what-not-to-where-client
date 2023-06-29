// noinspection SpellCheckingInspection

"use client";
import React, { useState, useEffect } from 'react'
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2"
import WeatherSection from "../Components/WeatherSection";
import {dummyWeatherObject} from "@/API-Calls/dummyWeatherObject";

import pingAllWeatherAPIs from "@/API-Calls/pingAllWeatherAPIs";

import DetailedTable from "@/Components/DetailedTable";

export default function Home() {
  const [openMeteoDataState, setopenMeteoDataState] = useState('loading');
  const [openMeteoData, setOpenMeteoData] = useState({});
  const [openMeteoDetailedView, setOpenMeteoDetailedView] = useState(false)

  const [openWeatherState, setOpenWeatherState] = useState('loading');
  const [openWeatherMapData, setOpenWeatherMapData] = useState({});
  const [openWeatherMapDetailedView, setOpenWeatherMapDetailedView] = useState(false)

  const [weatherAPIState, setWeatherAPIState] = useState('loading');
  const [weatherAPIData, setWeatherAPIData] = useState({});
  const [weatherApiDetailedView, setWeatherApiDetailedView] = useState(false)

  const [citySelection, setCitySelection ] = useState('');
  const [coordinates, setCoordinates] = useState([])

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
          // console.log('Error:',err);
          setWeatherAPIState('error')
          throw(err)
        })}
  },[citySelection]);
  function updateWeatherAPIDetailedView(){
    if (weatherApiDetailedView === true) {
      setWeatherApiDetailedView(false)
    } else {
      setWeatherApiDetailedView(true)
    }
  }


  async function createCurrentForecastObjects() {

      let openMeteoCurrentForecastObject = {}

      openMeteoCurrentForecastObject = {
        currentTemp: openMeteoData.currentForecast.currentTemp,
        weather: openMeteoData.currentForecast.weather,
        windSpeed: openMeteoData.currentForecast.windSpeed
      }


    if (openWeatherState === 'success') {
      let openWeatherMapCurrentForecastObject = {}

      openWeatherMapCurrentForecastObject = {
        feelsLikeTemp: openWeatherMapData.currentForecast.feelsLike,
        lowTemp: openWeatherMapData.currentForecast.minTemp,
        highTemp: openWeatherMapData.currentForecast.maxTemp,
        humidity: openWeatherMapData.currentForecast.humidity,
        windSpeed: openWeatherMapData.currentForecast.windSpeed,
        sunrise: openWeatherMapData.currentForecast.sunrise,
        sunset: openWeatherMapData.currentForecast.sunset,
      }
    }

    let currentForecastObject = {}

    currentForecastObject = {
      openMeteoCurrentForecast: openMeteoCurrentForecastObject ,
      openWeatherMapCurrentForecast: openWeatherMapCurrentForecastObject,
      weatherAPICurrentForecast:  {
        currentTemp: await weatherAPIData.currentForecast.temperature,
        feelsLikeTemp: await weatherAPIData.currentForecast.feelsLikeTemp,
        weather: await weatherAPIData.currentForecast.weather,
        humidty: await weatherAPIData.currentForecast.humidity,
        windSpeed: await weatherAPIData.currentForecast.windSpeed
      }

    }
    console.log('------')
    console.log(currentForecastObject.weatherAPICurrentForecast)
    return currentForecastObject
  }


  return (
    <>
      <nav className='mx-0  px-0 sm:px-6 lg:px-8'>
        <Navbar />
        <Navbar2
          updateCitySelection = {updateCitySelection}
          currentCity = {citySelection}
          weatherAPIData = {weatherAPIData}

        />
      </nav>

      <main className="flex flex-col gap-8 py-8">

        {/* Open Meteo Weather*/}
        <div className='flex flex-col justify-center items-center'>

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

            detailedViewButton = {updateOpenMeteoDetailedView}
          />

          <div className='flex'>

            <DetailedTable
              // weather = {openMeteoData}
              weather = {openMeteoData.hourlyForecast}
              detailedView = {openMeteoDetailedView}
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
            detailedViewButton = {updateOpenWeatherMapDetailedView}

          />


          <div className='flex'>

            <DetailedTable
              weather = {dummyWeatherObject}
              detailedView = {openWeatherMapDetailedView}
            />
          </div>

        </div>

        {/* Weather API*/}
        <div className='flex flex-col justify-center items-center'>

            <WeatherSection
              source = "Weather API"
              sourceState = {weatherAPIState}
              sourceData = {weatherAPIData.currentForecast}
              detailedViewButton = {updateWeatherAPIDetailedView}
              currentForecast = { weatherAPIState === 'success' ?
                {
                  currentTemp: `${weatherAPIData.currentForecast.temperature}°` ,
                  feelsLikeTemp:  `${weatherAPIData.currentForecast.feelsLikeTemp}°`,
                  weather:  weatherAPIData.currentForecast.weather,
                  humidty:  weatherAPIData.currentForecast.humidity,
                  windSpeed:  `${weatherAPIData.currentForecast.windSpeed} mph`
                } : 'loading'
              }

            />



          <div className='flex'>

            <DetailedTable
              weather = {dummyWeatherObject}
              detailedView = {weatherApiDetailedView}
            />

          </div>

        </div>

      </main>
    </>
  )
}
