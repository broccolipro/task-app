'use client'

import {categories} from "@/shared/categories";
import { GrNext } from "react-icons/gr";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,

} from "@/components/ui/dialog"
import {useContext, useState} from "react";
import {AppContext} from "@/shared/providers/AppProvider";


export default function () {
    const {categoryIsOpen, setCategoryIsOpen, setOrderIsOpen, findMoreRef} = useContext(AppContext)
    const [current, setCurrent] = useState(categories[0])

    return (
        <div ref={findMoreRef} className='pt-8'>
            <div className='space-y-3 md:w-10/12 m-auto' >
                <h1 className='font-nunito font-semibold text-3xl text-center'>Воспользуйтесь услугами
                    профессионалов</h1>
                <p className='text-center text-mute'>Наша команда опытных мастеров поможет вам решить вашу бытовую задачу. Весь
                    процесс займет всего несколько шагов</p>
            </div>


            <div className='grid lg:grid-cols-[auto_auto] my-5 lg:w-8/12 m-auto gap-1 lg:gap-3'>
                {
                    categories.map(item =>
                        <button className={`font-nunito bg-white rounded-lg shadow-xl flex p-3 py-4 border-b items-center text-left gap-5 lg:border-none md:hover:bg-tbg`}
                                onClick={() => {
                                    setCurrent(item)
                                    setCategoryIsOpen(true)
                                }}
                             key={item.id}
                        >
                            {item.icon}
                            {item.title}
                            <GrNext className={'ml-auto lg:hidden'} color={'#929292'}/>
                        </button>
                    )
                }
            </div>

            <Dialog open={categoryIsOpen} onOpenChange={(open) => setCategoryIsOpen(open)} >
                <DialogContent className='font-nunito'>
                    <DialogHeader>
                        <DialogTitle className='font-bold text-2xl'>
                            {current.title}
                        </DialogTitle>
                        <DialogDescription>

                        </DialogDescription>
                    </DialogHeader>
                    <div className={`p-5`}>
                        <ul className='list-disc text-xl'>
                            {
                                current.options.map(opt =>
                                    <li key={opt}>{opt}</li>
                                )
                            }
                        </ul>
                        <div className='mt-10'>
                            <img src={`categories/${current.value}.webp`} alt="" className='rounded-xl'/>
                        </div>
                        <div className='text-center'>
                            <button className='w-full bg-tint p-2 rounded-lg text-white mt-5'
                                    onClick={() => {
                                        setCategoryIsOpen(false)
                                        setOrderIsOpen(true)
                                    }}
                            >
                                Заказать услугу
                            </button>
                        </div>

                    </div>

                </DialogContent>
            </Dialog>

        </div>
    )
}
