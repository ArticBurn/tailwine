import React, { useState, useEffect } from 'react'
import Navigation from './Navigation';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        const currentWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', currentWidth)
        return () => {
            window.removeEventListener('resize', currentWidth)
        }
    },[])

    return (
        <header className=''>
            <h1 className='absolute bottom-0'>width : {width}px</h1>
            <Navigation />
        </header>
    );
}

export default Header;