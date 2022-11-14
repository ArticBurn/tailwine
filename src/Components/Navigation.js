import React from 'react'
import opensea from '../Assets/opensea.svg'
const Navigation = () => {
    const logoSize = {
        width: '40px',
        height: '40px',
    }
    return (
        <div>
            <nav className='flex justify-center py-[1rem] '>
                <div className='flex items-center'>
                    <img src={opensea} alt='opensea-logo' style={logoSize}/>
                    <h1 className='px-1 text-[1.5rem] '>OpenSea</h1>
                </div>
                <div className='text-center sm:bg-slate-500 md:bg-red-600 lg:bg-yellow-500 xl:bg-lime-600 2xl:bg-black'>
                    <h1>Navigation</h1>
                </div><div className='text-center sm:bg-slate-500 md:bg-red-600 lg:bg-yellow-500 xl:bg-lime-600 2xl:bg-black'>
                    <h1>Navigation</h1>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;