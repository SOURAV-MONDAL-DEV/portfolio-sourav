"use client" 
import React from 'react'
import Textra from 'react-textra';


function Intro() {
    return (
        <>

            <Textra
                className='text-white text-3xl'
                effect='flip'
                duration={1000}
                data={['one', 'two', 'three']} />

        </>
    )
}

export default Intro