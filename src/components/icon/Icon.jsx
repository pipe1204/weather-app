import React from 'react'
import "../card/card.css"

const Icon = ({icon, forecast}) => {
  return (
    <div className='card__container-icon gradient__background-2'>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
        <p>{forecast}</p>
    </div>
  )
}

export default Icon