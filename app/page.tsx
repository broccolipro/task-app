import React from 'react';
import {FaPaintRoller} from "react-icons/fa";
import {GiDoorHandle, GiWashingMachine} from "react-icons/gi";
import {BiCabinet} from "react-icons/bi";
import {TbGardenCart} from "react-icons/tb";
import {RiHammerLine} from "react-icons/ri";
import CategoryList from "@/app/components/CategoryList";
import WhyWe from "@/app/components/WhyWe";
import ListTitle from "@/app/components/ListTitle";

export default function Home() {

    return (
        <div className=' h-screen '>
            <header className='border-b bg-white'>
                <div className={' w-full flex justify-center px-4'}>
                    <img src="/logo-mini.png" alt="" className='w-20 aspect-auto m-3'/>
                    {/*<nav className=' hidden sm:flex '>*/}

                    {/*    <ul className='flex gap-3'>*/}
                    {/*        <li><a href=""></a>Home</li>*/}
                    {/*        <li><a href=""></a>My tasks</li>*/}
                    {/*        <li><a href=""></a>Profile</li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                </div>
            </header>

            <div className='bg-[#fafafa]'>
                <section className=' p-3 flex flex-col items-center'>
                    <p className='text-4xl break-words whitespace-normal text-center font-bold bg-gradient-to-r from-[#107888] via-[#EFAC42] to-[#107888] text-transparent bg-clip-text'>
                        Что нужно сделать?</p>
                    <p className='text-center mt-1 text-2sm leading-5 text-gray-600'>Профессиональные услуги по ремонту
                        и
                        обслуживанию.</p>
                    <img src="/rest.png" alt="" className='w-9/12 aspect-auto'/>
                </section>

                <section className={'bg-[#107888]'} >
                    <ListTitle />
                </section>

                <section className='mt-10'>
                    {/*<div className='text-2xl font-semibold mb-5'>Работы выполняются квалфицированными мастерами</div>*/}
                    <CategoryList/>
                </section>
                <section className='my-5' >
                    <WhyWe/>
                </section>

            </div>


            <footer className=' h-24 border-t'>

            </footer>
        </div>
    );
};

