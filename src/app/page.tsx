'use client'

import React, {useState} from 'react';
import WhyWe from "@/app/[home-components]/WhyWe";
import CategoryList2 from "@/app/[home-components]/CategoryList";
import Next from "@/app/[home-components]/Next";
import Steps from "@/app/[home-components]/Steps";
import Discount from "@/app/[home-components]/Discount";
import Reviews from "@/app/[home-components]/Reviews";
import Main from "@/app/[home-components]/Main";
import Categories3 from "@/app/[home-components]/Categories3";
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {FaTelegram, FaViber, FaWhatsapp} from "react-icons/fa";
import {Textarea} from "@/components/ui/textarea";


export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const iconSize = 40
    const social = [
        {
            icon: <FaViber size={iconSize} color={'#665CAC'}/>,
            title: 'Viber'
        },
        {
            icon: <FaWhatsapp size={iconSize} color={'#25D366'}/>,
            title: 'Whatsapp'
        },
        {
            icon: <FaTelegram size={iconSize} color={'#0088CC'}/>,
            title: 'Telegram'
        },

    ]

    return (
        <div>
            <Main onMakeApp={setIsOpen}/>
            <div className='md:w-11/12 lg:w-7/12 m-auto p-5 md:mt-10'>
                <Categories3/>
                {/*<Steps/>*/}
                {/*<CategoryList2/>*/}
                <Discount/>
                <WhyWe/>
                <Reviews/>
            </div>

            <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
                <DialogContent className="sm:max-w-[425px] -mt-20">
                    <DialogHeader>
                        <DialogTitle>Подача заявки</DialogTitle>
                        <DialogDescription>
                            Выберите удобный для вас месенджер. Получите моментальный ответ от нашего оператора.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Имя
                            </Label>
                            <Input id="name" placeholder={'Как вас зовут?'} className="col-span-3"/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Что нужно сделать?
                            </Label>
                            <Textarea id="description" placeholder={'Коротоко опишите задание'} rows={4}  className="col-span-3"/>
                        </div>
                    </div>
                    <DialogFooter className={'sm:justify-center'}>
                        <div className={'flex justify-around px-10 sm:gap-10'} >
                            {
                                social.map((item, index) =>
                                    <button key={index} className='flex flex-col items-center ' >
                                        {item.icon}
                                        {item.title}
                                    </button>
                                )
                            }
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>


    );
};
