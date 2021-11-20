import React from 'react'
import { useTranslation } from 'react-i18next'
import { getDate, windDirection } from '../services/weather-services'

export default function Weather({ f }) {
    const { t } = useTranslation()

    return (
        <>
            <div className="title-info">
                <h4>{getDate(f.applicable_date)}</h4>
            </div>
            <div className="title-info icon">
                <img src={`https://www.metaweather.com//static/img/weather/png/64/${f.weather_state_abbr}.png`} alt="img" />
                <p>{t(`${f.weather_state_abbr}`)}</p>
            </div>
            <div className="title-info">
                <p>{t('data_max')} : {parseInt(f.max_temp)}°C</p>
                <p>{t('data_min')} : {parseInt(f.min_temp)}°C</p>
            </div>
            <div className="title-info">
                <p>{windDirection(f.wind_direction_compass)} {parseInt(f.wind_speed)} km/h</p>
            </div>
            <div className="title-info">
                <h4>{t('data_humidity')}</h4>
                <p>{f.humidity}%</p>
            </div>
            <div className="title-info">
                <h4>{t('data_visibility')}</h4>
                <p>{f.visibility.toFixed(1)} km</p>
            </div>
            <div className="title-info">
                <h4>{t('data_pressure')}</h4>
                <p>{parseInt(f.air_pressure)} mb</p>
            </div>
            <div className="title-info">
                <h4>{t('data_confidence')}</h4>
                <p>{f.predictability} %</p>
            </div>
        </>
    )
}
