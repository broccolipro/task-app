import React from 'react';
import WhyWe from "@/app/[home-components]/WhyWe";
import CategoryList from "@/app/[home-components]/CategoryList";
import Next from "@/app/[home-components]/Next";
import Steps from "@/app/[home-components]/Steps";
import Discount from "@/app/[home-components]/Discount";
import Reviews from "@/app/[home-components]/Reviews";

export default function Home() {

    return (
        <div className='lg:w-9/12 m-auto'>
            <section className=' p-3 flex flex-col items-center'>
                <p className='text-4xl break-words whitespace-normal text-center font-nunito font-[800] text-gray-600'>
                    Чем вам помочь?</p>
                <p className='text-center mt-1 text-2sm leading-5 text-gray-600'>
                    Профессиональные услуги по монтажу, ремонту, обслуживанию и др.
                </p>
                <span className='my-4 mt-6'>
                    <img src="/main-image2.png" alt="" className='w-10/12 aspect-auto mx-auto'/>
               </span>
            </section>
            <section>
                <Steps />
            </section>

            <section className={'bg-white'}>
                <Next/>
            </section>

            <section className='mt-10'>
                <CategoryList/>
            </section>
            <section className='px-4' >
                <Discount />
            </section>
            <section className='my-5'>
                <WhyWe/>
            </section>
            <section>
                <Reviews />
            </section>

        </div>

    );
};

