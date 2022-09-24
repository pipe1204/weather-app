import React from 'react'
import weather from "../../assets/season.png"

const Loading = () => {
  return (
    <div className='loading__container'>
        <img className="loading__icon" src={weather}/>
    </div>
  )
}

export default Loading