import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { saveToStorage, loadFromStorage } from '../services/functions'

import Forecast from '../components/Forecast'
import Loader from '../components/Loader';
import SelectCity from '../components/SelectCity'
import CityData from '../components/CityData'


const API_WEATHER = (location) => `https://www.metaweather.com/api/location/${location}/`

export default function Home() {
    const [data, setData] = useState(null)


    const getWeather = async (city) => {
        try {
            const { data } = await axios.get(API_WEATHER(city))
            saveToStorage('data', data)
            setData(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const city = loadFromStorage('data') ? loadFromStorage('data').woeid : '615702'
        getWeather(city);
    }, []);

    const handleChange = async (e) => {
        const selectCity = e.target.value;
        await getWeather(selectCity)
    }

    if (!data) return <Loader />;

    return (
        <>
            <SelectCity handleChange={handleChange} />
            <CityData data={data} />
            <Forecast data={data} />
        </>
    )
}
