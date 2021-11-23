import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'


const Btn = styled.button`
    background-color: var(--clr2);
    border: 2px solid var(--clr1);
    border-radius: var(--borderRad2);
    cursor: pointer;
    margin: 20px;
    padding: 1em 2em;
    font-weight: bold;
        &:hover,&:focus {
            transition: box-shadow 1s ease-in-out;
            color: var(--clr6);
            background-color: var(--clr6);
            outline: 0;
            box-shadow: 0 0 40px 40px var(--clr2) inset;
        }
    @media (max-width: 768px) {
        text-align: center;
        width: 90%;
        margin-top: 20px; 
    }
`;


export default function BackBtn() {
    const { t } = useTranslation()
    return (
        <>
            <Btn className="go-back"><Link to="/">{t('back')}</Link></Btn>
        </>
    )
}


