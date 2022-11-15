import React from 'react'
import opensea from '../Assets/opensea.svg'

const Navigation = () => {
    const logoSize = {
        width: '40px',
        height: '40px',
    }

    return (
        <div>
            <nav className='flex py-[1.5rem]'>
                <div className='flex items-center justify-center w-3/12'>
                    <img src={opensea} alt='opensea-logo' style={logoSize} />
                    <h1 className='px-1 text-[1.5rem] text-black hidden sm:inline '>OpenSea</h1>
                </div>
                <div className='flex text-center w-6/12 items-center justify-center relative'>
                    <input type="search" placeholder="Search items, collections, and accounts ..." className="h-full w-full pl-[2rem] pr-[0.5rem] rounded-lg opacity-75 focus:opacity-100 focus:outline-none" id='ellipsis'/>
                    <div className='absolute left-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='flex items-center justify-center absolute bg-gray-00 py-1 px-2 rounded-md right-[0.5rem]'>
                        <span>/</span>
                    </div>
                </div>
                <div className='flex bg-slate-800 items-center justify-center w-3/12'>
                    <h1>akun</h1>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;