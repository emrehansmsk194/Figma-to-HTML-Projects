import React from 'react'
import { ArrowRight } from 'lucide-react'

const Services = () => {
    return (
        <div>
            <section className='min-h-screen'>
                <div className='pt-20 flex flex-col items-center justify-center '>
                    <h1 className='text-red-500 font-gilroy text-sm uppercase font-bold leading-1'>Our Services</h1>
                    <h1 className='text-gray-900 py-8 font-gilroy max-w-xl text-center font-bold leading-12 tracking-tight text-2xl md:text-4xl '>We provide great services for our customers based on needs</h1>
                </div>
                <div className='mx-12 py-2 md:mx-40 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center  '>
                    <div className="bg-green-400 flex flex-col items-center justify-center rounded-lg shadow-lg group hover:scale-105 duration-300">
                        <img src="images/Designer-rafiki.png" className='object-cover pt-15' alt="" />
                        <h1 className='py-10 text-center text-white font-gilroy text-2xl leading-8'>Graphic Design</h1>
                        <p className='text-center font-gilroy leading-7 text-base tracking-tight opacity-60 text-white max-w-65'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. </p>
                        <div className='py-10 flex space-x-6 items-center justify-center '>
                            <p className='text-center font-gilroy leading-8 text-base font-bold text-white'>Learn more</p>
                            <ArrowRight className='text-white h-5 w-5 font-bold cursor-pointer'></ArrowRight>
                        </div>
                    </div>
                    <div className='bg-indigo-600 flex flex-col items-center justify-center rounded-lg shadow-lg group hover:scale-105 duration-300'>
                        <img src="images/Programming-rafiki.png" className='object-cover pt-10' alt="" />
                        <h1 className='py-10 text-center text-white font-gilroy text-2xl leading-8'>Web Development</h1>
                        <p className='text-center font-gilroy leading-7 text-base tracking-tight opacity-60 text-white max-w-65'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. </p>
                        <div className='py-10 flex space-x-6 items-center justify-center '>
                            <p className='text-center font-gilroy leading-8 text-base font-bold text-white'>Learn more</p>
                            <ArrowRight className='text-white h-5 w-5 font-bold cursor-pointer'></ArrowRight>
                        </div>


                    </div>

                    <div className='bg-red-500 flex flex-col items-center justify-center rounded-lg shadow-lg group hover:scale-105 duration-300'>
                        <img src="images/Notes-rafiki.png" className='object-cover pt-15' alt="" />
                        <h1 className='py-10 text-center text-white font-gilroy text-2xl leading-8'>Content Writing</h1>
                        <p className='text-center font-gilroy leading-7 text-base tracking-tight opacity-60 text-white max-w-65'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. </p>
                        <div className='py-10 flex space-x-6 items-center justify-center '>
                            <p className='text-center font-gilroy leading-8 text-base font-bold text-white'>Learn more</p>
                            <ArrowRight className='text-white h-5 w-5 font-bold cursor-pointer'></ArrowRight>
                        </div>


                    </div>
                </div>

                <div className='container py-10 w-4/5 md:w-full mx-13 md:mx-40 md:py-14 flex space-x-3 md:space-x-15 border-b-2  border-white shadow-xl '>
                    <div className='rounded-full mx-1 md:mx-10  '>
                        <img src="images/Oval.png" className='object-cover pl-2 md:pl-15' />
                    </div>
                    <div className='flex flex-col space-y-2 md:space-y-8 md:mx-5 '>
                        <div className="w-30 h-10">
                            <img src="images/Stars.png" className="w-full h-full object-contain" />
                        </div>
                        <p className='text-gray-900 text-lg md:text-2xl  font-gilroy font-bold md:max-w-3xl tracking-[-0.5px] '>"OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish."</p>
                        <div className='flex space-x-4 items-center'>
                            <p className='text-gray-900 text-base leading-7 tracking-tight font-gilroy font-bold'>Franklin Hicks</p>
                            <p className='text-gray-900 opacity-60 text-base tracking-tight font-gilroy '>Web Developer</p>
                        </div>

                    </div>
                </div>
                <div className='container mx-10 md:mx-50 py-10 md:py-15 grid grid-cols-3 gap-5 md:gap-20 '>
                    <div className='flex flex-col space-y-2 md:space-y-6'>
                        <h1 className='text-red-500 font-gilroy font-bold text-[8px] md:text-sm uppercase leading-1' >Our Story</h1>
                        <p className='py-2 md:py-5 text-gray-900 text-[10px] min-w-3xs md:text-4xl md:leading-12 md:tracking-[-1.2px] font-gilroy font-bold md:min-w-xl '>We know how everything works and why your business is failing over and over again.</p>
                        <div className='rounded-lg py-5 md:py-15'>
                            <img src="images/1.png" className='object-cover' />
                        </div>

                    </div>
                    <div className='flex flex-col space-y-6'>
                        <div className="rounded-lg pt-15 md:pt-55">
                            <img src="images/2.png" className='object-cover' />
                        </div>
                        <p className='py-5 md:py-15 font-gilroy md:max-w-2xl opacity-60 md:leading-7 md:tracking-tight text-gray-900 text-[10px] md:text-lg'>We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding. Building your next landing page.</p>
                    </div>
                    <div className='rounded-lg pt-25 md:pt-85'>
                        <img src="images/3.png" className='object-cover w-16 h-17 md:w-40 md:h-42' />
                    </div>

                </div>

                <div className='container mx-10 md:mx-50  md:py-5 grid grid-cols-3 gap-5 md:gap-12 items-start md:items-center justify-center w-8/10 md:w-7/10'>
                    <div className='flex flex-col space-y-2 md:space-y-4 text-center'>
                        <h1 className='font-gilroy font-bold text-3xl md:text-5xl bg-gray-900 leading-14 bg-clip-text text-transparent'>1M+</h1>
                        <p className='font-gilroy opacity-60  md:text-xl text-gray-900 md:leading-8 md:tracking-tight max-w-xs  mix-blend-normal '>Customers visit Omega every month to get their service done.</p>
                    </div>
                    <div className='flex flex-col space-y-4 text-center '>
                        <h1 className='font-gilroy font-bold text-3xl md:text-5xl bg-gray-900 leading-14 bg-clip-text text-transparent'>92%</h1>
                        <p className='font-gilroy opacity-60 md:text-xl text-gray-900 md:leading-8 md:tracking-tight max-w-xs  mix-blend-normal '>Satisfaction rate comes from our awesome customers.</p>
                    </div>
                    <div className='flex flex-col space-y-4 text-center'>
                        <h1 className='font-gilroy font-bold text-3xl md:text-5xl bg-gray-900 leading-14 bg-clip-text text-transparent'>4.9/5.0</h1>
                        <p className='font-gilroy opacity-60 md:text-xl text-gray-900 md:leading-8 md:tracking-tight max-w-xs  mix-blend-normal '>Average customer ratings we have got all over internet.</p>
                    </div>
                </div>

            </section>

            <section className='min-h-screen bg-slate-100'>
                <div className='pt-15 md:pt-30 flex flex-col  place-items-center '>
                    <h1 className='text-red-500 font-gilroy text-sm font-bold uppercase '>Why Choose Us</h1>
                    <h1 className='py-5 text-gray-900 font-gilroy text-2xl md:text-4xl md:leading-12 md:tracking-[-1.2px] font-bold max-w-xl text-center'>People choose us because we serve the best for everyone</h1>
                </div>
                <div className='flex justify-center w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 py-5 gap-10 md:py-15 md:gap-15 items-center justify-center '>
                        <div className='flex space-x-4 md:space-x-7 '>
                            <div className='rounded-lg '>
                                <img src="images/Icon.png" className='object-cover' />
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <h1 className='font-gilroy font-bold text-lg md:text-xl text-gray-900 md:leading-8 '>Dedicated project manager</h1>
                                <p className='font-gilroy text-gray-900 opacity-60 leading-7 max-w-2xs tracking-tight '>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                            </div>
                        </div>
                        <div className='flex space-x-4 md:space-x-7 '>
                            <div className="rounded-lg">
                                <img src="images/Icon2.png" className="object-cover" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <h1 className="font-gilroy font-bold text-lg md:text-xl text-gray-900 md:leading-8">Organized tasks</h1>
                                <p className="font-gilroy text-gray-900 opacity-60 leading-7 max-w-2xs tracking-tight">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                            </div>
                        </div>
                        <div className="flex space-x-4 md:space-x-7">
                            <div className="rounded-lg">
                                <img src="images/Icon3.png" className="object-cover" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <h1 className="font-gilroy font-bold text-lg md:text-xl text-gray-900 md:leading-8">Easy Feedback sharing</h1>
                                <p className="font-gilroy text-gray-900 opacity-60 leading-7 max-w-2xs tracking-tight">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                            </div>
                        </div>
                        <div className="flex space-x-4 md:space-x-7">
                            <div className="rounded-lg">
                                <img src="images/Icon4.png" className="object-cover" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <h1 className="font-gilroy font-bold text-lg md:text-xl text-gray-900 md:leading-8">Never miss deadline</h1>
                                <p className="font-gilroy text-gray-900 opacity-60 leading-7 max-w-2xs tracking-tight">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mx-4 md:mx-auto py-15 md:py-25 flex flex-col md:flex-row md:justify-around items-center '>
                    <div className="flex flex-col space-y-4 md:space-y-6">
                        <h1 className='font-gilroy text-gray-900 font-bold text-xl md:text-3xl md:leading-11 md:tracking-[-1.2px]'>Ready to launch your next project?</h1>
                        <p className='font-gilroy text-gray-900 opacity-60 text-sm md:text-lg md:leading-8 md:tracking-tight max-w-2xs md:max-w-lg'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                    <div>
                        <button className='bg-indigo-600 mt-5 md:mt-0 text-white font-gilroy font-bold rounded-lg text-center text-base md:text-lg py-2 px-3 md:py-4 md:px-8 leading-8 tracking-[-0.6px] cursor-pointer hover:-translate-y-1 duration-300'>Get started a project</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services

