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
import DetailedTable from "@/Components/DetailedTable";

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

  //OpenMeteo
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

  //OpenWeatherMap
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

  //WeatherAPI
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

  const dummyWeatherObject = [{
    year: 2023,
    month: 6,
    date: 27,
    hour: 0,
    maxTemp: 90,
    minTemp: 72,
    humidity: 40,
    aqi: 10,
    weather: "cloudy"
  }, {
      year: 2023,
      month: 6,
      date: 27,
      hour: 1,
      maxTemp: 94,
      minTemp: 70,
      humidity: 43,
      aqi: 12,
      weather: "sunny"
    },{
    year: 2023,
    month: 6,
    date: 27,
    hour: 2,
    maxTemp: 99,
    minTemp: 74,
    humidity: 50,
    aqi: 19,
    weather: "sunny"
  }]

  return (
    <>
      <nav className='mx-0  px-0 sm:px-6 lg:px-8'>
        <Navbar />
        <Navbar2
          updateCitySelection = {updateCitySelection}

        />
      </nav>

      <main className="flex flex-col gap-8 py-8">

        <WeatherSection
          source = "Open Meteo Weather"
          currentTemp = {openMeteoDataState === 'loading' ? 'loading' : 'XX°'}
          weather = {dummyWeatherObject}

          // currentTemp = {openMeteoDataState === 'loading' ? 'loading' : openMeteoData.currentForecast.currentTemp}
          // highTemp = {openMeteoDataState === 'loading' ? 'loading' : openMeteoData.weather.daily.temperature_2m_max[0]}
          // lowTemp = {openMeteoDataState === 'loading' ? 'loading' : openMeteoData.weather.daily.temperature_2m_min[0]}
        />

        <DetailedTable
          weather = {dummyWeatherObject}
        />

        <WeatherSection
          source = "Open Weather Map"
          currentTemp = {openWeatherState === 'loading' ? 'loading' : 'XX°'}

          // highTemp = {openWeatherState === 'loading' ? 'loading' : openWeatherMap.weather.maxTemp}
          // lowTemp = {openWeatherState === 'loading' ? 'loading' : openWeatherMap.weather.minTemp}
        />

        <WeatherSection
          source = "Weather API"

          currentTemp = {weatherAPIState === 'loading' ? 'loading' : 'XX°'}

          // highTemp = {weatherAPIState === 'loading' ? 'loading' : weatherAPI.weather.maxTemp}
          // lowTemp = {weatherAPIState === 'loading' ? 'loading' : weatherAPI.weather.minTemp}
        />

      </main>
    </>
  )
}
