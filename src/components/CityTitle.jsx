import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
    font-size: 2.5em;
    margin-bottom: 0;
`;

const Subtitle = styled.h2`
    text-align: center;
    font-size: 1.5em;
    font-style: italic;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--clr1);

@media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
}

@media (max-width: 1675px) {
    color: var(--clr6);
}
`;


export default function CityTitle({ city }) {

    if (!city) return '...'

    return (
        <Wrapper>
            <Title>{city.title},</Title>
            <Subtitle>{city.parent.title}</Subtitle>
        </Wrapper>
    )
}

