import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { saveToStorage } from '../services/functions'
import Weather from './Weather'


const WrapperForecast = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-evenly;
    margin: 0;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

export default function Forecast({ data }) {
    const [forecasts, setForecasts] = useState([])


    useEffect(() => {
        const forecastData = data.consolidated_weather.map((
            { id,
                weather_state_abbr: state,
                applicable_date: date,
                weather_state_name: name,
                min_temp: min,
                max_temp: max,
                wind_direction_compass: direction,
                wind_speed: speed,
                humidity,
                visibility,
                air_pressure: pressure,
                predictability
            }) => {
            return {
                id, state, date, name, min, max, direction, speed, humidity,
                visibility, pressure, predictability
            }
        })
        setForecasts(forecastData)
        saveToStorage('forecasts', forecastData)
    }, [data])


    return (
        <WrapperForecast>
            {forecasts.map((f, idx) => (
                <Link to={`/city/about/${f.id}`} key={idx}>
                    <Weather f={f}></Weather>
                </Link>
            ))}
        </WrapperForecast>
    )
}
