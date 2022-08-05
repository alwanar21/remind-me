import React from 'react'

const download = () => {
    return(
        <section className="w-full h-full max-h-[500px] max-w-[1440px] mx-auto ">
            <div className="mx-8 md:mx-[100px] bg-blue-icons  flex flex-col items-center py-[50px] px-[37px] gap-[50px] rounded-[25px] md:rounded-[50px] md:gap-[95px] md:px-[100px] relative overflow-hidden">
                <div className="min-w-[302px] min-h-[302px] md:min-w-[404px] md:min-h-[404px] md:border-[75px] rounded-full border-[#4587FF] border-[50px]  absolute right-[-151px] bottom-[-151px] md:right-[-202px] md:bottom-[-202px] z-10"></div>
                <div className="min-w-[302px] min-h-[302px] md:min-w-[404px] md:min-h-[404px] md:border-[75px] rounded-full border-[#4587FF] border-[50px]  absolute left-[-151px] top-[-151px] md:left-[-202px] md:top-[-202px] z-10"></div>

                <h2 className="text-h3 md:text-h2 text-white text-center max-w-[750px] z-40">Download an app now and the various benefits you will get immediately</h2>
                <div className="flex flex-col gap-[25px] lg:flex-row lg:gap-[45px] z-30">
                    <button className="font-medium text-para text-blue-icons py-6 px-[58px] rounded-full bg-white">Download App</button>
                    <button className="font-medium text-para text-white py-6 px-[58px] border-2 border-white rounded-full ">About App</button>
                </div>

            </div>
            
        </section>
    )
}

export default download