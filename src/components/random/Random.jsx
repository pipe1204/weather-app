import React, { useState } from 'react'
import "../card/card.css"
import Icon from '../icon/Icon'

const Random = ({city, randomCity}) => {

    const [isFarenheit, setIsFarenheit] = useState(true)

    let celcius = Math.floor((city?.main.temp - 32) * 5/9)
    
    // Function to change scale
    function handleChange() {
      setIsFarenheit(prevState => !prevState)
    }
    
  return (
    <div className={`card ${city?.weather[0].main}`}>
      <button className='randomPick__button gradient__background' onClick={randomCity}>Change city</button>
      <header className="card__header">
        <h1>{city?.name}</h1>
        <h2>{city?.sys.country}</h2>
        <Icon 
            icon={city?.weather[0].icon}
            forecast={city?.weather[0].main}
        />
      </header>
      <div className="card__body">
        <div className="card__body-temp">
          <h2>Humidity</h2>
          <p>{city?.main.humidity}</p>
        </div>
        <div className="card__body-temp">
          <h2>Temperature {isFarenheit ? "°F" : "°C"}</h2>
          <p>{isFarenheit ? city?.main.feels_like : celcius}</p>
        </div>
        <div className="card__body-temp">
          <h2>Feels like {isFarenheit ? "°F" : "°C"}</h2>
          <p>{isFarenheit ? city?.main.feels_like : celcius}</p>
        </div>
      </div>
      <button className="button__tempt gradient__background" onClick={handleChange}>Change Scale</button>
    </div>
  )
}

export default Random