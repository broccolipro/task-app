import React from 'react';
import WhyWe from "@/app/[home-components]/WhyWe";
import CategoryList from "@/app/[home-components]/CategoryList";
import Next from "@/app/[home-components]/Next";

export default function Home() {

    return (
        <div className='bg-tbg'>
            <section className=' p-3 flex flex-col items-center'>
                <p className='text-4xl break-words whitespace-normal text-center font-bold bg-gradient-to-r from-[#107888] via-[#EFAC42] to-[#107888] text-transparent bg-clip-text'>
                    You all are Lohes?</p>
                <p className='text-center mt-1 text-2sm leading-5 text-gray-600'>
                    Профессиональные услуги по ремонту и обслуживанию.
                </p>
                <img src="/rest.png" alt="" className='w-9/12 aspect-auto'/>
            </section>

            <section className={'bg-[#107888]'}>
                <Next/>
            </section>

            <section className='mt-10'>
                <CategoryList/>
            </section>
            <section className='my-5'>
                <WhyWe/>
            </section>

        </div>

    );
};

