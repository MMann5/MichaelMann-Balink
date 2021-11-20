import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Weather from './Weather'

export default function Forecast({ data }) {
    const [forecasts, setForecasts] = useState([])

    useEffect(() => {
        const forecastData = data.consolidated_weather.map(f => {
            return ({
                id: f.id,
                weather_state_abbr: f.weather_state_abbr,
                applicable_date: f.applicable_date,
                weather_state_name: f.weather_state_name,
                min_temp: f.min_temp,
                max_temp: f.max_temp,
                wind_direction_compass: f.wind_direction_compass,
                wind_speed: f.wind_speed,
                humidity: f.humidity,
                visibility: f.visibility,
                air_pressure: f.air_pressure,
                predictability: f.predictability
            })
        })
        setForecasts(forecastData)
    }, [data])

    return (
        <section className="container">
            {forecasts.map((f, idx) => (
                <Link to={`/city/about/${f.id}`} key={idx} className="forecast forecast-link">
                    <Weather f={f} />
                </Link>
            ))}
        </section>
    )
}
