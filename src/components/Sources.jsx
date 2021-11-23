import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import weather from '../assets/icon/globe.png'


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
    color: var(--clr1);
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

const TitleSources = styled.h3`
    font-size: 1.5rem;
    color : var(--clr1);
`;

const SourcesContainer = styled.ul``;


export default function Sources({ data }) {
    const { t } = useTranslation()

    return (
        <WrapperSources>
            <TitleSources>{t('sources_data')}</TitleSources>
            <SourcesContainer>{data.sources.map((source, idx) => {
                return (
                    <Icon key={idx}>
                        <img src={weather} alt='icon' style={{ width: 40, height: 40 }} />
                        <SourcesLink href={source.url} target="_blank" rel="noreferrer">{source.title}</SourcesLink>
                    </Icon>
                )
            })}</SourcesContainer>
        </WrapperSources>
    )
}
