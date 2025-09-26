import React from 'react'
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'
const Footer = () => {
    return (
        <div>
            <section className='bg-gray-900'>
                <div className=" container md:mx-auto mx-5 py-10 md:py-20">
                    <div className='flex flex-col md:flex-row justify-around items-center '>
                        <div className="flex flex-col space-y-2">
                            <h1 className='text-xl md:text-3xl font-gilroy font-bold text-white md:leading-11 md:tracking-[.1.2px] md:max-w-lg '>Ready to launch your next project?</h1>
                            <h1 className='font-gilroy text-sm text-white opacity-60 md:leading-8 md:tracking-tight md:max-w-lg'>
                                With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                            </h1>
                        </div>
                        <button className='bg-indigo-600 mt-5 md:mt-0 text-white font-gilroy font-bold rounded-lg text-center text-lg py-2 px-3 md:py-4 md:px-8 md:leading-8 md:tracking-[-0.6px] cursor-pointer hover:-translate-y-1 duration-300'>Get started a project</button>
                    </div>

                    <div className='flex flex-col md:flex-row justify-around pt-10 md:pt-30 max-w-6xl mx-auto '>
                        <div className="flex flex-col space-y-6 md:space-y-8">
                            <a href="#" className='font-rubik font-bold text-lg md:text-2xl text-white tracking-tight'>Brainwave.io</a>
                            <h1 className='text-sm font-gilroy text-white opacity-60 leading-6 tracking-tight max-w-3xs'>
                                With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                            </h1>
                             <div className='flex space-x-2 py-5 md:py-0 '>
                                <Twitter className="w-6 h-6 text-green-400 hover:text-green-300 cursor-pointer" />
                                <Facebook className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                                <Instagram className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                                <Linkedin className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 '>
                            <div className='flex flex-col space-y-2 md:space-y-4'>
                                <h1 className='font-gilroy text-white opacity-60 text-sm leading-6 tracking-tight '>Company</h1>
                                <div className="flex flex-col space-y-1">
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>About Us</a>
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>Contact Us</a>
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tightt text-white hover:text-gray-300 duration-100'>Careers</a>
                                    <a href="" className='cursor-pointer flex-wrap font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>Press</a>

                                </div>
                            </div>
                            <div className='flex flex-col space-y-2 md:space-y-4'>
                                <h1 className='font-gilroy text-white opacity-60 text-sm leading-6 tracking-tight '>Product</h1>
                                <div className="flex flex-col space-y-1">
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>Features</a>
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>Pricing</a>
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>News</a>
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>Help Desk</a>
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>Support</a>

                                </div>
                            </div>
                            <div className='flex flex-col space-y-2 md:space-y-4'>
                                <h1 className='font-gilroy text-white opacity-60 text-sm leading-6 tracking-tight '>Services</h1>
                                <div className="flex flex-col space-y-1">
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>Digital Marketing</a>
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>Content Writing</a>
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>SEO for Business</a>
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>UI Design</a>

                                </div>
                            </div>
                            <div className='flex flex-col space-y-2 md:space-y-4'>
                                <h1 className='font-gilroy text-white opacity-60 text-sm leading-6 tracking-tight '>Legal</h1>
                                <div className="flex flex-col space-y-1 ">
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>Privacy Policy</a>
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>Terms & Conditions</a>
                                    <a href="" className='cursor-pointer flex-wrap text-sm md:text-base font-gilroy md:leading-10 md:tracking-tight text-white hover:text-gray-300 duration-100'>Return Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer