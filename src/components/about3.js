import React from 'react'
import Home3 from '../assets/img/home-3.jpg'
import Profile from '../assets/img/Profile.jpg'

const about3 = () => {
    return(
        <section className="max-w-[1440px] mx-auto mb-[100px] mt-[50px]  flex flex-col justify-center items-center gap-y-[50px] gap-x-[50px] md:flex-row md:justify-between md:my-[150px]">
            <div className="hidden w-full h-full max-h-[600px] md:flex justify-center md:w-1/2 overflow-hidden md:rounded-br-[64px] md:rounded-tr-[64px] bg-[#EEF4FF]">
                <img className="object-cover" src={Home3} alt=""/>
            </div>
            <div className="mx-8 md:w-1/2 max-w-[500px] md:mx-0 md:mr-[64px] lg:mr-[100px] text-start">
                <h2 className="text-h3 md:text-h2 text-h font-semibold  ">What do they think</h2>
                <div className="flex flex-row gap-[31px] my-[40px]" >
                    <div className="max-w-[75px] max-h-[75px] ">
                        <img className="object-cover" src={Profile} alt=""/>
                    </div>
                    
                    <div className="flex flex-col content-between ">
                        <p className="text-h text-para font-semibold ">Samantha Sench</p>
                        <p className="text-sm text-p">Student of University</p>
                    </div>
                </div>
                <p className="text-p text-para">“ Hi, it’s Samantha. After using it made me a lot of benefits, starting with convenience of setting a deadline of tasks and schedule after that the app is very simple using. “</p>
                <div className="flex flex-row gap-[25px] mt-[50px] justify-center md:justify-start">
                    <button>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4314 8.8999L6.2751 20.0562L5.37341 20.9998L6.2751 21.9435L17.4314 33.0998L19.3187 31.2124L10.4187 22.3123H36.75V19.6873H10.4174L19.3187 10.7873L17.4314 8.8999Z" fill="#2D76F9"/>
                            </svg>
                    </button>
                    <button>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5687 8.8999L22.68 10.7886L31.5827 19.6873H5.25V22.3123H31.5827L22.6813 31.2124L24.5687 33.0998L35.7249 21.9435L36.6266 20.9998L35.7249 20.0562L24.5687 8.8999Z" fill="#2D76F9"/>
                            </svg>
                    </button>                                            
                </div>
            </div>
        </section>
    )
}

export default about3