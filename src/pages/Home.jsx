import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import Forecast from '../components/Forecast'
import { getHour, america, saveToStorage, loadFromStorage, asia, europe } from '../services/weather-services'
import Loader from '../components/Loader';

const API_WEATHER = (location) => `https://www.metaweather.com/api/location/${location}/`

export default function Home() {
    const [data, setData] = useState(null)
    const { t } = useTranslation()

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

    const getList = (array) => {
        return array.map((item, idx) => {
            return <option key={idx} value={item.value}>{item.name}</option>
        })
    }

    const getTimes = (title, data) => {
        return <h4><span className="data-block">{t(`${title}`)} :</span>{data ? getHour(data) : '...'}</h4>
    }


    useEffect(() => {
        const city = loadFromStorage('data') ? loadFromStorage('data').woeid : '615702'
        getWeather(city);
    }, []);

    const handleChange = async (e) => {
        const selectCity = e.target.value;
        await getWeather(selectCity)
    }


    // if (!data) return <div style={{ height: '80vh' }}>{t('loading_data')}</div>;
    if (!data) return <Loader />;

    return (
        <div className="home">
            <div className="city-choice flex">
                <div className="select">
                    <select defaultValue={'DEFAULT'} onChange={handleChange}>
                        <option value="DEFAULT" disabled>{t('select_city')}</option>
                        <option value="DEFAULT" disabled>{t('america')}</option>
                        {getList(america)}
                        <option value="DEFAULT" disabled>{t('europe')}</option>
                        {getList(europe)}
                        <option value="DEFAULT" disabled>{t('asia')}</option>
                        {getList(asia)}
                    </select>
                </div>
            </div>
            <div className="data">
                <div className="city-data block-data">
                    <h1>{data ? `${data.title}, ${data.parent.title}` : "..."}</h1>
                </div>
                <div className="sun-data block-data">
                    {getTimes('time_hour', data.time)}
                    {getTimes('time_sunrise', data.sun_rise)}
                    {getTimes('time_sunset', data.sun_set)}
                </div>
            </div>
            <Forecast data={data} />
        </div>
    )
}
