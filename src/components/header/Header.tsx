'use client'
import React, {useContext} from "react";
import {Menu} from 'lucide-react';
import {DrawerContext} from "@/shared/drawer/DrawerProvider";
import Logo from "../Logo";
import LoginButton from '@/components/LiginButton'
import {RxDividerVertical} from "react-icons/rx";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {GrLanguage} from "react-icons/gr";


export default function Header() {

    const {open, setOpen} = useContext(DrawerContext)

    const navButtons = [
        'Главная',
        'Создать',
        'О нас',
    ]

    const Language = ({className}) =>
        <div className={`absolute right-5 ${className}`}>
            <div className='flex gap-2'>
                <GrLanguage className='w-auto' size={20}/>
                <h1>ru</h1>
            </div>

        </div>

    return (
        <header className='border-b bg-white sticky top-0 z-50'>
            <div
                className={'flex justify-center items-center m-auto w-full h-16  lg:justify-between lg:w-8/12 '}>
                <div className='absolute left-0 ml-2 lg:hidden'>
                    <Menu size={32} color={'#095662'} onClick={() => setOpen(!open)}/>
                </div>
                <Logo className={'max-w-24'}/>
                <Language className='lg:hidden' />

                <div className='lg:flex items-center hidden'>
                    <ol className='flex space-x-4 font-nunito font-bold text-lg'>
                        {
                            navButtons.map((name, index) =>
                                <li key={index}>
                                    <a href="#">
                                        {name}
                                    </a>
                                </li>
                            )
                        }
                    </ol>
                    <RxDividerVertical size={20} color={'gray'} className='ml-3'/>
                    <button className={`ml-5`}>
                        <div className='flex gap-2'>
                            <GrLanguage className='w-auto' size={20}/>
                            <h1>ru</h1>
                        </div>

                    </button>

                </div>
            </div>
        </header>
    )
}
