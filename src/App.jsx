import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { cities } from './utils/cities'
import { Card, Random } from "./components"
import Loading from './components/loading/Loading'

function App() {

    const [coordinates, setCoordinates] = useState()
    const [weatherData, setWeatherData] = useState()
    const [city, setCity] = useState(cities[Math.floor(Math.random() * cities.length)])
    const [weatherCity, setWeatherCity] = useState()

    // Getting coordinates
    useEffect(() => {

      function success(pos) {
      
        const coord = {
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        }
        
        setCoordinates(coord)
      }

      navigator.geolocation.getCurrentPosition(success)
    },[])

    //API request to retrieve the weather data for current location using coordinates
    useEffect(() => {
      
      if(coordinates) {
        const APIKey = "b8d4be1420fcaa09cdb97626256ea831"
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${APIKey}&units=metric`

        axios.get(URL)
      .then(res => setWeatherData(res.data))
      .catch(err => console.log(err))
      }
    },[coordinates])

    //Function to randomly pick another city from a city array
    function randomCity() {
      setCity(cities[Math.floor(Math.random() * cities.length)])
    }

    //API request to select and retrieve the weather data for a particular city
    useEffect(() => {
      if(city) {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8d4be1420fcaa09cdb97626256ea831&units=metric`

        axios.get(URL)
      .then(res => setWeatherCity(res.data))
      .catch(err => console.log(err))
      }
    },[city])

  return (
    <div className="App">
    {
      coordinates ? <Card 
        data={weatherData}
      /> 
      : 
      <Loading />
    }
    {
      coordinates ? <Random 
        city={weatherCity}
        randomCity={randomCity}
      /> 
      : 
      <Loading />
    }
    </div>
  )
}

export default App
