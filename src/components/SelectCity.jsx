import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import { america, asia, europe } from '../services/variables'


const WrapperSelect = styled.div`
    margin-inline-start: 5%;
    margin-top: 1rem;
    width: 280px;
    border: 1px solid var(--select-border);
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: transparent;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

const CitySelector = styled.select`
    background-color: black;
    color: var(--clr1);
    border: none;
    padding: 0.5rem;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    border-radius: 0.25em;
`;


export default function SelectCity({ handleChange }) {
    const { t } = useTranslation()

    const getList = (array) => {
        return array.map((item, idx) => {
            return <option key={idx} value={item.value}>{item.name}</option>
        })
    }

    return (
        <WrapperSelect>
            <CitySelector defaultValue={'DEFAULT'} onChange={handleChange}>
                <option value="DEFAULT" disabled>{t('select_city')}</option>
                <option value="DEFAULT" disabled>{t('america')}</option>
                {getList(america)}
                <option value="DEFAULT" disabled>{t('europe')}</option>
                {getList(europe)}
                <option value="DEFAULT" disabled>{t('asia')}</option>
                {getList(asia)}
            </CitySelector>
        </WrapperSelect>
    )
}
