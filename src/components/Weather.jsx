import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { getDate, windDirection } from '../services/functions'


const Forecast = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: auto;
    background-color: var(--clr2);
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: var(--clr6);

    &:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width: 768px) {
        margin: auto;
        width: 90%;
    }
`;

const Info = styled.h3``;

const Text = styled.p`
    margin:0
`;

const Img = styled.img`
    margin: 1rem 0;
`;


export default function Weather({ f }) {
    const { t } = useTranslation()

    return (
        <Forecast>
            <Info>{getDate(f.applicable_date)}</Info>
            <Text>{t(`${f.weather_state_abbr}`)}</Text>
            <Img src={`https://www.metaweather.com/static/img/weather/png/64/${f.weather_state_abbr}.png`} alt="icon" />
            <Text>{t('data_max')} : {parseInt(f.max_temp)}°C</Text>
            <Text>{t('data_min')} : {parseInt(f.min_temp)}°C</Text>
            <Text>{windDirection(f.wind_direction_compass)} {parseInt(f.wind_speed)} km/h</Text>
            <Info>{t('data_humidity')}</Info>
            <Text>{f.humidity}%</Text>
            <Info>{t('data_visibility')}</Info>
            <Text>{f.visibility.toFixed(1)} km</Text>
            <Info>{t('data_pressure')}</Info>
            <Text>{parseInt(f.air_pressure)} mb</Text>
            <Info>{t('data_confidence')}</Info>
            <Text>{f.predictability} %</Text>
        </Forecast>
    )
}
