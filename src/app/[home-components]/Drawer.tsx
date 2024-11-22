'use client'

import React, {useContext, useState} from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {DrawerContext} from "@/shared/drawer/DrawerProvider";
import Logo from "./Logo";

export default function Drawer() {
    const {open, setOpen} = useContext(DrawerContext)

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-44">
                        <DialogPanel
                            transition
                            className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700"
                        >
                            <TransitionChild>
                                <div className="absolute right-0 top-0 -mr-10 flex pl-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-mr-10 sm:pl-4">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                    >
                                        <span className="absolute -inset-2.5" />
                                        <span className="sr-only">Close panel</span>
                                        <XMarkIcon aria-hidden="true" className="size-10" color={'white'}/>
                                    </button>
                                </div>
                            </TransitionChild>
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div className="px-4 sm:px-6">
                                    <Logo className={'w-24'}/>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    Главная
                                    <br/>
                                    О нас
                                    <br/>
                                    Контакты
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
