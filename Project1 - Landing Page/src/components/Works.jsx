import React from 'react'
import { ArrowRight } from 'lucide-react'

const Works = () => {
    return (
        <div>
            <section className='min-h-screen'>
                <div className='py-20 md:py-31 flex flex-col text-center space-y-4 md:space-y-6 '>
                    <h1 className='text-red-500 font-gilroy font-semibold text-xs md:text-sm md:tracking-[1.63px] uppercase'>Case Studies</h1>
                    <h1 className='text-gray-900 font-gilroy font-bold text-2xl md:text-4xl md:leading-11 md:tracking-[-1.1px]  text-center md:max-w-lg mx-auto'>Our work describe why we are the best in the business</h1>
                </div>
                <div className='py-3 md:py-10 flex justify-center space-x-12 md:space-x-17'>
                    <div className='flex flex-col space-y-8 md:space-y-12 '>
                        <div className='rounded-lg'>
                            <img src="images/Img.png" className='object-cover' />
                        </div>
                        <div className='flex flex-col  px-7 space-y-2'>
                            <h1 className='text-[15px] font-gilroy opacity-60 md:tracking-tight md:leading-7 text-gray-900 '>Graphic Design</h1>
                            <h1 className='md:text-2xl font-gilroy font-bold text-gray-900 md:leading-8 md:tracking-[-1.5px]'>Aura Branding Design</h1>
                        </div>
                        <div className='rounded-lg'>
                            <img src="images/Img3.png" className="object-cover" />
                        </div>
                        <div className='flex flex-col  px-7 space-y-2'>
                            <h1 className='text-[15px] font-gilroy opacity-60 md:tracking-tight md:leading-7 text-gray-900 '>Web Development</h1>
                            <h1 className='md:text-2xl font-gilroy font-bold text-gray-900 md:leading-8 md:tracking-[-1.5px]'>Gradient Website Development</h1>
                        </div>

                    </div>
                    <div className="flex flex-col space-y-8 md:space-y-12">
                        <div className="rounded-lg">
                            <img src="images/Img2.png" className="object-cover" />
                        </div>
                        <div className='flex flex-col  px-7 space-y-2'>
                            <h1 className='text-[15px] font-gilroy opacity-60 md:tracking-tight md:leading-7 text-gray-900 '>Graphic Desing</h1>
                            <h1 className='md:text-2xl font-gilroy font-bold text-gray-900 md:leading-8 md:tracking-[-1.5px]'>AB.S Snack Packaging</h1>
                        </div>
                        <div className="rounded-lg">
                            <img src="images/Img4.png" className="object-cover" />
                        </div>
                        <div className='flex flex-col  px-7 space-y-2'>
                            <h1 className='text-[15px] font-gilroy opacity-60 md:tracking-tight md:leading-7 text-gray-900 '>Content Writing</h1>
                            <h1 className='md:text-2xl font-gilroy font-bold text-gray-900 md:leading-8 md:tracking-[-1.5px]'>Magazine Content Writing</h1>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center items-center space-x-3 group cursor-pointer hover:-translate-y-1 duration-400 ">
                    <h1 className='text-indigo-600 font-gilroy font-bold text-xl leading-8 tracking-[-1.2px] py-10 md:py-20 '>See all works</h1>
                    <ArrowRight className='text-indigo-600 font-bold h-5 w-5 '></ArrowRight>
                </div>
            </section>
        </div>
    )
}

export default Works