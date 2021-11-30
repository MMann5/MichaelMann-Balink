import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import { getHour } from '../services/functions'


const Wrapper = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;

const Title = styled.h3`
    color: var(--clr6);
    align-items: center;

    @media (max-width: 768px) {
        color: var(--clr1);
    }
`;


export default function CityTime({ city }) {
    const { time, sun_rise, sun_set } = city
    const { t } = useTranslation()

    const getTimes = (title, data) => {
        return <Title>{t(`${title}`)} : {getHour(data)}</Title>
    }

    const displayTimes = () => {
        return (
            <>
                {getTimes('sun_rise', sun_rise)}
                {getTimes('sun_set', sun_set)}
                {getTimes('time', time)}
            </>
        )
    }

    return (
        <Wrapper>
            {displayTimes()}
        </Wrapper>
    )
}
