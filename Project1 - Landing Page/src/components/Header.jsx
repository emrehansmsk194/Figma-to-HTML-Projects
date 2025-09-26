import React, { useState } from 'react'
import './header.css'
import { X } from 'lucide-react';

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);
    const buttonClicked = () => {
        setIsClicked(true);
    }
    return (
        <div className="bitmap-bg bg-slate-100">
            <header className='px-5 py-2 md:px-40 md:py-4'>
                <div className='container mx-auto px-8 py-3 flex justify-between items-center'>
                    <div className='flex space-x-12 items-center justify-center'>
                        <a href="#" className='font-rubik font-bold text-2xl leading-none text-gray-900 tracking-tight'>Brainwave.io</a>
                        <nav className='hidden md:flex space-x-10 '>
                            <a href="" className='font-gilroy font-bold leading-7 tracking-[-0.1px] hover:text-blue-200'>Demos</a>
                            <a href="" className='font-gilroy font-bold leading-7 tracking-[-0.1px] hover:text-blue-200'>Pages</a>
                            <a href="" className='font-gilroy font-bold leading-7 tracking-[-0.1px] hover:text-blue-200'>Support</a>
                            <a href="" className='font-gilroy font-bold leading-7 tracking-[-0.1px] hover:text-blue-200'>Contact</a>
                        </nav>

                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='bg-indigo-600 hidden md:block  px-6 py-4  font-bold text-white text-center  text-[17px] font-gilroy rounded-lg leading-none tracking-tight cursor-pointer hover:-translate-y-1 duration-400'>Get started a project</button>
                        <button hidden={isClicked} class="mx-10 md:mx-0 block md:hidden " onClick={buttonClicked}>
                            <div class="space-y-1 cursor-pointer">
                                <div class="bg-gray-800 w-5 h-1 rounded-full"></div>
                                <div class="bg-gray-800 w-5 h-1 rounded-full"></div>
                                <div class="bg-gray-800 w-5 h-1 rounded-full"></div>
                            </div>
                        </button>
                        {isClicked &&
                            <button className='md:hidden cursor-pointer font-bold text-lg' onClick={() => setIsClicked(false)}><X /></button>}
                    </div>
                 

                </div>
                   {isClicked &&
                        <div className='md:hidden container pt-1 border-t border-gray-200 bg-gray-100'>
                            <nav className='flex flex-col space-y-4 mx-8 my-5 justify-center'>
                                <a href="" className='font-gilroy font-bold leading-7 tracking-[-0.1px] hover:text-blue-200'>Demos</a>
                                <a href="" className='font-gilroy font-bold leading-7 tracking-[-0.1px] hover:text-blue-200'>Pages</a>
                                <a href="" className='font-gilroy font-bold leading-7 tracking-[-0.1px] hover:text-blue-200'>Support</a>
                                <a href="" className='font-gilroy font-bold leading-7 tracking-[-0.1px] hover:text-blue-200'>Contact</a>
                            </nav>

                        </div>
                    }
            </header>
        </div>
    )
}

export default Header
