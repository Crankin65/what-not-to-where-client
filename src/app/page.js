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
              console.log(openMeteoData)
              setOpenMeteoData(res.openMeteoForecast);
            }
          })
      .catch((err) => {
        // console.log('Error:',err);
        setopenMeteoDataState('error');
      })}
  },[citySelection]);
  function updateOpenMeteoDetailedView(){
    if (openMeteoDetailedView === true) {
      setOpenMeteoDetailedView(false)
    } else {
      setOpenMeteoDetailedView(true)
    }
  }

  function returnOpenMeteoCurrentTemp(){
    if (openMeteoDataS === 'loading') {
      return 'loading'
    } else if (!openMeteoData.currentForecast) {
      return 'Failed Check'
    } else {
      return openMeteoData.currentForecast.currentTemp
    }
  }

  //OpenWeatherMap
  // useEffect(() => {
  //   setOpenWeatherState('loading');
  //   if (citySelection) {
  //     getCoordinates(citySelection)
  //       .then((res) => {
  //         // console.log('after get corodinates')
  //         // console.log(res)
  //         weatherCheckOpenWeather(res)
  //           .then((res)=> {
  //             // console.log('final res')
  //             // console.log(res)
  //             if (res) {
  //               setOpenWeatherState('success');
  //               setOpenWeatherMap(res);
  //             }
  //           })
  //       })
  //       .catch((err) => {
  //         // console.log('Error:',err);
  //         setOpenWeatherState('error',err);
  //     })}
  // },[citySelection]);

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
  // useEffect(() => {
  //   setWeatherAPIState('loading');
  //   weatherAPICheck(citySelection)
  //     .then((res) => {
  //       console.log(res)
  //       setWeatherAPIState('success');
  //       setWeatherAPI(res);
  //     })
  //     .catch((err) => {
  //       // console.log('Error:',err);
  //       setWeatherAPIState('error');
  //     })
  // },[citySelection]);

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
        })}
  },[citySelection]);
  function updateWeatherAPIDetailedView(){
    if (weatherApiDetailedView === true) {
      setWeatherApiDetailedView(false)
    } else {
      setWeatherApiDetailedView(true)
    }
  }


  return (
    <>
      <nav className='mx-0  px-0 sm:px-6 lg:px-8'>
        <Navbar />
        <Navbar2
          updateCitySelection = {updateCitySelection}
          currentCity = {citySelection}

        />
      </nav>

      <main className="flex flex-col gap-8 py-8">

        {/* Open Meteo Weather*/}
        <div className='flex flex-col justify-center items-center'>

          <WeatherSection
            source = "Open Meteo Weather"
            // currentTemp = {returnOpenMeteoCurrentTemp}
            detailedViewButton = {updateOpenMeteoDetailedView}
            // currentTemp = {openMeteoDataState === 'loading' ? 'loading' : console.log(openMeteoData)}
            // weather = {openMeteoDataState === 'loading' ? 'loading' : 'loaded'}
            currentTemp = {openMeteoDataState === 'loading' ? 'loading' : openMeteoData.currentForecast.currentTemp}
            weather = {openMeteoDataState === 'loading' ? 'loading' : openMeteoData.currentForecast.weather}
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
            currentTemp = {openWeatherState === 'loading' ? 'loading' : openWeatherMapData.currentWeather.feels_like}
            // currentTemp = {openWeatherState === 'loading' ? 'loading' : openMeteoData.currentWeather.feels_like}
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
              currentTemp = {weatherAPIState === 'loading' ? 'loading' : weatherAPIData.currentForecast.temperature}
              detailedViewButton = {updateWeatherAPIDetailedView}

              // highTemp = {weatherAPIState === 'loading' ? 'loading' : weatherAPI.weather.maxTemp}
              // lowTemp = {weatherAPIState === 'loading' ? 'loading' : weatherAPI.weather.minTemp}
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
