import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { languages } from '../services/languages'


const Select = styled.select`
    color: var(--clr1);
    border: none;
    background: transparent;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    outline: none;
`;

const Option = styled.option`
    background-color: var(--clr1);
    color: var(--clr6);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    `;


export default function SelectLanguages() {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en')
    const currentLanguage = languages.find((l) => l.code === language)

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
    }, [language, currentLanguage.dir])

    const handleChangeLang = (ev) => {
        localStorage.setItem('lang', ev.target.value)
        setLanguage(ev.target.value)
        window.location.reload()
    }

    const getLanguage = (array) => {
        return array.map((l, idx) => (
            <Option key={idx} value={l.code} disabled={l.code === language} >{l.name}</Option>
        ))
    }

    return (
        <>
            <Select value={language} onChange={handleChangeLang}>
                {getLanguage(languages)}
            </Select>
        </>
    )
}
