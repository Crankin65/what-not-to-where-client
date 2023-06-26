"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar(draft)"
import WeatherSection from "../Components/WeatherSection";

import weatherCheckOpenMeteo from "../API-Calls/OpenMeteoWeatherCall";
import weatherCheckOpenWeather from "../API-Calls/OpenWeatherMapCall";
import weatherAPICheck from "../API-Calls/WeatherAPICall";

import getCoordinates from "../API-Calls/getCoordinates";

export default function Home() {
  const [openMeteoDataState, setopenMeteoDataState] = useState('loading');
  const [openMeteoData, setOpenMeteoData] = useState({});

  const [openWeatherState, setOpenWeatherState] = useState('loading');
  const [openWeatherMap, setOpenWeatherMap] = useState({});

  const [weatherAPIState, setWeatherAPIState] = useState('loading');
  const [weatherAPI, setWeatherAPI] = useState({});

  const [citySelection, setCitySelection ] = useState('');
  const [coordinates, setCoordinates] = useState([])

  const updateCitySelection = (city) => {
    setCitySelection(city)
  }

  useEffect(() => {
    setopenMeteoDataState('loading');
    getCoordinates(citySelection)
      .then((res) => {
        weatherCheckOpenMeteo(res)
          .then((res) => {
            if (res) {
              setopenMeteoDataState('success');
              setOpenMeteoData(res);
            }
          })
      })

      .catch((err) => {
        // console.log('Error:',err);
        setopenMeteoDataState('error');
      })
  },[citySelection]);

  useEffect(() => {
    setOpenWeatherState('loading');
    getCoordinates(citySelection)
      .then((res) => {
        // console.log('after get corodinates')
        // console.log(res)
        weatherCheckOpenWeather(res)
          .then((res)=> {
            // console.log('final res')
            // console.log(res)
            if (res) {
              setOpenWeatherState('success');
              setOpenWeatherMap(res);
            }
          })
      })
      .catch((err) => {
        // console.log('Error:',err);
        setOpenWeatherState('error',err);
      })
  },[citySelection]);

  useEffect(() => {
    setWeatherAPIState('loading');
    weatherAPICheck(citySelection)
      .then((res) => {
        console.log(res)
        setWeatherAPIState('success');
        setWeatherAPI(res);
      })
      .catch((err) => {
        // console.log('Error:',err);
        setWeatherAPIState('error');
      })
  },[citySelection]);



  return (
    <>
      <nav className='mx-0  px-0 sm:px-6 lg:px-8'>
        <Navbar />
        <Navbar2 />
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <WeatherSection
          source = "Open Meteo Weather"
          // highTemp = {openMeteoDataState === 'loading' ? 'loading' : openMeteoData.weather.daily.temperature_2m_max[0]}
          // lowTemp = {openMeteoDataState === 'loading' ? 'loading' : openMeteoData.weather.daily.temperature_2m_min[0]}
        />

        <WeatherSection
          source = "Open Weather Map"
          // highTemp = {openWeatherState === 'loading' ? 'loading' : openWeatherMap.weather.maxTemp}
          // lowTemp = {openWeatherState === 'loading' ? 'loading' : openWeatherMap.weather.minTemp}
        />

        <WeatherSection
          source = "Weather API"
          // highTemp = {weatherAPIState === 'loading' ? 'loading' : weatherAPI.weather.maxTemp}
          // lowTemp = {weatherAPIState === 'loading' ? 'loading' : weatherAPI.weather.minTemp}
        />

      </main>
    </>
  )
}
