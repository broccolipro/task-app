'use client'

import {categories} from "@/shared/categories";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,

} from "@/components/ui/dialog"
import {useContext, useState} from "react";
import {AppContext} from "@/shared/providers/AppProvider";


export default function () {
    const {categoryIsOpen, setCategoryIsOpen, setOrderIsOpen, findMoreRef, currentLang, t} = useContext(AppContext)
    const [current, setCurrent] = useState(categories[0])


    return (
        <div ref={findMoreRef} className='pt-8'>
            <div className='space-y-3 md:w-10/12 m-auto'>
                <h1 className='font-nunito font-semibold text-3xl text-center'>
                    {t('professionals_services_h')}
                </h1>
                <p className='text-center text-mute text-xl'>
                    {t('professionals_services_p')}
                </p>
            </div>

            <div className='grid md:grid-cols-[1fr_1fr_1fr] gap-4 md:gap-20 my-10'>
                {
                    categories.map((item, index) =>
                        <button
                            className='bg-tbg rounded-xl overflow-hidden flex md:block shadow-[0_0_5px_rgba(0,0,0,0.2)]'
                            key={item.id}
                            onClick={() => {
                                setCurrent(categories[index])
                                setCategoryIsOpen(true)
                            }}
                        >
                            <img src={`/categories/${item.value}.png`}
                                 alt=""
                                 className='object-cover max-w-28 sm:max-w-36 md:max-w-full'
                            />
                            <div className='p-3 my-auto'>
                                <span className='font-nunito font-bold text-xl line-clamp-1'>{item.title[currentLang]}</span>
                            </div>

                        </button>
                    )
                }
            </div>

            <Dialog open={categoryIsOpen} onOpenChange={(open) => setCategoryIsOpen(open)}>
                <DialogContent className='font-nunit h-[100dvh] sm:h-auto overflow-y-auto '>
                    <DialogHeader>
                        <DialogTitle className='font-bold text-2xl'>
                            {current.title[currentLang]}
                        </DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    <div className={`p-5`}>
                        <ul className='list-disc space-y-2 font-bold'>
                            {
                                current.options.map(opt =>
                                    <li key={opt[currentLang]}>
                                        <div className='border rounded-2xl p-1 pl-2'>
                                            {opt[currentLang]}
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                        <div className='mt-10'>
                            <img src={`categories/${current.value}.png`} alt="" className='rounded-xl'/>
                        </div>
                        <div className='text-center'>
                            <button className='w-full bg-tint p-2 font-nunito font-bold rounded-lg text-white mt-5'
                                    onClick={() => {
                                        setCategoryIsOpen(false)
                                        setOrderIsOpen(true)
                                    }}
                            >
                                {t('order_service')}
                            </button>
                        </div>

                    </div>

                </DialogContent>
            </Dialog>

        </div>
    )
}
