import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import weather from '../assets/icon/weather.png'


const WrapperSources = styled.div`
    align-self: flex-end;

    @media (max-width: 768px) {
        align-self: center;
    }
`;

const Icon = styled.div`
    display: flex;
    align-self: flex-end;
`;

const SourcesLink = styled.a`
    align-self: center;
    color: var(--clr6);
    text-decoration: none;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    -webkit-transition: color 300ms ease-in-out;
    transition: color 300ms ease-in-out;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`;


export default function Sources({ data }) {
    const { t } = useTranslation()

    return (
        <WrapperSources>
            <h3>{t('sources_data')}</h3>
            <ul>{data.sources.map((source, idx) => {
                return (
                    <Icon key={idx}>
                        <img src={weather} alt='icon' />
                        <SourcesLink href={source.url} target="_blank" rel="noreferrer">{source.title}</SourcesLink>
                    </Icon>
                )
            })}</ul>
        </WrapperSources>
    )
}
