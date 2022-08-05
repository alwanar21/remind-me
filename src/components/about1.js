import React from 'react'
import Home1 from '../assets/img/home-1.jpg'

const about1 = () => {
    return(
        <section className="max-w-[1440px] mx-auto mb-[50px] flex flex-col justify-center items-center gap-y-[50px] gap-x-[50px] md:flex-row md:justify-between">
            <div className="w-full h-full max-h-[600px] flex justify-center md:w-1/2 overflow-hidden md:rounded-br-[64px] md:rounded-tr-[64px] ">
                <img className="object-cover" src={Home1} alt=""/>
            </div>
            <div className="mx-8 md:w-1/2 max-w-[500px] md:mx-0 md:mr-[64px] lg:mr-[100px] md:text-start">
                <h2 className="text-h2 text-h font-semibold mb-[50px] ">Set up task and schedule with a best features</h2>
                <p className="text-p text-para">The best feature makes you better, with the latest technology to meet your needs. Of course, with such features as organizing schedules and leading assignments, it will make you easier, So get the application now !</p>
            </div>
        </section>
    )
}

export default about1