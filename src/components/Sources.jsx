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

const TitleSources = styled.h3`
    font-size: 1.5rem;
    color : var(--clr1);
`;

const SourcesContainer = styled.ul``;

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


export default function Sources({ data }) {
    const { sources } = data
    const { t } = useTranslation()

    const Link = sources.map((source, idx) => {
        return (
            <Icon key={idx}>
                <img src={weather} alt='icon' style={{ width: 40, height: 40 }} />
                <SourcesLink href={source.url} target="_blank" rel="noreferrer">{source.title}</SourcesLink>
            </Icon>
        )
    })

    return (
        <WrapperSources>
            <TitleSources>{t('sources_data')}</TitleSources>
            <SourcesContainer>
                {Link}
            </SourcesContainer>
        </WrapperSources>
    )
}
