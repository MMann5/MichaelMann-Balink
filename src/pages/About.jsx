import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { loadFromStorage } from '../services/weather-services'
import weather from '../assets/icon/weather.png'
import Weather from '../components/Weather'

export default function About() {
    const [data, setData] = useState(null)
    const { t } = useTranslation()

    const location = useLocation()
    let { pathname } = location
    pathname = pathname.split('/')
    const id = pathname[pathname.length - 1]

    useEffect(() => {
        const city = loadFromStorage('data')
        setData(city)
    }, []);

    const renderPrevision = (data, id) => {
        let prevision = data.consolidated_weather.filter(f => f.id === parseInt(id))[0]
        return (
            <div className="forecast forecast-weather">
                <Weather f={prevision} />
            </div>
        )
    }

    if (!data) return <div>{t('loading_data')}</div>

    return (
        <div className="about">
            <button className="go-back"><Link to="/">{t('back')}</Link></button>
            <h1>{data ? `${data.title}, ${data.parent.title}` : "..."}</h1>
            <div className="container container-about flex">
                {renderPrevision(data, id)}
                <div className="sources">
                    <h3>{t('sources_data')}</h3>
                    <ul>{data.sources.map((source, idx) => {
                        return (
                            <div className="icon-data flex" key={idx}>
                                <img src={weather} alt='icon' />
                                <li> <a href={source.url} target="_blank" rel="noreferrer">{source.title} </a></li>
                            </div>
                        )
                    })}</ul>
                </div>
            </div>
        </div >
    )
}