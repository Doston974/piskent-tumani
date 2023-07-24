"use client"
import React from 'react'
import Marquee from 'react-fast-marquee'

const Test = () => {
    return (
        <div>
            <Marquee speed={84} gradient={false}>
                <p>Sayt test holatida ishlamoqda !</p>
            </Marquee>
        </div>
    )
}

export default Test