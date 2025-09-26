import React from 'react'
import './Header.css'
const Hero = () => {
    return (
        <div>
            <section className='min-h-screen bitmap-bg bg-slate-100'>
                <div className='flex flex-col md:flex-row justify-center items-center py-15 px-6 space-x-10 md:py-30 md:px-12 md:space-x-20'>
                    <div className='max-w-2xl '>
                        <h1 className='text-red-500 text-[13px] font-bold font-gilroy leading-4 tracking-[1.625px] uppercase whitespace-nowrap '>let's shift your business</h1>
                        <h1 className='pt-6 text-gray-900 font-gilroy not-italic font-bold text-3xl md:text-6xl max-w-xl'>Shift your business fast with Shade Pro.</h1>
                        <p className='py-4 max-w-md text-gray-900 font-gilroy not-italic mix-blend-normal  opacity-70 text-base md:text-lg tracking-tight leading-8 '>With lots of unique blocks, you can easily build a page without coding. Build your
                            next consultancy website within few minutes.
                        </p>
                        <button className='bg-indigo-600 p-2 md:p-4 font-bold text-white font-gilroy rounded-lg text-center text-[17px]'>Get started a project</button>
                    </div>
                    <div className='py-10 md:py-0   rounded-full hover:-translate-y-1 duration-500'>
                        <img src="images/Image.png" className='object-cover w-70 h-70 md:w-100 md:h-100' alt="" />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Hero