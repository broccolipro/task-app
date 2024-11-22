import React from 'react';
import WhyWe from "@/app/[home-components]/WhyWe";
import CategoryList from "@/app/[home-components]/CategoryList";
import Next from "@/app/[home-components]/Next";
import Steps from "@/app/[home-components]/Steps";
import Discount from "@/app/[home-components]/Discount";
import Reviews from "@/app/[home-components]/Reviews";


export default function Home() {

    const containerStyles = 'md:w-11/12 lg:w-9/12 m-auto'

    return (
        <>
            <div className={`${containerStyles} py-10`}>
                <div className='min-h-80 flex flex-col items-center lg:flex-row'>
                    <div className='self-stretch lg:py-4 lg:space-y-6 ' >
                        <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl break-words whitespace-normal text-center font-nunito font-[800] text-gray-600'>
                            Чем вам помочь?</h1>
                        <div className='px-12' >
                            <p className='text-center mt-1 text-2sm leading-5 text-gray-600'>
                                Профессиональные услуги по монтажу, ремонту, обслуживанию и многое другое.
                            </p>
                        </div>
                    </div>
                    <span className='my-4 mt-6'>
                        <img src="/main-image2.png" alt="People with tools" className='w-10/12 aspect-auto mx-auto'/>
                    </span>
                </div>

            </div>

            <div className='bg-white'>
                <div className={containerStyles}>
                    <Steps/>
                    <CategoryList/>
                    <Discount/>
                    <WhyWe/>
                    <Reviews/>
                </div>
            </div>
        </>


    );
};
