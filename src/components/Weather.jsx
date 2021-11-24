import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import { getDate, windDirection } from '../services/functions'


const ForecastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: auto;
    background-color: var(--clr2);
    border-radius: var(--borderRad2);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: var(--clr1);

    &:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width: 1800px) {
        width: 180px;
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
    const { date, state, min, max, direction, speed, humidity, visibility, pressure, predictability } = f

    return (
        <ForecastWrapper>
            <Info>{getDate(date)}</Info>
            <Text>{t(`${state}`)}</Text>
            <Img src={`https://www.metaweather.com/static/img/weather/png/64/${state}.png`} alt="icon" />
            <Text>{t('data_max')} : {parseInt(max)}°C</Text>
            <Text>{t('data_min')} : {parseInt(min)}°C</Text>
            <Text>{windDirection(direction)} {parseInt(speed)} km/h</Text>
            <Info>{t('data_humidity')}</Info>
            <Text>{humidity}%</Text>
            <Info>{t('data_visibility')}</Info>
            <Text>{visibility.toFixed(1)} km</Text>
            <Info>{t('data_pressure')}</Info>
            <Text>{parseInt(pressure)} mb</Text>
            <Info>{t('data_confidence')}</Info>
            <Text>{predictability} %</Text>
        </ForecastWrapper>
    )
}
