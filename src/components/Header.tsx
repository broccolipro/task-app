'use client'
import React, {useContext} from "react";
import {Menu} from 'lucide-react';
import Logo from "./Logo";
import {RxDividerVertical} from "react-icons/rx";
import {GrLanguage} from "react-icons/gr";
import NavButtons from "@/components/NavButtons";
import {AppContext} from "@/shared/providers/AppProvider";


export default function Header() {

    const { setSidebarIsOpen, currentLang, switchLanguage } = useContext(AppContext)

    const Language = () =>
        <button className='flex gap-2'
                onClick={switchLanguage}
        >
            <GrLanguage className='w-auto' size={20}/>
            <h1>{currentLang}</h1>
        </button>


    return (
        <header className='border-b bg-white sticky top-0 z-20'>
            <div
                className={'flex justify-center items-center m-auto w-full h-16  lg:justify-between lg:w-8/12 '}>
                <div className='absolute left-0 ml-2 lg:hidden cursor-pointer'>
                    <Menu size={32} color={'#095662'} onClick={() => setSidebarIsOpen(true)}/>
                </div>
                <Logo className='w-20'/>
                <div className={`absolute right-5 lg:hidden`}>
                    <Language/>
                </div>

                <div className='lg:flex items-center hidden'>
                    <ol className='flex space-x-4 font-nunito font-bold text-lg'>
                        <NavButtons/>
                    </ol>
                    <RxDividerVertical size={20} color={'gray'} className='ml-3'/>
                    <div className={`ml-5`}>
                        <Language/>
                    </div>

                </div>
            </div>
        </header>
    )
}
