'use client'

import React, {useContext, useState} from 'react';
import WhyWe from "@/app/[home-components]/WhyWe";
import Discount from "@/app/[home-components]/Discount";
import Reviews from "@/app/[home-components]/Reviews";
import Main from "@/app/[home-components]/Main";
import Categories3 from "@/app/[home-components]/Categories3";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import AboutUs from "@/app/[home-components]/AboutUs";
import {useForm} from "react-hook-form"
import { useRouter } from 'next/navigation';
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import PresentAlertDialog from "@/app/[home-components]/AlertDialog";
import social from "@/shared/social";
import {AppContext} from "@/shared/providers/AppProvider";


export default function Home() {
    const {orderIsOpen, setOrderIsOpen} = useContext(AppContext)
    const [select, setSelect] = useState('telegram')
    const form = useForm()


    return (
        <div>
            <PresentAlertDialog/>
            <Main/>
            <div className='md:w-11/12 lg:w-9/12 xl:w-7/12 m-auto p-5 md:mt-10 sm:space-y-20'>
                <Categories3/>
                <Discount/>
                <WhyWe/>
                <Reviews/>

            </div>
            <AboutUs/>

            <Dialog open={orderIsOpen} onOpenChange={(value) => {
                setOrderIsOpen(value)
            }}>
                <DialogContent className="sm:max-w-[425px] -mt-20">
                    <DialogHeader>
                        <DialogTitle>Подача заявки</DialogTitle>
                        <DialogDescription>
                            Выберите удобное для вас приложение для связи с вами и нажмите перейти.
                        </DialogDescription>
                    </DialogHeader>

                    <Form {...form}>

                        <form className="w-2/3 space-y-6">

                            <FormField
                                name="messenger"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Мессенджер</FormLabel>
                                        <Select  defaultValue={'telegram'} onValueChange={(value) => setSelect(value)}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Выберите приложение"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value={'telegram'}>
                                                    <div
                                                        className='flex justify-center items-center gap-2'>{social.telegram.icon(20)}
                                                        Telegram
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value={'whatsapp'}>
                                                    <div
                                                        className='flex justify-center items-center gap-2'>{social.whatsapp.icon(20)}
                                                        Whatsapp
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value={'viber'}>
                                                    <div
                                                        className='flex justify-center items-center gap-2'>{social.viber.icon(20)}
                                                        Viber
                                                    </div>
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Мы советуем пользоватья Telegram для большего удобства
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button onClick={() =>setOrderIsOpen(false)}><a href={social[select].href}>Перейти</a></Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
};
