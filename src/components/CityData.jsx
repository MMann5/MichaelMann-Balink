import React from 'react'
import styled from 'styled-components';

import CityTitle from '../components/CityTitle'
import CityTime from '../components/CityTime';


const DataWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px){
        text-align: center;
        padding: 0 15px;
        align-items: center;
        flex-direction: column;   
    }
`;


export default function CityData({ data }) {
    return (
        <DataWrapper>
            <CityTitle city={data} />
            <CityTime city={data} />
        </DataWrapper>
    )
}
