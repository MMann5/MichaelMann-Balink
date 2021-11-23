import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import SelectLanguages from './SelectLanguages'


const Wrapper = styled.div`
    min-height: 10vh;
    background-color: var(--clr2);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 3vh;
    color: var(--clr1);

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1vh;
        justify-content: center;
    }
`;

const Paragraph = styled.h3`
    margin: 0;
    font-style: italic;
`;


export default function Footer() {
    const { t } = useTranslation()

    return (
        <Wrapper>
            <Paragraph>&copy; {t('footer')}</Paragraph>
            <SelectLanguages />
        </Wrapper>
    )
}
