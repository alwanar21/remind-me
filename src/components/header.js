import React from 'react'
import heroImg from '../assets/img/hero-image.jpg'

const header = () => {
    return(
        <section className="max-w-[1440px] mx-auto relative">
        {/* navbar  */}
        <nav className="flex justify-between items-center h-[100px] px-8 lg:px-[100px] relative z-40">
            <div className="flex flex-row gap-[85px]">
                <div className="flex flex-row gap-x-2.5 items-center">
                    <svg className="icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4645 3.53553C16.4171 1.58291 19.5829 1.58291 21.5355 3.53553L32.4645 14.4645C34.4171 16.4171 34.4171 19.5829 32.4645 21.5355L21.5355 32.4645C19.5829 34.4171 16.4171 34.4171 14.4645 32.4645L3.53553 21.5355C1.58291 19.5829 1.58291 16.4171 3.53553 14.4645L14.4645 3.53553Z" fill="#D6E5FD"/>
                        <path d="M18 13.5C18.1989 13.5 18.3897 13.579 18.5303 13.7197C18.671 13.8603 18.75 14.0511 18.75 14.25V17.25H20.25C20.4489 17.25 20.6397 17.329 20.7803 17.4697C20.921 17.6103 21 17.8011 21 18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H18C17.8011 18.75 17.6103 18.671 17.4697 18.5303C17.329 18.3897 17.25 18.1989 17.25 18V14.25C17.25 14.0511 17.329 13.8603 17.4697 13.7197C17.6103 13.579 17.8011 13.5 18 13.5Z" fill="#2D76F9"/>
                        <path opacity="0.5" d="M10.5 18C10.5 19.4834 10.9399 20.9334 11.764 22.1668C12.5881 23.4001 13.7594 24.3614 15.1299 24.9291C16.5003 25.4968 18.0083 25.6453 19.4632 25.3559C20.918 25.0665 22.2544 24.3522 23.3033 23.3033C24.3522 22.2544 25.0665 20.918 25.3559 19.4632C25.6453 18.0083 25.4968 16.5003 24.9291 15.1299C24.3614 13.7594 23.4001 12.5881 22.1668 11.764C20.9334 10.9399 19.4834 10.5 18 10.5C17.0151 10.5 16.0398 10.694 15.1299 11.0709C14.2199 11.4478 13.3931 12.0003 12.6967 12.6967C11.2902 14.1032 10.5 16.0109 10.5 18ZM17.25 14.25C17.25 14.0511 17.329 13.8603 17.4697 13.7197C17.6103 13.579 17.8011 13.5 18 13.5C18.1989 13.5 18.3897 13.579 18.5303 13.7197C18.671 13.8603 18.75 14.0511 18.75 14.25V17.25H20.25C20.4489 17.25 20.6397 17.329 20.7803 17.4697C20.921 17.6103 21 17.8011 21 18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H18C17.8011 18.75 17.6103 18.671 17.4697 18.5303C17.329 18.3897 17.25 18.1989 17.25 18V14.25Z" fill="#2D76F9"/>
                    </svg>
                    <label for="icon" className="text-h text-para font-bold">Remind<span className="text-blue-icons">me</span></label>   
                </div>
                <div className="md:flex flex-row gap-[50px] hidden ">
                    <button className="text-blue-icons text-para font-bold " >Home</button>
                    <button className="text-p text-para " >Features</button>
                    <button className="text-p text-para " >About Us</button>
                </div>
            </div>
            
            <div className="w-[50px] h-[50px]  border-2 border-blue-icons rounded-md box-border flex items-center justify-center cursor-pointer md:hidden">
                <svg  xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px] text-blue-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <button className="rounded-full text-blue-icons border-2 border-blue-icons px-[40px] py-[12px] hidden md:block">About App</button>
        </nav>

        {/* hero  */}
        <div className="flex flex-col justify-center lg:justify-start lg:flex-row  items-center lg:text-start">
            <div className="my-[50px] px-8 lg:pl-[100px] lg:w-1/2  lg:pr-[84px]">
                    <h1 className="text-h text-h1m font-semibold lg:text-h1">Manage Schedule and Task Easy </h1>
                    <p className="text-p text-para mt-[30px] mb-[40px]">Create and organize schedule and task deadline become better, easy manage and certainly no longer lagging behind schedule of activities and task</p>
                    <button className="font-medium text-para text-white py-6 px-[58px] rounded-full bg-blue-icons">Download App</button>
            </div>
            <div className="flex justify-center lg:block w-full h-full lg:w-1/2 lg:h-auto lg:absolute lg:right-0 lg:top-0 lg:bottom-0 overflow-hidden lg:rounded-bl-[64px] z-30 " >
                <img className="object-cover my-auto" src={heroImg} alt="" />
            </div>
            
        </div>
    </section>
    )
}

export default header