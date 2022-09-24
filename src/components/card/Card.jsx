import { useState } from "react"
import Icon from "../icon/Icon"
import "./card.css"

const Card = ({data}) => {

  const [isFarenheit, setIsFarenheit] = useState(true)

  let celcius = Math.floor((data?.main.temp - 32) * 5/9)

  // Function to change scale
  function handleChange() {
      setIsFarenheit(prevState => !prevState)
  }
  
  return (
    <div className={`card ${data?.weather[0].main}`}>
      <h1>Your Current City</h1>
      <header className="card__header">
        <h1>{data?.name}</h1>
        <h2>{data?.sys.country}</h2>
        <Icon 
            icon={data?.weather[0].icon}
            forecast={data?.weather[0].main}
        />
      </header>
      <div className="card__body">
        <div className="card__body-temp">
          <h2>Humidity</h2>
          <p>{data?.main.humidity}</p>
        </div>
        <div className="card__body-temp">
          <h2>Temperature {isFarenheit ? "°F" : "°C"}</h2>
          <p>{isFarenheit ? data?.main.feels_like : celcius}</p>
        </div>
        <div className="card__body-temp">
          <h2>Feels like {isFarenheit ? "°F" : "°C"}</h2>
          <p>{isFarenheit ? data?.main.feels_like : celcius}</p>
        </div>
      </div>
      <button className="button__tempt gradient__background" onClick={handleChange}>Change Scale</button>
    </div>
  )
}

export default Card