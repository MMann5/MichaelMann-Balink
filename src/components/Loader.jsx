import React from 'react'
import loading from '../assets/icon/oval.svg'

export default function Loader() {
    return (
        <div style={{ height: '75vh', textAlign: 'center' }}>
            <img src={loading} alt="" />
        </div>
    )
}
