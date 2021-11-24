import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--clr6);

@media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    color: var(--clr1);
}`;

const Title = styled.h1`
    font-size: 2.5em;
    margin-bottom: 0;
`;

const Subtitle = styled.h2`
    text-align: center;
    font-size: 1.5em;
    font-style: italic;
`;


export default function CityTitle({ city }) {
    const { title, parent } = city;

    return (
        <Wrapper>
            <Title>{title},</Title>
            <Subtitle>{parent.title}</Subtitle>
        </Wrapper>
    )
}

