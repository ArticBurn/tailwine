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
                    <input type="search" placeholder="Search items, collections, and accounts ..." className="h-full w-full pl-[2rem] pr-[0.5rem] rounded-lg opacity-75 focus:opacity-100 focus:outline-none" id='ellipsis' />
                    <div className='absolute left-[0.5rem]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='flex items-center justify-center absolute bg-gray-400 py-[0.1rem] px-2 rounded-md right-[0.5rem] hidden md:block'>
                        <span>/</span>
                    </div>
                </div>
                <div className='flex items-center justify-center w-3/12'>
                    <div className='px-3 hover:scale-110 hover:cursor-pointer hidden sm:block'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div className='px-3 hover:scale-110 hover:cursor-pointer hidden sm:block'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                        </svg>
                    </div>
                    <div className='px-3 hover:scale-110 hover:cursor-pointer'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;