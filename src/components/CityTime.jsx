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
    align-items: flex-start;
`;

const Title = styled.h4`
    font-style: italic;
    color: var(--clr6);
`;


export default function CityTime({ city }) {
    const { t } = useTranslation()

    const getTimes = (title, data) => {
        return <Title>{t(`${title}`)} : {data ? getHour(data) : '...'}</Title>
    }

    return (
        <Wrapper>
            {getTimes('time_hour', city.time)}
            {getTimes('time_sunrise', city.sun_rise)}
            {getTimes('time_sunset', city.sun_set)}
        </Wrapper>
    )
}
