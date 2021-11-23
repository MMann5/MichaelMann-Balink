import React from 'react'
import styled from 'styled-components'
import loading from '../assets/icon/oval.svg'


const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;


export default function Loader() {
    return (
        <LoaderWrapper>
            <img src={loading} alt="" />
        </LoaderWrapper>
    )
}
