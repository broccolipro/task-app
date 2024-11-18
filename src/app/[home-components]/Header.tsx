'use client'
import React, {useContext, useRef, useState} from "react";
import {IoIosMenu} from "react-icons/io";
import {BiMenu} from "react-icons/bi";
import { Menu } from 'lucide-react';
import {DrawerContext} from "@/shared/drawer/DrawerProvider";


export default function Header() {

    const {open, setOpen} = useContext(DrawerContext)
    const divRef = useRef<HTMLDivElement>(null)

    return (
        <header className='border-b bg-white'>
            <div className={' w-full flex justify-center items-center p-3'}>
                <div className='absolute left-0 ml-2'>
                    <Menu size={30} color={'#095662'} onClick={() => setOpen(!open)} />
                </div>

                <div className='' ref={divRef}>
                    <a href="/">
                        <img src="/logo-mini.png" alt="" className='w-16 aspect-auto'/>
                    </a>
                </div>
            </div>
        </header>
    )
}
