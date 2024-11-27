'use client'
import React, {useContext} from "react";
import {Menu} from 'lucide-react';
import {DrawerContext} from "@/shared/drawer/DrawerProvider";
import Logo from "../Logo";
import LoginButton from '@/components/LiginButton'
import {RxDividerVertical} from "react-icons/rx";
import SignInButton from "@/components/SignUpButton";
import {Button} from "@/components/ui/button";
import Link from "next/link";


export default function Header() {

    const {open, setOpen} = useContext(DrawerContext)

    const navButtons = [
        'Главная',
        'Создать',
        'О нас',
    ]

    return (
        <header className='border-b bg-white'>
            <div
                className={'flex justify-center items-center m-auto w-full h-16  lg:h-20 lg:justify-between lg:w-9/12 '}>
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
                    <div className='flex ml-3 space-x-3' >
                        <LoginButton/>
                        <Button asChild>
                            <Link href="/signup">Регистрация</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
