import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'

import { loadFromStorage } from '../services/functions'

import BackBtn from '../components/BackBtn'
import Weather from '../components/Weather'
import Sources from '../components/Sources'
import CityTitle from '../components/CityTitle'
import Loader from '../components/Loader'


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

    const location = useLocation()
    const id = location.pathname.split('/')[3]

    useEffect(() => {
        const city = loadFromStorage('data')
        setData(city)
    }, []);

    const renderPrevision = (id) => {
        const prevision = loadFromStorage('forecasts')
        const day = prevision.filter(f => f.id === parseInt(id))[0]
        return (
            <Link to={`/`}>
                <Weather f={day} />
            </Link>
        )
    }

    if (!data) return <Loader />

    return (
        <>
            <BackBtn />
            <CityTitle city={data} />
            <Wrapper>
                {renderPrevision(id)}
                <Sources data={data} />
            </Wrapper >
        </>
    )
}