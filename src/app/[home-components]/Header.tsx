'use client'
import React, {useContext} from "react";
import {Menu} from 'lucide-react';
import {DrawerContext} from "@/shared/drawer/DrawerProvider";
import Logo from "./Logo";


export default function Header() {

    const {open, setOpen} = useContext(DrawerContext)

    return (
        <header className='border-b bg-white'>
            <div className={' w-full flex lg:justify-start justify-center items-center p-3 lg:w-8/12 m-auto'}>
                <div className='absolute left-0 ml-2 lg:hidden'>
                    <Menu size={30} color={'#095662'} onClick={() => setOpen(!open)}/>
                </div>

                <Logo size={16}/>
            </div>
        </header>
    )
}
