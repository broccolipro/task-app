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
import {useState} from "react";


export default function () {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className='space-y-3 md:w-10/12 m-auto' >
                <h1 className='font-nunito font-semibold text-3xl text-center'>Воспользуйтесь услугами
                    профессионалов</h1>
                <p className='text-center text-mute'>Наша команда опытных мастеров поможет вам решить вашу бытовую задачу. Весь
                    процесс займет всего несколько шагов</p>
            </div>


            <div className='grid lg:grid-cols-[auto_auto] my-5 lg:w-8/12 m-auto'>
                {
                    categories.map(item =>
                        <button className={`font-nunito flex p-2 py-4 border-b items-center gap-5 lg:border-none`}
                                onClick={() => setIsOpen(true)}
                             key={item.id}>
                            {item.icon}
                            {item.title}
                            <GrNext className={'ml-auto lg:hidden'} color={'#929292'}/>
                        </button>
                    )
                }
            </div>

            <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)} >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}
