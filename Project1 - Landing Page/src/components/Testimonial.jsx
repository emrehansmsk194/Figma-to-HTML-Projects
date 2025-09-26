import React from 'react'

const Testimonial = () => {
    return (
        <div>
            <section className='bg-indigo-600 md:min-h-screen'>
                <div className='flex flex-col py-30 space-y-6 md:space-y-8 justify-center items-center'>
                    <h1 className='font-gilroy font-bold text-green-400 text-sm uppercase opacity-90 tracking-[1.63px]'>Testimonial</h1>
                    <h1 className='font-gilroy text-white text-xl md:text-3xl font-bold leading-11 tracking-[-1.2px] text-center max-w-2xl '>"Simply the best. Better than all the rest.
                        I'd recommend this product to beginners and advanced users."
                    </h1>
                    <div className='rounded-full'>
                        <img src="images/Oval2.png" className="object-cover" />
                    </div>
                    <div>
                        <h1 className='font-bold font-gilroy leading-8 text-lg tracking-tight text-center text-white '>Ian Klein</h1>
                        <h1 className='font-gilroy text-white opacity-60 leading-6 tracking-tight text-center text-sm'>Digital Marketer</h1>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Testimonial