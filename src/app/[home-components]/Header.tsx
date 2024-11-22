'use client'
import React, {useContext} from "react";
import {Menu} from 'lucide-react';
import {DrawerContext} from "@/shared/drawer/DrawerProvider";
import Logo from "./Logo";
import {FiLogIn} from "react-icons/fi";
import {RxDividerVertical} from "react-icons/rx";


export default function Header() {

    const {open, setOpen} = useContext(DrawerContext)

    const navButtons = [
        'Главная',
        'Создать',
        'О нас',
    ]

    return (
        <header className='border-b bg-white'>
            <div className={'flex justify-center items-center m-auto w-full h-16  lg:h-20 lg:justify-between lg:w-9/12 '}>
                <div className='absolute left-0 ml-2 lg:hidden'>
                    <Menu size={32} color={'#095662'} onClick={() => setOpen(!open)}/>
                </div>
                <Logo className={'max-w-24'}/>
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
                    <a href="/login" className='ml-3'>
                        <div className='flex space-x-1 border-0 rounded-full border-black items-center px-2 py-2'>
                            <span className={'font-bold text-sm text-gray-600'}>Войти</span>
                            <FiLogIn size={20} className={'stroke-gray-600'}/>
                        </div>
                    </a>
                    <a href="/login" className='ml-2'>
                        <div className='flex space-x-2 border-0 bg-tint rounded-full border-black items-center px-4 py-2'>
                            <span className={'font-bold text-sm text-white'}>Регистрация</span>
                            {/*<FiLogIn size={20} className=''/>*/}
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}
