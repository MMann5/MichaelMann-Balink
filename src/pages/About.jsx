import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'

import { loadFromStorage } from '../services/functions'

import BackBtn from '../components/BackBtn'
import Weather from '../components/Weather'
import Sources from '../components/Sources'
import CityTitle from '../components/CityTitle'


const Wrapper = styled.div`
    display: flex;      
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-evenly;
        margin-top: 20px;
    }   
`;


export default function About() {
    const [data, setData] = useState(null)
    const { t } = useTranslation()

    const location = useLocation()
    const id = location.pathname.split('/')[3]

    useEffect(() => {
        const city = loadFromStorage('data')
        setData(city)
    }, []);

    const renderPrevision = (data, id) => {
        let prevision = data.consolidated_weather.filter(f => f.id === parseInt(id))[0]
        return (
            <Link to={`/`}>
                <Weather f={prevision} />
            </Link>
        )
    }

    if (!data) return <div>{t('loading_data')}</div>

    return (
        <>
            <BackBtn />
            <CityTitle city={data} />
            <Wrapper>
                {renderPrevision(data, id)}
                <Sources data={data} />
            </Wrapper >
        </>
    )
}