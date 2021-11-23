import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'


const Wrapper = styled.div`
    min-height: 10vh;
    background-color: var(--clr2);
`;

const HeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const Img = styled.img`
    width: 50px;
    height: 50px;
`;

const Title = styled.h1`
    display: inline-block;
    margin-inline-end: 50px;
    margin-inline-start: 50px;
    color: var(--clr1);
    @media screen and (max-width: 768px) {
        line-height: 7.5vh;
        margin-inline-end: 25px;
        margin-inline-start: 25px;
    }
`;


export default function Header() {
    const { t } = useTranslation()

    return (
        <Wrapper>
            <HeaderTitle>
                <Img src="https://www.metaweather.com/static/img/weather/c.svg" alt="sun" />
                <Title>{t('app_title')}</Title>
                <Img src="https://www.metaweather.com/static/img/weather/s.svg" alt="cloud" />
            </HeaderTitle>
        </Wrapper>
    )
}
