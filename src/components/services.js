import React from 'react'
import Service1 from '../assets/img/service-1.png'
import Service2 from '../assets/img/service-2.png'
import Service3 from '../assets/img/service-3.png'


const services = () => {
    return(
        <section className="max-w-[1440px] mx-auto px-8 flex flex-col gap-y-[50px] gap-x-[39px] my-[50px] md:my-[150px] md:flex-row lg:px-[100px] flex-wrap xl:flex-nowrap justify-center items-center">
        <div className="flex items-center flex-col min-w-[360px] max-w-[415px] md:items-start">
            <div className="bg-[#EEF4FF] w-[100px] h-[100px] rounded-full flex items-center justify-center my-auto">
                <img className="" src={Service1} alt=""/>
            </div>
            <h3 className="text-h font-bold text-h3 mt-[50px] mb-[30px] text-center lg:text-start">Set a better deadline tasks</h3>
            <p className="text-p text-para text-center md:text-start">You can make your duty deadlines better and more orderly</p>
        </div>
        <div className="flex items-center flex-col min-w-[360px] max-w-[415px] md:items-start">
            <div className="bg-[#EEF4FF] w-[100px] h-[100px] rounded-full flex items-center justify-center my-auto">
                <img className="" src={Service2} alt=""/>
            </div>
            <h3 className="text-h font-bold text-h3 mt-[50px] mb-[30px] text-center lg:text-start">Manage the tasks so easily</h3>
            <p className="text-p text-para text-center md:text-start">You can manage the deadlines and the schedule becomes easy</p>
        </div>
        <div className="flex items-center flex-col min-w-[360px] max-w-[415px] md:items-start">
            <div className="bg-[#EEF4FF] w-[100px] h-[100px] rounded-full flex items-center justify-center my-auto">
                <img className="" src={Service3} alt=""/>
            </div>
            <h3 className="text-h font-bold text-h3 mt-[50px] mb-[30px] text-center lg:text-start">Wouldn’t miss notifications</h3>
            <p className="text-p text-para text-center md:text-start">Of course you will always get the tasks and schedule notifications</p>
        </div>
    </section>
    )
}

export default services