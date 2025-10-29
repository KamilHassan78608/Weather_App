import React from 'react'
import Card from './card'

const MainPage = () => {
    return (
        <>
            <div className='flex flex-col items-center mt-40'>
                <h1 className="weather-title">Weather Forecast</h1>
                <p className="weather-subtitle">View live weather updates anywhere, anytime.</p>
            </div>
            <Card />
        </>
    )
}

export default MainPage
