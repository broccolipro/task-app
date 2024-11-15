import React from 'react';
import {FaPaintRoller} from "react-icons/fa";
import {GiDoorHandle, GiWashingMachine} from "react-icons/gi";
import {BiCabinet} from "react-icons/bi";
import {TbGardenCart} from "react-icons/tb";
import {RiHammerLine} from "react-icons/ri";
import CategoryList from "@/app/components/CategoryList";

export default function Home() {

    return (
        <div className='bg-[#F2F2g7] h-screen'>
            <header className='border-b pb-3 bg-white'>
                <div className={' w-full flex justify-center px-4'}>
                    <img src="/logo-mini.png" alt="" className='w-20 aspect-auto'/>
                    {/*<nav className=' hidden sm:flex '>*/}

                    {/*    <ul className='flex gap-3'>*/}
                    {/*        <li><a href=""></a>Home</li>*/}
                    {/*        <li><a href=""></a>My tasks</li>*/}
                    {/*        <li><a href=""></a>Profile</li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                </div>
            </header>
            <section className='mt-6 px-3 flex flex-col items-center'>
                <p className='text-4xl break-words whitespace-normal text-center font-bold text-[#107888]'>Что нужно
                    сделать?</p>
                <p className='text-center mt-1 text-2sm leading-5 text-gray-600'>Профессиональные услуги по ремонту и
                    обслуживанию.</p>
                <img src="/rest.png" alt="" className='w-9/12 aspect-auto'/>
            </section>

            <section className='mt-10 p-2'>
                {/*{*/}
                {/*    items.map(item => <CategoryItem title={item.title} icon={item.icon}  />)*/}
                {/*}*/}
                <CategoryList/>
            </section>
        </div>
    );
};

